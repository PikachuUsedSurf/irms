"use client";
import useReportModal from '@/app/hooks/useReportModal'
import Modal from './Modal';
import { useMemo, useState } from 'react';

enum STEPS {
  category = 0,
  location = 1,
  people = 2,
  file = 3,
  title = 4,
  body = 5,
  published = 6,
}

const ReportModal = () => {
  const reportModal = useReportModal();

  const [step, setStep] = useState(STEPS.category);

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.published) {
      return 'create';
    }
    return 'next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.category) {
      return undefined;
    }

    return 'Back';
  }, [step]);
  
  return (
      <Modal
      isOpen={reportModal.isOpen}
      onClose={reportModal.onClose}
      onSubmit={reportModal.onClose}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.category ? undefined : onBack}
      title="Create Reports"/>
  )
}

export default ReportModal;