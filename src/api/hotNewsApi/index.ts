import useSWR from 'swr'
import { httpClient } from '@/utils/https'
export const useFetchHotNews = (type: string) => {
  const { data, isValidating, error } = useSWR(
    `/new?type=${type}`,
    (url) => httpClient.get(url),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  )
  return {
    hotNews: data?.data.list,
    isValidating,
    error
  }
}
