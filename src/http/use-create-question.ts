import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateQuestionApiResponse } from './types/create-question.response';
import type { CreateQuestionApiRequest } from './types/create-question-request';
import type { GetRoomQuestionsApiResponse } from './types/get-room-questions-response';

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateQuestionApiRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const result: CreateQuestionApiResponse = await response.json();

      return result;
    },

    onMutate: ({ question }) => {
      const questions =
        queryClient.getQueryData<GetRoomQuestionsApiResponse>([
          'get-questions',
          roomId,
        ]) || [];

      const questionArray = questions ?? [];
      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
        isGeneratingAnswer: true,
      };

      queryClient.setQueryData<GetRoomQuestionsApiResponse>(
        ['get-questions', roomId],
        [newQuestion, ...questionArray]
      );

      return { newQuestion, questions };
    },
    onSuccess(data, variables, context) {
      queryClient.setQueryData<GetRoomQuestionsApiResponse>(
        ['get-questions', roomId],
        (questions) => {
          if (!questions) {
            return questions;
          }
          if (!context?.newQuestion) {
            return questions;
          }
          return questions.map((question) => {
            if (question.id === context.newQuestion?.id) {
              return {
                ...context.newQuestion,
                id: data.questionId,
                answer: data.answer,
                isGeneratingAnswer: false,
              };
            }
            return question;
          });
        }
      );
    },

    onError(error, variables, context) {
      const questions = context?.questions;
      if (questions) {
        queryClient.setQueryData<GetRoomQuestionsApiResponse>(
          ['get-questions', roomId],
          questions
        );
      } else {
        queryClient.setQueryData<GetRoomQuestionsApiResponse>(
          ['get-questions', roomId],
          []
        );
      }
    },
  });
}
