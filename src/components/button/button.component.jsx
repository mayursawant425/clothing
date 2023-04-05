import "./button.style.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted"
}

const Button = ({ children, buttonType, ...buttonProps }) => {
  return (
    <button
      className={`button-container ${buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ""}`}
      {...buttonProps}
    >{children}</button>
  );
}

export default Button;