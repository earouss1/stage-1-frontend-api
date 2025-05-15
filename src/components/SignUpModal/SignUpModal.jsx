import React from "react";
import "./SignUpModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

function SignUpModal({
  isOpen,
  activeModal,
  onClose,
  handleSignUp,
  onSignInClick,
}) {
  const defaultValues = {
    email: "",
    password: "",
    username: "",
  };

  const { values, handleChange } = useForm(defaultValues);

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    handleLogin(values);
  };

  return (
    <ModalWithForm
      title="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSignInSubmit}
      activeModal={activeModal}
      handleSignUp={handleSignUp}
    >
      <label htmlFor="email" className="modal__label">
        Email{""}
        <input
          type="text"
          className="modal__input"
          id="_email"
          name="email"
          placeholder="Enter email"
          required
          onChange={handleChange}
          value={values.email || ""}
          autoComplete="on"
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{""}
        <input
          type="text"
          className="modal__input"
          id="_password"
          name="password"
          placeholder="Enter password"
          required
          onChange={handleChange}
          value={values.password || ""}
          autoComplete="on"
        />
      </label>
      <label htmlFor="username" className="modal__label">
        Username{""}
        <input
          type="text"
          className="modal__input"
          id="username"
          name="username"
          placeholder="Enter your username"
          required
          onChange={handleChange}
          value={values.username || ""}
          autoComplete="on"
        />
      </label>
      <div className="modal__buttons">
        <button className="modal__buttons-button-submit" type="submit">
          Sign up
        </button>
        <div className="modal__buttons-text-and-button">
          <p className="modal__buttons-text">or</p>
          <button
            className="modal__buttons-button"
            type="button"
            onClick={onSignInClick}
          >
            Sign in
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default SignUpModal;
