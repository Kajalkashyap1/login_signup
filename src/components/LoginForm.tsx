import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons
import "./LoginForm.css";
import toast from 'react-hot-toast'
interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginForm: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false); // State for password visibility

  const initialValues: LoginFormValues = { email: "", password: "", rememberMe: false };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values: LoginFormValues, { resetForm }: { resetForm: () => void }) => {
    if (values.rememberMe) {
      localStorage.setItem("rememberedEmail", values.email);
    }
    toast.success("Login Succesfull ! ✅")
    setTimeout(() => {
      toast.success("Email saved in Local Storage 🤖")
    }, 1500);
    resetForm(); // Reset the form fields after successful submission
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form aria-labelledby="login-form">
          <h2 id="login-form">Login</h2>
          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email"  style={{ width: "95%", padding: "8px", fontSize: "16px" }}/>
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
              <Field
                id="password"
                name="password"
                type={isPasswordVisible ? "text" : "password"} // Toggle between text and password
                style={{ width: "100%", padding: "8px", fontSize: "16px" }}
              />
              <div
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  fontSize: "1.5em", // Responsive size
                }}
                onClick={() => setIsPasswordVisible(!isPasswordVisible)} // Toggle visibility
              >
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label>
              <Field type="checkbox" name="rememberMe" />
              Remember Me
            </label>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
