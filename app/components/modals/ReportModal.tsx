"use client";
import useReportModal from '@/app/hooks/useReportModal'
import Modal from './Modal';
import { useMemo, useState } from 'react';
import Heading from '../Heading';
import { categories } from '../navbar/Categories';
import { TbReportAnalytics } from 'react-icons/tb';
import CategoryInput from '../Inputs/CategoryInput';
import { FieldValues, useForm } from 'react-hook-form';

enum STEPS {
  category = 0,
  location = 1,
  people = 2,
  file = 3,
  title = 4,
  body = 5,
  published = 6,
}

export const department = [
  {
    label: 'System Admin',
    icon: TbReportAnalytics,
  },
  {
    label: 'Finance Office',
    icon: TbReportAnalytics,
  },
  {
    label: 'ICT Office',
    icon: TbReportAnalytics,
  },
  {
    label: 'HR Office',
    icon: TbReportAnalytics,
  },
]

const ReportModal = () => {
  const reportModal = useReportModal();

  const [step, setStep] = useState(STEPS.category);

  const {
    register,
    handlesubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      location: null,
      people: 1,
      file: 1,
      title: null,
      body: '',
      published: ''
      
    }
  });

  const category = watch('category');

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    })
  }

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

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
      title="what category of report are you making?"
      subtitle='choose a category'
      />
      <div className='
      grid
      grid-cols-1
      md:grid-cols-2
      gap-3
      max-h-[50vh]
      overflow-y-auto
      '>
        {department.map((item) => (
          <div key={item.label} className='col-span-1'>
            <CategoryInput
              onClick={(category) => setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  )


  
  return (
      <Modal
        isOpen={reportModal.isOpen}
        onClose={reportModal.onClose}
        onSubmit={onNext}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.category ? undefined : onBack}
        body={bodyContent}
        title="Create Reports"
    />
  )
}

export default ReportModal;