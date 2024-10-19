import Navbar from "../../components/Navbar";
import LoginForm from "../../components/Forms/LoginForm";
import AuthCard from "../../components/AuthCard";

const Login = () => {
  return (
    <>
      <Navbar />
      <AuthCard type="login">
        <LoginForm />
      </AuthCard>
    </>
  );
};

export default Login;
