import useFetch from "./useFetch";

// useConditionalFetch has been added because:
// -- We don't want to call useFetch when unnecessary (mocked===true)
// -- A hook cannot be called after a condition (!mocked?)

export default function useConditionalFetch<T>(
    url: string | null,
    mocked: boolean
): {
    data: T | null;
    loading: boolean;
    error: string | null;
} {
    if (mocked || !url) {
        return { data: null, loading: false, error: null };
    }

    return useFetch<T>(url);
}