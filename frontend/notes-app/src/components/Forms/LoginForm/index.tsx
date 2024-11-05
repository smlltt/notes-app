import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Input";
import axiosInstance from "../../../utils/axios";
import { endpoints } from "../../../api";
import useAuthStore from "../../../zustand/auth";
import { AxiosError } from "axios";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Enter the password"),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const { setToken } = useAuthStore();
  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    try {
      const response = await axiosInstance.post(endpoints.login, data);
      if (response.data && response.data.accessToken) {
        setToken(response.data.accessToken);
        //the redirect is handled by the router
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error?.response?.data?.message;
        methods.setError(
          errorMessage.includes("email") ? "email" : "password",
          { type: "custom", message: errorMessage }
        );
      }
    }
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
