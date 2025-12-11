import {
  useMutation,
  useQueryClient,
  type MutationFunction,
  type UseMutationOptions,
  type QueryKey,
} from '@tanstack/react-query';
import { toast } from 'sonner';

interface CustomMutationOptions<
  TData,
  TError,
  TVariables,
  TOnMutateResult,
> extends UseMutationOptions<TData, TError, TVariables, TOnMutateResult> {
  successMessage?: string;
  errorMessage?: string;
  invalidateKeys?:
    | QueryKey[]
    | ((data: TData, variables: TVariables) => QueryKey[]);
}

export const useCustomMutation = <
  TData = unknown,
  TError = Error,
  TVariables = void,
  TOnMutateResult = unknown,
>(
  mutationFn: MutationFunction<TData, TVariables>,
  options: CustomMutationOptions<
    TData,
    TError,
    TVariables,
    TOnMutateResult
  > = {},
) => {
  const queryClient = useQueryClient();
  const {
    successMessage,
    errorMessage,
    invalidateKeys,
    onSuccess,
    onError,
    ...rest
  } = options;

  return useMutation({
    mutationFn,
    ...rest,
    onSuccess: (data, variables, onMutateResult, context) => {
      if (invalidateKeys) {
        const keys =
          typeof invalidateKeys === 'function'
            ? invalidateKeys(data, variables)
            : invalidateKeys;

        keys.forEach((key) => {
          queryClient.invalidateQueries({ queryKey: key });
        });
      }

      if (successMessage) {
        toast.success(successMessage);
      }

      if (onSuccess) {
        onSuccess(data, variables, onMutateResult, context);
      }
    },
    onError: (error, variables, onMutateResult, context) => {
      console.error(error);
      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        toast.error('오류가 발생하였습니다. 다시 시도해주세요.');
      }

      if (onError) {
        onError(error, variables, onMutateResult, context);
      }
    },
  });
};
