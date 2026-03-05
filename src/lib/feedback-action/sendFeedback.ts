'use server';
import { ActionResultType } from '@/types/actionResultType';
import { feedbackSchema } from '@/types/schemas/feedbackSchema';
import { Resend } from 'resend';
import { enforceRateLimit } from '../redis/enforceRateLimit';
import { ErrorKey } from '@/types/i18n/keys';
import { formatTopicLabel } from '@/utils/formatTopicLabel';
import { feedbackEmailTemplate } from '@/utils/feedbackEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendFeedback = async (data: FormData): Promise<ActionResultType> => {
  if (!process.env.RESEND_API_KEY) {
    console.warn('Missing RESEND_API_KEY, skipping email send');
    return { ok: true };
  }

  const parsedData = feedbackSchema.parse({
    topic: data.get('topic'),
    name: data.get('name'),
    email: data.get('email'),
    message: data.get('message'),
    company: data.get('company'), // honeypot
  });

  if (parsedData.company && parsedData.company.trim() !== '') {
    return { ok: true };
  }

  const rateLimitResult = await enforceRateLimit({
    action: 'portfolio-feedback',
    email: parsedData.email,
  });

  if (!rateLimitResult.ok) {
    return rateLimitResult;
  }

  const prettyTopic = formatTopicLabel(parsedData.topic);

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [process.env.FEEDBACK_RECEIVER_EMAIL!],
      replyTo: parsedData.email,
      subject: `[Feedback • ${prettyTopic}] ${parsedData.name}`,
      html: feedbackEmailTemplate({
        ...parsedData,
        topic: prettyTopic,
      }),
    });

    return { ok: true };
  } catch (err) {
    console.error('FEEDBACK_MAIL_FAILED', err);
    return { ok: false, error: ErrorKey.FEEDBACK_SEND_FAILED };
  }
};
