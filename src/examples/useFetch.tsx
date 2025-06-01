// 1. Basic GET Request
// const { data: users, isLoading, error, refetch } = useGet<User[]>(url)

// 2. Conditional Fetching
// const { data: user } = useFetch<User>({
//   url: `/users/${userId}`,
//   queryKey: ['user', userId],
//   enabled: !!userId, // Only fetch when userId exists
// })

// 3. Custom Configuration
// const { data: posts } = useFetch<Post[]>({
//   url: `/posts?userId=${userId}`,
//   staleTime: 2 * 60 * 1000, // Override defaults
//   retry: 1,
// })

// 4. Manual Fetching with Headers
// const { refetch } = useFetch({
//   url: '/protected-endpoint',
//   fetchOptions: {
//     headers: {
//       'Authorization': 'Bearer token',
//     },
//   },
//   enabled: false, // Don't auto-fetch
// })