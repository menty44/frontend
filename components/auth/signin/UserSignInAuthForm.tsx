'use client';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TypeOf, z } from 'zod';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { signIn } from 'next-auth/react';
import { IoPerson } from 'react-icons/io5';
import { Input } from '@/components/ui/input';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const schema = z.object({
  email: z.string().email('Invalid email').nonempty('Email is required'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .nonempty('Password is required'),
});
export type SignUpUserInput = TypeOf<typeof schema>;

const UserSignInAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const methods = useForm<SignUpUserInput>({
    resolver: zodResolver(schema),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  }: any = methods;

  const onSubmit = async (data: SignUpUserInput) => {
    // Handle form submission
    setIsLoading(true);

    try {
      await signIn('credentials', { ...data });
      reset();
    } catch (error) {
      setIsLoading(false);

      toast({
        title: 'Error',
        description: 'There was an error logging in with credentials!',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
        <label className="block text-sm font-medium leading-6 text-white">
          Email:
          <Input type="text" {...register('email')} />
          {errors.email && (
            <span className="text-red-300">{errors.email.message}</span>
          )}
        </label>
        <label className="block text-sm font-medium leading-6 text-white">
          Password:
          <Input type="password" {...register('password')} />
          {errors.password && (
            <span className="text-red-300">{errors.password.message}</span>
          )}
        </label>

        <Button
          isLoading={isLoading}
          type="submit"
          size="sm"
          className="rounded-full flex w-full justify-center bg-sky-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          disabled={isLoading}
        >
          {isLoading ? null : <IoPerson className="w-4 h-4 mr-2" />}
          signIn
        </Button>
      </form>
    </>
  );
};

export default UserSignInAuthForm;
