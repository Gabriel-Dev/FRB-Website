import { Label } from "./styled";

// eslint-disable-next-line react/prop-types
export const Input = ({ type, name, label, placeholder, className, register}) => {
  return (
    <Label> <span>{label}</span>
      <input {...register} name={name} type={type} placeholder={placeholder} className={className} />
    </Label>
  )
}
