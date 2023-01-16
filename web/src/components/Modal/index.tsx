import ReactModal from 'react-modal';

type ModalProps = {
  onRequestClose: () => void;
  contentLabel?: string;
  children: React.ReactNode;
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    padding: '0',
    border: 'none',
  },
  overlay: {
    zIndex: 9999,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(1px)',
  },
};

ReactModal.setAppElement('#root');

export function Modal({ onRequestClose, contentLabel, children }: ModalProps) {
  return (
    <ReactModal
      style={customStyles}
      isOpen
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
    >
      {children}
    </ReactModal>
  );
}
