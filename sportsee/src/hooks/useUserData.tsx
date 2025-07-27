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
import useFetch from "./useFetch.tsx";

type Props = {
    userId: number;
    mocked?: boolean;
};

type UserLike = { id?: number; userId?: number };

function filterUser<T extends UserLike>(data: T[], userId: number): T | undefined {
    return data.find(user => user.id === userId || user.userId === userId);
}

export function useUserData({
                                userId,
                                mocked = false
                            }: Props): {
    data: NormalisedData | null;
    loading: boolean;
    error: string | null;
} {
    const [data, setData] = useState<NormalisedData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // API fetchs
    const { data: mainData, loading: mainLoading, error: mainError } = useFetch(`http://localhost:3000/user/${userId}`);
    const { data: activityData, loading: activityLoading, error: activityError } = useFetch(`http://localhost:3000/user/${userId}/activity`);
    const { data: sessionsData, loading: sessionsLoading, error: sessionsError } = useFetch(`http://localhost:3000/user/${userId}/average-sessions`);
    const { data: performanceData, loading: performanceLoading, error: performanceError } = useFetch(`http://localhost:3000/user/${userId}/performance`);

    useEffect(() => {
        if (mocked) {
            const main = filterUser(USER_MAIN_DATA, userId);
            const activity = filterUser(USER_ACTIVITY, userId);
            const sessions = filterUser(USER_AVERAGE_SESSIONS, userId);
            const performance = filterUser(USER_PERFORMANCE, userId);

            if (main && activity && sessions && performance) {
                const result = useNormalisedData(main, activity, sessions, performance);
                setData(result);
                setError(null);
            } else {
                setData(null);
                setError("Données mockées incomplètes.");
            }

            setLoading(false);
        } else {
            const isLoading =
                mainLoading || activityLoading || sessionsLoading || performanceLoading;
            const hasError =
                mainError || activityError || sessionsError || performanceError;

            if (!isLoading) {
                if (!hasError && mainData && activityData && sessionsData && performanceData) {
                    const result = useNormalisedData(
                        mainData.data,
                        activityData.data,
                        sessionsData.data,
                        performanceData.data
                    );
                    setData(result);
                    setError(null);
                } else {
                    setData(null);
                    setError(mainError || activityError || sessionsError || performanceError || "Erreur inconnue.");
                }

                setLoading(false);
            }
        }
    }, [
        mocked,
        userId,
        mainData,
        activityData,
        sessionsData,
        performanceData,
        mainLoading,
        activityLoading,
        sessionsLoading,
        performanceLoading,
        mainError,
        activityError,
        sessionsError,
        performanceError
    ]);

    return { data, loading, error };
}
