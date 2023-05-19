"use client";
import useReportModal from '@/app/hooks/useReportModal'
import Modal from './Modal';

const ReportModal = () => {

    const reportModal = useReportModal();
  return (
      <Modal
          isOpen={reportModal.isOpen}
          onClose={reportModal.onClose}
          onSubmit={reportModal.onClose}
          actionLabel="submit"
        title="Reports"/>
  )
}

export default ReportModal;