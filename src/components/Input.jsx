/* eslint-disable react/prop-types */
export default function Input({type, role, value, placeholder, onChange, checked, className}) {
  return (
    <input
    type={type}
    role={role}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    checked={checked}
    className={className}
  />
  )
}