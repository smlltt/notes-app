import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Input";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Enter the password"),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    console.log("login data", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        <Input fieldName="email" placeholder="Email" />
        <Input
          fieldName="password"
          placeholder="Password"
          inputProps={{ type: "password" }}
        />
        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
