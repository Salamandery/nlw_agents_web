import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateRoomApiRequest } from './types/create-room-request';
import type { CreateRoomApiResponse } from './types/create-room-response';

export function useCreateRoom() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateRoomApiRequest) => {
      const response = await fetch('http://localhost:3333/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: CreateRoomApiResponse = await response.json();

      return result;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-rooms'] });
    },
  });
}
