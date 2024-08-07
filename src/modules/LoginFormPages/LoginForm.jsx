import image1 from "../../images/desk-with-objects.jpg";
const LoginForm = () => {
  return (
    <div
      className="flex w-screen h-screen bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image1})`,
      }}
    ></div>
  );
};

export default LoginForm;
