import Navbar from "../../components/Navbar";
import AuthCard from "../../components/AuthCard";
import SignUpForm from "../../components/Forms/SignUpForm";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <AuthCard type="signUp">
        <SignUpForm />
      </AuthCard>
    </>
  );
};

export default SignUp;
