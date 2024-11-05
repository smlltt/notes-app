import { InputHTMLAttributes } from "react";
import { FieldError, FieldValues, useFormContext } from "react-hook-form";

interface InputProps {
  fieldName: string;
  placeholder: string;
  inputProps?: React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  hideError?: boolean;
  backendError?: string;
}

const Input = ({
  fieldName,
  placeholder,
  inputProps,
  hideError,
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();
  const errorMessage = (errors[fieldName] as FieldError)?.message;

  return (
    <div>
      <input
        className="input-primary"
        placeholder={placeholder}
        {...register(fieldName)}
        {...inputProps}
      />
      {errorMessage && !hideError && (
        <div className="text-sm text-red-500 mt-1">{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
