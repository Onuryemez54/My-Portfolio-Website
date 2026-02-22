import { DownloadableCertification } from '@/types/expertiseTypes';

export const downloadableCertifications = Object.values(
  DownloadableCertification
) as DownloadableCertification[];

export const isDownloadableCertification = (value: string): value is DownloadableCertification => {
  return downloadableCertifications.includes(value as DownloadableCertification);
};
