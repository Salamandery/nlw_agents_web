import { useQuery } from '@tanstack/react-query';
import type { GetRoomQuestionsApiResponse } from './types/get-room-questions-response';

export function useRoomQuestions(roomId: string) {
  return useQuery<GetRoomQuestionsApiResponse>({
    queryKey: ['get-questions', roomId],
    queryFn: async () => {
      // Simulate fetching data
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`
      );

      const result: GetRoomQuestionsApiResponse = await response.json();
      return result;
    },
  });
}
