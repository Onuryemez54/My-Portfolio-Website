import { ErrorKey } from './i18n/keys';

export type ActionResultType = { ok: true } | { ok: false; error: ErrorKey };
