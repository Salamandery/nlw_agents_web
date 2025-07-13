import { useQuery } from '@tanstack/react-query';
import type { GetRoomsApiResponse } from './types/get-room-response';

export function useRooms() {
  return useQuery<GetRoomsApiResponse>({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      // Simulate fetching data
      const response = await fetch('http://localhost:3333/rooms');

      const result: GetRoomsApiResponse = await response.json();
      return result;
    },
  });
}
