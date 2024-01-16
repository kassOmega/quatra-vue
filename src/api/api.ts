import type { CustomerResponse } from '@/order/order-model'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

export const getGustomers = useQuery({
  queryKey: ['customers'],
  queryFn: async (): Promise<CustomerResponse[]> => {
    const response = await axios.get('http://localhost:3000/api/customer')
    return response.data
  }
})
