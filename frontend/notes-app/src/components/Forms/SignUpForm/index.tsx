import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Input";
import axiosInstance from "../../../utils/axios";
import { endpoints } from "../../../api";
import useAuthStore from "../../../zustand/auth";
import { AxiosError } from "axios";

const SignUpSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const SignUpForm = () => {
  const { setToken } = useAuthStore();

  const methods = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    try {
      const response = await axiosInstance.post(endpoints.createAccount, data);
      console.log({ response });
      if (response.data && response.data.accessToken) {
        setToken(response.data.accessToken);
        // The redirect is handled by the router
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error?.response?.data?.message;
        let field: "email" | "password" | "fullName" | undefined;

        switch (true) {
          case errorMessage.includes("email"):
            field = "email";
            break;
          case errorMessage.includes("password"):
            field = "password";
            break;
          case errorMessage.includes("fullName"):
            field = "fullName";
            break;
          default:
            field = undefined;
        }

        if (field) {
          methods.setError(field, { type: "custom", message: errorMessage });
        }
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        <Input fieldName="fullName" placeholder="Full Name" />
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
