import style from "./Button.module.scss";

export const Button = ({ action, color, size, title, children, custom, disabled }) => {
  return (
    <button
      className={`${style.buttonStyling} ${style[size]} ${style[color]} ${style[custom]} ${
        disabled ? style.disabled : ""
      }`}
      onClick={!disabled ? action : undefined}
      disabled={disabled}
    >
      {title}
      {children}
    </button>
  );
};
