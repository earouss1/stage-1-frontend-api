import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SuccessfulSignUpModal.css";

function SuccessfulSignUpModal({ isOpen, onClose, handleSignIn }) {
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={() => {
        handleSignIn();
      }}
    >
      <button
        onClick={handleSignIn}
        className="modal__buttons-submit modal__button-successful"
      >
        Sign in
      </button>
    </ModalWithForm>
  );
}

export default SuccessfulSignUpModal;
