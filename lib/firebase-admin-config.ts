import { initializeApp, getApps, cert } from 'firebase-admin/app';

const firebaseAdminConfig = {
    credential: cert({
        projectId: "dkutas-nextjs",
        clientEmail: "firebase-adminsdk-8dmyx@dkutas-nextjs.iam.gserviceaccount.com",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCmSWVgvHAf1Ltd\nb8UZ5jj0C+BMcOf+fRrQ+CHfq7/9QLzUcabnXR6MOtLC5vAjUZBVyOHY7jw+wEek\n00GNqhqOInY7SVEE3Mip88JojbF4AQWekmfCAB/VahFFBtxK8rzs10VNWVBItvbG\ngF6RzpbOm3XwqpmAe6m2/UH6msiKTQGsAuYfQ5BxvHG/03HknjPWxdk3sOglzVT7\nWWIgIIKKjI0zlFvUDY67qBfeGR0vYNMjmYaamKK4yydjcKhO+Ic9tjT3tHc95i6F\nL/Ivjjj2FeoRfbZv0lKwp9LOpMelrqiRN36i3YBoaYyY7SdsoJio7dy/rBfMoPy9\nPJGqd+QXAgMBAAECggEAPOkJr4OW9rHv5+v3IOOJ3Ss0gAujjz64Qe+CSPIao2PB\nR3hSENG1TNyHM0lwkR9hZWrt/45Ulw/Lrn6Ltp6ml4XcFR9oBAXzov1dKvssFK8b\nJdivFQsCniP6K3S14OZFeePoyMp8dAZBIrkG6xXne8rKStvS2pNxuUvPjUKBTtcL\nLFnUOjkZyfgiAr2G1FGnwqcwMnyB9RJzRQTinaAA1YW9GhjGcKCE03xtnvP6FXXA\npOM/zAYAaoa9DGP1YUcFQj6FSdKxTCjOhh+8iJi/bZmyyye5YoiQG8WHZIPgA1cS\nTjqfgt4cxcRLLRa8d6N4C/z4VZuTx/PUs0ieKoiZcQKBgQDOrBRKfNrmCni7v2YI\nALhC6HmypLvwlvUD1UHSTtwlIf/86E5Py7llFvyhp+wklC/krRaWos9/2JsOWo7+\nvuj0Eqj3wASVk5LueIJ4bc150YixfK9QbGxnEO9XOfOtSr7WCDr2f+XTv6L/exQH\nnby36x/8Rv/+kNuRfuRZca3Y5QKBgQDN+bcFYMotWIyL2SVqNjgYgygj04Jd79cj\n6vKlm/Y21MLhIQC5q5AkkS8WHT9dunA7XWjYjrnhzGIYXIpeifpj9LBhypgyCp65\nAxPHbgxVM/A+I4cX3V7wdjhf1ScgYMpaVoO2IAyvteGFZwaD1R5c1WHTZCJj4vG1\n0M+vAatlSwKBgQDBwV/wiWcrHYwc8A522D3nNE3Lplcv8kZYRplD0nzfLyXv89Zf\nRu5TkJ5d67EehfL0nzU7Gf4QrICJj2rZ9x8sm0XfpxxlIoowmbgvsTleyIsvYmZ1\nroBei+jmzMTfpOCOhf7JVBSiVNo6TCf2D/J6Nquw9ttOzH2cxOrN1B6Y5QKBgByu\nl0PSdJTX7cpTlJgzsKAJM3+5pj+6dDT2NI/HJgQAoJqE4/r23v2Ykfv8WqSMn7BE\nk6METPIaadaGnGYJxKpCmoUjlwnw3KVavlhZBLKgpuWgQOGb2+qUK8l8fxRNJiBq\nR7EGyX12UE8pR4j4FmBK/nJXUUqjgZEV4LW3/8v9AoGAeayy268GixTCfJQ704aQ\nU5UW0Hy1hWTlNT2vBqN/IhEHpM0sgXpf8rcXz5nOGSPDY94bdemevdXyvvN2wwYl\npD8LECBuKMr2j0ZBGg75ggnsCqRKS9Wp6nZEDsXqg2STrPn0gl86v7thEUidqmLz\nQqn1pSm6hTdo02Rig/6DMZg=\n-----END PRIVATE KEY-----\n"
    })
}

export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp(firebaseAdminConfig);
    }
}
