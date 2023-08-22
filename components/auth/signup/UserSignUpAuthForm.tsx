'use client';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TypeOf, z } from 'zod';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { IoPerson } from 'react-icons/io5';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Link from 'next/link';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const schema = z.object({
  firstname: z.string().nonempty('First name is required'),
  middlename: z.string().nonempty('Middle name is required'),
  surname: z.string().nonempty('Surname name is required'),
  email: z.string().email('Invalid email').nonempty('Email is required'),
  phone: z.string().nonempty(' phone number is required'),
  nationality: z.string().nonempty('Nationality  is required'),
  gender: z.string().nonempty('Gender is required'),
  terms: z.string().nonempty('Terms are required'),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .nonempty('Password is required'),
  Confirm_password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .nonempty('Password is required'),
});
export type SignUpUserInput = TypeOf<typeof schema>;

const UserSignUpAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<SignUpUserInput>({
    resolver: zodResolver(schema),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  }: any = form;

  const onSubmit = async (user: any) => {
    setIsLoading(true);

    try {
      await axios
        .post(`${process.env.BACKEND_API_SERVICE}/v1/auth/register`, user)
        .then(() => {
          reset();
          setIsLoading(false);
          toast({
            description: 'Your account has been created.',
          });
          router.push(`/sign-in`);
        });
    } catch (err) {
      setIsLoading(false);
      if (err instanceof AxiosError) {
        if (err.response?.status === 409) {
          return toast({
            title: 'User account  exists.',
            description: 'Please login or reset password.',
            variant: 'destructive',
          });
        } else {
          return toast({
            title: 'Something went wrong.',
            description: 'Your account was not created. Please try again.',
            variant: 'destructive',
          });
        }
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
        <div className="gap-2 space-y-4 xs:space-y-0 xs:flex">
          <label className="block text-sm font-medium leading-6 text-white">
            First Name:
            <Input type="text" {...register('firstname')} />
            {errors.firstname && (
              <span className="text-red-300">{errors.firstname.message}</span>
            )}
          </label>
          <label className="block text-sm font-medium leading-6 text-white">
            Middle name:
            <Input type="text" {...register('middlename')} />
            {errors.middlename && (
              <span className="text-red-300">{errors.middlename.message}</span>
            )}
          </label>
          <label className="block text-sm font-medium leading-6 text-white">
            Surename:
            <Input type="text" {...register('surname')} />
            {errors.surname && (
              <span className="text-red-300">{errors.surname.message}</span>
            )}
          </label>
        </div>
        <label className="block text-sm font-medium leading-6 text-white">
          Email:
          <Input type="text" {...register('email')} />
          {errors.email && (
            <span className="text-red-300">{errors.email.message}</span>
          )}
        </label>
        <label className="block text-sm font-medium leading-6 text-white">
          Phone:
          <Input type="text" {...register('phone')} />
          {errors.phone && (
            <span className="text-red-300">{errors.phone.message}</span>
          )}
        </label>
        <div className="gap-2 space-y-4 xs:justify-between xs:space-y-0 xs:flex">
          <label className="block text-sm font-medium leading-6 text-white">
            Nationality:
            <Input type="text" {...register('nationality')} />
            {errors.nationality && (
              <span className="text-red-300">{errors.nationality.message}</span>
            )}
          </label>
          <div className="w-full">
            <label className="block text-sm font-medium leading-6 text-white ">
              Gender:
            </label>
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full rounded-full border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
                      <SelectValue placeholder="Select your Gender" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
            <span className="block text-sm font-medium leading-6 text-white">
              {errors.gender && (
                <span className="text-red-300">{errors.gender.message}</span>
              )}
            </span>
          </div>
        </div>
        <label className="block text-sm font-medium leading-6 text-white">
          Password:
          <Input type="password" {...register('password')} />
          {errors.password && (
            <span className="text-red-300">{errors.password.message}</span>
          )}
        </label>
        <label className="block text-sm font-medium leading-6 text-white">
          Confirm Password:
          <Input type="password" {...register('Confirm_password')} />
          {errors.Confirm_password && (
            <span className="text-red-300">
              {errors.Confirm_password.message}
            </span>
          )}
        </label>
        <div>
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem>
                <Checkbox
                  className="bg-white border-white rounded ring-white data-[state=checked]:bg-sky-400 text-sky-600 focus:ring-0"
                  onCheckedChange={field.onChange}
                />

                <span className="ml-2 text-sm text-white">
                  Agree to
                  <Link href="/terms" className="text-blue-300 underline">
                    Terms and Conditions
                  </Link>
                </span>
              </FormItem>
            )}
          />
          {errors.terms && (
            <span className="text-red-300">{errors.terms.message}</span>
          )}
        </div>

        <Button
          isLoading={isLoading}
          type="submit"
          size="sm"
          className="rounded-full flex w-full justify-center bg-sky-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          disabled={isLoading}
        >
          {isLoading ? null : <IoPerson className="w-4 h-4 mr-2" />}
          Register
        </Button>
      </form>
    </>
  );
};

export default UserSignUpAuthForm;
