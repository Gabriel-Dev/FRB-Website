import { Label } from "./styled";

// eslint-disable-next-line react/prop-types
export const Input = ({ type, name, label, placeholder, className }) => {
  return (
    <Label> <span>{label}</span>
      <input name={name} type={type} placeholder={placeholder} className={className} />
    </Label>
  )
}
