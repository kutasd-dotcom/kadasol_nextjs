"use client";

import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, provider } from "../../lib/firebase-config";

export default function SignIn() {
    const router = useRouter();

    useEffect(() => {
        getRedirectResult(auth).then(async (userCred) => {
            if (!userCred) {
                return;
            }

            fetch("/api/login", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${await userCred.user.getIdToken()}`,
                },
            }).then((response) => {
                if (response.status === 200) {
                    router.push("/protected");
                }
            });
        });
    }, []);

    async function signIn() {
        await signInWithRedirect(auth, provider);
        window.location.reload()
    }

    return (
        { signIn }
    );
}