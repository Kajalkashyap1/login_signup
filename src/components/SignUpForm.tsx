import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons
import toast from 'react-hot-toast'
interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const calculatePasswordStrength = (password: string): string => {
  if (!password) return "";
  if (password.length < 6) return "Weak";
  if (password.match(/[A-Z]/) && password.match(/[0-9]/)) return "Strong";
  return "Moderate";
};

const SignUpForm: React.FC = () => {
  const [passwordStrength, setPasswordStrength] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);

  const initialValues = { email: "", password: "", confirmPassword: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values: SignUpFormValues, { resetForm }: { resetForm: () => void }) => {
    toast.success("Sign Up Successful! ✅");
    
    // Reset the form after successful submission
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting, values, setFieldValue }) => (
        <Form aria-labelledby="signup-form">
          <h2 id="signup-form">Sign Up</h2>
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
                type={isPasswordVisible ? "text" : "password"} // Toggle between password and text
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const password = e.target.value;
                  setFieldValue("password", password); // Update Formik value
                  setPasswordStrength(calculatePasswordStrength(password));
                }}
                style={{ width: "100%", padding: "8px", fontSize: "16px" }}
              />
              <div
                style={{
                  position: "absolute",
                  right: "10px",
                  top:"10px",
                  cursor: "pointer",
                  fontSize: "1.5em", // Responsive size
                }}
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {values.password && <div>Password Strength: {passwordStrength}</div>}
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type={isConfirmPasswordVisible ? "text" : "password"} // Toggle between password and text
                style={{ width: "100%", padding: "8px", fontSize: "16px" }}
              />
              <div
                style={{
                  position: "absolute",
                  right: "10px",
                  top:"10px",
                  cursor: "pointer",
                  fontSize: "1.5em", // Responsive size
                }}
                onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
              >
                {isConfirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <ErrorMessage name="confirmPassword" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
