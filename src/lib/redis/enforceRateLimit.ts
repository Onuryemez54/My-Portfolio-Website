import { rateLimit } from './rateLimit';
import { getClientIp } from './getClientIp';
import { ErrorKey } from '@/types/i18n/keys';
import { ActionResultType } from '@/types/actionResultType';
import crypto from 'crypto';

type RateLimitParams = {
  action: 'portfolio-feedback';
  email: string;
};

export const enforceRateLimit = async ({
  action,
  email,
}: RateLimitParams): Promise<ActionResultType> => {
  const ip = await getClientIp();

  const emailHash = crypto.createHash('sha256').update(email.toLowerCase()).digest('hex');

  const ipKey = `portfolio:ratelimit:ip:${action}:${ip}`;

  const emailKey = `portfolio:ratelimit:email:${action}:${emailHash}`;

  const [ipAllowed, emailAllowed] = await Promise.all([rateLimit(ipKey), rateLimit(emailKey)]);

  if (!ipAllowed || !emailAllowed) {
    return { ok: false, error: ErrorKey.TOO_MANY_REQUESTS };
  }

  return { ok: true };
};
