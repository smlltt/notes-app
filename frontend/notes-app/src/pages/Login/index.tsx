import Navbar from "../../components/Navbar";
import LoginForm from "../../components/Forms/LoginForm";
import AuthCard from "../../components/AuthCard";

const Login = () => {
  //TODO refactor using an outlet
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
