/* eslint-disable react/prop-types */
export default function Button({
  type = "button",
  role = "button",
  onClick,
  label,
  style,
}) {
  return (
    <button
      type={type}
      role={role}
      onClick={onClick}
      className={`button ${style ? style : "button-light"}`}
    >
      {label}
    </button>
  );
}
