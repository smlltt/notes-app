import { TextareaHTMLAttributes } from "react";
import { FieldError, FieldValues, useFormContext } from "react-hook-form";

interface TextAreaProps {
  fieldName: string;
  placeholder: string;
  textAreaProps?: React.DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
  hideError?: boolean;
}

const TextArea = ({
  fieldName,
  placeholder,
  textAreaProps,
  hideError,
}: TextAreaProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();
  const errorMessage = (errors[fieldName] as FieldError)?.message;

  return (
    <div>
      <textarea
        className="input-primary"
        placeholder={placeholder}
        {...register(fieldName)}
        {...textAreaProps}
      />
      {errorMessage && !hideError && (
        <div className="text-sm text-red-500 mt-1">{errorMessage}</div>
      )}
    </div>
  );
};

export default TextArea;
