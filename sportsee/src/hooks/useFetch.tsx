import {
    USER_MAIN_DATA,
    USER_AVERAGE_SESSIONS,
    USER_ACTIVITY,
    USER_PERFORMANCE
} from "../data/mocked-data";
import { useState, useEffect } from "react";
import useNormalisedData, {
    type NormalisedData
} from "./useNormalisedData";


type Props = {
    userId: number;
    url?: string | null;
    mocked?: boolean;
};

// Type générique pour les objets utilisateurs
type UserLike = { id?: number; userId?: number };

// filterUser retourne un élément ou undefined si non trouvé
function filterUser<T extends UserLike>(data: T[], userId: number): T | undefined {
    return data.find(user => user.id === userId || user.userId === userId);
}

export function useFetch({
                             userId,
                             url = null,
                             mocked = false
                         }: Props): NormalisedData | null {
    const [data, setData] = useState<NormalisedData | null>(null);

    console.log("useFetch : ", userId, url, mocked);

    useEffect(() => {
        if (mocked) {
            const main = filterUser(USER_MAIN_DATA, userId);
            const activity = filterUser(USER_ACTIVITY, userId);
            const sessions = filterUser(USER_AVERAGE_SESSIONS, userId);
            const performance = filterUser(USER_PERFORMANCE, userId);

            if (main && activity && sessions && performance) {
                const result = useNormalisedData(main, activity, sessions, performance);
                setData(result);
            } else {
                console.warn("Données manquantes pour l'utilisateur", userId);
            }
        }
    }, [mocked, userId]);

    return data;
}
