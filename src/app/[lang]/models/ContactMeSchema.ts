import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
  recaptchaToken: z.string().min(1, 'Recaptcha is required'),
  telephone: z.string().optional(),
});
