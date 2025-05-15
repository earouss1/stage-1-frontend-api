import React from "react";
import "./SignInModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

function SignInModal({
  isOpen,
  activeModal,
  onClose,
  handleSignIn,
  onSignUpClick,
  onSignInClick,
}) {
  const defaultValues = {
    email: "",
    password: "",
  };

  const { values, setValues, handleChange } = useForm(defaultValues);

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    handleSignIn(values);
  };

  return (
    <ModalWithForm
      title="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSignInSubmit}
      activeModal={activeModal}
      handleSignIn={handleSignIn}
      onSignInClick={onSignInClick}
      name={"sign-in"}
    >
      <label htmlFor="email" className="modal__label">
        Email{""}
        <input
          type="text"
          className="modal__input"
          id="email"
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
          id="password"
          name="password"
          placeholder="Enter password"
          required
          onChange={handleChange}
          value={values.password || ""}
          autoComplete="on"
        />
      </label>
      <div className="modal__buttons">
        <button className="modal__bottons-button-submit" type="submit">
          Sign in
        </button>
        <div className="modal__buttons-text-and-button">
          <p className="modal__buttons-text">or</p>
          <button
            className="modal__buttons-button"
            type="button"
            onClick={onSignUpClick}
          >
            Sign up
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default SignInModal;
