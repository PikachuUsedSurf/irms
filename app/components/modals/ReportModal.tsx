"use client";
import useReportModal from '@/app/hooks/useReportModal'
import Modal from './Modal';

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
  
  return (
      <Modal
          isOpen={reportModal.isOpen}
          onClose={reportModal.onClose}
          onSubmit={reportModal.onClose}
          actionLabel="submit"
        title="Create Reports"/>
  )
}

export default ReportModal;