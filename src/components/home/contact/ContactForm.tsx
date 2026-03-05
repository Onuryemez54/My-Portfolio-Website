'use client';
import { FadeRightToLeft } from '@/components/common/animations/FadeRightToLeft';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/context/ToastContext';
import {
  ButtonKey,
  ErrorKey,
  FeedbackTopicKey,
  FormKey,
  SubTitleKey,
  SuccessKey,
  TitleKey,
} from '@/types/i18n/keys';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Title } from '@/components/ui/Title';
import { SubTitle } from '@/components/ui/SubTitle';
import { Form } from '@/components/ui/form/Form';
import { SelectField } from '@/components/ui/form/fields/SelectField';
import { TextField } from '@/components/ui/form/fields/TextField';
import { TextareaField } from '@/components/ui/form/fields/TextareaField';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { FeedbackInput, feedbackSchema } from '@/types/schemas/feedbackSchema';
import { sendFeedback } from '@/lib/feedback-action/sendFeedback';

export const ContactForm = () => {
  const router = useRouter();
  const toast = useToast();

  const tE = useTranslations(ErrorKey.TITLE);
  const tS = useTranslations(SuccessKey.TITLE);
  const tTopic = useTranslations('FEEDBACK_TOPIC');

  const [isPending, setIsPending] = useState(false);

  const form = useForm<FeedbackInput>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      topic: FeedbackTopicKey.GENERAL,
      name: '',
      email: '',
      message: '',
      company: '',
    },
  });

  const watchMessage = form.watch('message');
  const watchEmail = form.watch('email');
  const watchName = form.watch('name');

  const canSubmit = !!watchMessage && !!watchEmail && !!watchName && !isPending;
  const canReset = (!!watchMessage || !!watchEmail || !!watchName) && !isPending;

  const resetForm = () => {
    form.reset({
      topic: FeedbackTopicKey.GENERAL,
      name: '',
      email: '',
      message: '',
      company: '',
    });
  };

  const onSubmit = async (data: FeedbackInput) => {
    setIsPending(true);
    try {
      const formData = new FormData();
      formData.append('topic', data.topic);
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('message', data.message);
      formData.append('company', data.company ?? '');

      const result = await sendFeedback(formData);

      if (!result.ok) {
        toast.error(tE(result.error));
        return;
      }

      toast.success(tS(SuccessKey.FEEDBACK_SENT), 2000, true);
      router.refresh();
    } finally {
      resetForm();
      setIsPending(false);
    }
  };
  return (
    <FadeRightToLeft delay={0.3} className="max-w-md items-center md:col-span-3">
      <div className="from-primary-700/50 to-primary-800/50 text-primary-200 font-body w-full rounded-2xl bg-linear-to-br p-6 shadow-2xl">
        <Title
          variant="secondary"
          className="pt-1 text-center"
          i18nKey={TitleKey.FEEDBACK}
          underline
        />

        <SubTitle variant="tertiary" className="-mt-4" i18nKey={SubTitleKey.FEEDBACK} />

        <Form form={form} onSubmit={onSubmit}>
          <SelectField
            name="topic"
            labelKey={FormKey.TOPIC}
            options={Object.values(FeedbackTopicKey).map((topic) => ({
              value: topic,
              label: tTopic(topic),
            }))}
            disabled={isPending}
          />

          <TextField name="name" labelKey={FormKey.NAME} autoComplete="name" disabled={isPending} />

          <TextField
            name="email"
            labelKey={FormKey.EMAIL}
            autoComplete="email"
            disabled={isPending}
          />

          <TextareaField
            name="message"
            labelKey={FormKey.MESSAGE}
            placeholderKey={FormKey.MESSAGE}
            disabled={isPending}
          />

          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

          <div className="flex items-center justify-between pt-2">
            <Button
              type="button"
              variant="tertiary"
              disabled={!canReset}
              i18nKey={ButtonKey.CLEAR}
              onAction={resetForm}
            />
            <Button
              type="submit"
              variant="primary"
              disabled={!canSubmit}
              isLoading={isPending}
              i18nKey={ButtonKey.SEND_FEEDBACK}
            />
          </div>
        </Form>
      </div>
    </FadeRightToLeft>
  );
};
