export type UserMainData = {
    id: number;
    userInfos: {
        firstName: string;
        lastName: string;
        age: number;
    };
    score?: number;
    todayScore?: number;
    keyData: {
        calorieCount: number;
        proteinCount: number;
        carbohydrateCount: number;
        lipidCount: number;
    };
};

export type UserActivity = {
    userId: number;
    sessions: {
        day: string;
        kilogram: number;
        calories: number;
    }[];
};

export type UserAverageSessions = {
    userId: number;
    sessions: {
        day: number;
        sessionLength: number;
    }[];
};

export type UserPerformance = {
    userId: number;
    kind: {
        [key: number]: string;
    };
    data: {
        value: number;
        kind: number;
    }[];
};

export type NormalisedData = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    score: number;
    calories: number;
    protein: number;
    carbohydrate: number;
    lipid: number;
    lastSessions: {
        day: string;
        kilogram: number;
        calories: number;
    }[];
    averageSessions: {
        day: number;
        sessionLength: number;
    }[];
    skillsKind: {
        [key: number]: string;
    };
    skillsData: {
        value: number;
        kind: number;
    }[];
};

export default function useNormalisedData(
    userMainData: UserMainData,
    userActivity: UserActivity,
    userAverageSessions: UserAverageSessions,
    userPerformance: UserPerformance
): NormalisedData {
    return {
        id: userMainData.id,
        firstName: userMainData.userInfos.firstName,
        lastName: userMainData.userInfos.lastName,
        age: userMainData.userInfos.age,
        score: userMainData.score ?? userMainData.todayScore ?? 0,
        calories: userMainData.keyData.calorieCount,
        protein: userMainData.keyData.proteinCount,
        carbohydrate: userMainData.keyData.carbohydrateCount,
        lipid: userMainData.keyData.lipidCount,
        lastSessions: userActivity.sessions,
        averageSessions: userAverageSessions.sessions,
        skillsKind: userPerformance.kind,
        skillsData: userPerformance.data
    };
}
