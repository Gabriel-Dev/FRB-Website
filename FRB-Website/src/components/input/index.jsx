import { Label } from "./styled";

export const Input = ({ type, name, label, placeholder, className }) => {
  return (
    <Label> <span>{label}</span>
      <input name={name} type={type} placeholder={placeholder} className={className} />
    </Label>
  )
}
