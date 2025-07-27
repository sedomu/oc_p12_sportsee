import {useEffect, useState} from "react";

export default function useFetch(url: string){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);

                // ✅ Vérifie si la réponse HTTP est OK (status 200-299)
                if (!response.ok) {
                    throw new Error(`Erreur ${response.status} : ${response.statusText}`);
                }

                const json = await response.json();
                setData(json);
                setError(null);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        })().catch((e) => {
            console.error("Erreur non attrapée :", e);
        });
    }, [url]);

    return { loading, data, error }
}