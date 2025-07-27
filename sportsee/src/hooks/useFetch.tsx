import { useEffect, useState } from "react";

// Hook générique : le type T est le type des données JSON attendues
export default function useFetch<T = any>(url: string) {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;

        (async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Erreur ${response.status} : ${response.statusText}`);
                }

                const json: T = await response.json();

                if (!isCancelled) {
                    setData(json);
                    setError(null);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError(err instanceof Error ? err.message : String(err));
                    setData(null);
                }
            } finally {
                if (!isCancelled) {
                    setLoading(false);
                }
            }
        })();

        return () => {
            isCancelled = true; // pour éviter les fuites mémoire sur composants démontés
        };
    }, [url]);

    return { loading, data, error };
}
