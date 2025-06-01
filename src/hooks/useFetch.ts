import { useQuery, UseQueryOptions } from '@tanstack/react-query';

// Generic fetch function
const fetchData = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Custom hook interface
interface UseFetchOptions<T> extends Omit<UseQueryOptions<T, Error, T, (string | number)[]>, 'queryKey' | 'queryFn'> {
  url: string;
  fetchOptions?: RequestInit;
  queryKey?: (string | number)[];
}

// Custom useFetch hook
export const useFetch = <T = unknown>({
  url,
  fetchOptions,
  queryKey,
  ...queryOptions
}: UseFetchOptions<T>) => {
  // Generate query key - use provided key or default to URL
  const key = queryKey || [url];

  return useQuery({
    queryKey: key,
    queryFn: () => fetchData<T>(url, fetchOptions),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (updated from cacheTime)
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    ...queryOptions,
  });
};

// Convenience hooks for common HTTP methods
export const useGet = <T = unknown>(
  url: string,
  options?: Omit<UseFetchOptions<T>, 'url' | 'fetchOptions'>
) => {
  return useFetch<T>({
    url,
    fetchOptions: { method: 'GET' },
    ...options,
  });
};

export const usePost = <T = unknown>(
  url: string,
  data?: unknown,
  options?: Omit<UseFetchOptions<T>, 'url' | 'fetchOptions'>
) => {
  return useFetch<T>({
    url,
    fetchOptions: {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    },
    enabled: false, // Don't auto-fetch for POST requests
    ...options,
  });
};