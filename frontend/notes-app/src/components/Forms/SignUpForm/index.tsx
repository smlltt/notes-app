import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Input";

const SignUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const SignUpForm = () => {
  const methods = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => {
    console.log("signup data", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        <Input fieldName="name" placeholder="Name" />
        <Input fieldName="email" placeholder="Email" />
        <Input
          fieldName="password"
          placeholder="Password"
          inputProps={{ type: "password" }}
        />
        <button type="submit" className="btn-primary">
          Sign Up
        </button>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
