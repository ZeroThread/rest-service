import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
  body: object({
    name: string({ required_error: 'Opps! Name is required' }),
    email: string({ required_error: 'Opps! Email is required' }).email({
      message: 'Opps! please enter a valid email',
    }),
    password: string({ required_error: 'Opps! Password is required' }).min(6, {
      message: 'Password must be at least 6 characters long',
    }),
    confirmPassword: string({
      required_error: 'Opps! Password Confirmation is required',
    }).min(6, {
      message: 'Password must be at least 6 characters long',
    }),
  }).refine((data) => data.password === data.confirmPassword, {
    message: 'Password does not match confirmation password',
    path: ['confirmPassword'],
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  'body.confirmPassword'
>;
