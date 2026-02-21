import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.enum(['acting', 'modeling', 'podcast', 'filmmaking', 'other'], {
    error: 'Please select a subject',
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const subjectOptions: { value: ContactFormValues['subject']; label: string }[] = [
  { value: 'acting', label: 'Acting Inquiry' },
  { value: 'modeling', label: 'Modeling Inquiry' },
  { value: 'podcast', label: 'Podcast' },
  { value: 'filmmaking', label: 'Film Making' },
  { value: 'other', label: 'Other' },
];
