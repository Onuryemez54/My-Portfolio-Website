import z from 'zod';
import { ErrorKey, FeedbackTopicKey } from '../i18n/keys';

export const feedbackSchema = z.object({
  topic: z.enum(Object.values(FeedbackTopicKey)),

  name: z.string().min(1, { message: ErrorKey.NAME_REQUIRED }),

  email: z
    .string()
    .min(1, { message: ErrorKey.EMAIL_REQUIRED })
    .email({ message: ErrorKey.EMAIL_INVALID }),

  message: z
    .string()
    .min(10, { message: ErrorKey.MESSAGE_TOO_SHORT })
    .max(500, { message: ErrorKey.MESSAGE_TOO_LONG }),

  company: z.string().optional(), // Honeypot field
});

export type FeedbackInput = z.infer<typeof feedbackSchema>;
