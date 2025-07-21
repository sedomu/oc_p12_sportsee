// @ts-ignore
import {USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_ACTIVITY, USER_PERFORMANCE} from "../data/mocked-data.js";
import {useState, useEffect} from "react";
import useNormalisedData from "./useNormalisedData.tsx"

type Props = {
    userId: number,
    url?: string | null,
    mocked?: boolean,
}

function filterUser(data, userId) {
    return data.filter(user => user.id === userId || user.userId === userId)[0]
}

export default function useFetch({ userId, url = null, mocked = false}: Props) {
    const [data, setData] = useState(null)

    useEffect(():any => {
        if (mocked){
            useNormalisedData(
                filterUser(USER_MAIN_DATA, userId),
                filterUser(USER_ACTIVITY, userId),
                filterUser(USER_AVERAGE_SESSIONS, userId),
                filterUser(USER_PERFORMANCE, userId)
                )
        }
    }, []);



    return data
}