import "./Auth.css";
import * as Yup from "yup";
import { debounce } from "lodash";
import { useFormik } from "formik";
import Button from "../../components/Button/Button";
import React, { FC, useState, useEffect, useCallback } from "react";
import InputField from "../../components/Input/InputField/InputField";
import { FlipCard, FlipCardBackSide, FlipCardFrontSide } from "../../components/FlipCard/FlipCard";
import Separator from "../../components/Separator/Separator";

const validationSchema1 = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Must be 8+ characters")
    .matches(/[a-z]/, "Include a lowercase letter")
    .matches(/[A-Z]/, "Include an uppercase letter")
    .matches(/[0-9]/, "Include a number")
    .matches(/[^A-Za-z0-9]/, "Include a special character")
});

const validationSchema2 = Yup.object({
  username: Yup.string().required("Username is required").min(3, "Must be at least 3 characters"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Must be 8+ characters")
    .matches(/[A-Z]/, "Include an uppercase letter")
    .matches(/[a-z]/, "Include a lowercase letter")
    .matches(/[0-9]/, "Include a number")
    .matches(/[^A-Za-z0-9]/, "Include a special character"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const Auth: FC = () => {

  const [changeSection, setChangeSection] = useState(true);

  useEffect(() => {
    document.getElementsByClassName("display-window")[0].scrollTop = 200;
  }, []);

  const form1 = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema1,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log("Login Submitted", values);
    },
  });

  const form2 = useFormik({
    initialValues: { username: "", email: "", password: "", confirmPassword: "" },
    validationSchema: validationSchema2,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log("Signup Submitted", values);
    },
  });

  const debouncedValidate = useCallback(
    debounce((form: any, field: string) => {
      form.validateField(field);
    }, 500),
    []
  );

  const handleChangeWithDebounce = (form: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    form.setTouched({ ...form.touched, [fieldName]: true });
    form.handleChange(e);
    debouncedValidate(form, fieldName);
  };

  return (
    <FlipCard width="90vw" maxWidth="350px">
      <FlipCardFrontSide>
        <div className="flip-container">
          <div className={`flip-content ${changeSection ? '': 'change-flip-section'}`}>
            <div className="flip-section">
              <h1 className="logo">Kitaab</h1>
              <form className="form" onSubmit={form1.handleSubmit}>
                <InputField
                  name="email"
                  title="Email"
                  displayHidden
                  placeholder="john.doe@example.com"
                  leftIcon="fa-envelope"
                  onChange={handleChangeWithDebounce(form1)}
                  value={form1.values.email}
                  error={form1.touched.email ? form1.errors.email : undefined}
                />
                <InputField
                  name="password"
                  title="Password"
                  isPassword
                  displayNone
                  onChange={handleChangeWithDebounce(form1)}
                  value={form1.values.password}
                  error={form1.touched.password ? form1.errors.password : undefined}
                />
                <button className="forgot-password" onClick={()=> setChangeSection(false)}>Forgot Password ?</button>
                <Button>Login</Button>
              </form>
              <Separator />
              <p className="change-side">
                Don't have an account?
                <button className="link" data-flip-action>
                  Signup
                </button>
              </p>
            </div>
            <div className="flip-section">
              <h1 className="logo" onClick={()=> setChangeSection(true)}>Kitaab</h1>
            </div>
          </div>
        </div>
      </FlipCardFrontSide>

      <FlipCardBackSide>
        <h1 className="logo">Kitaab</h1>
        <form className="form" onSubmit={form2.handleSubmit}>
          <div className="display-window">
            <InputField
              name="username"
              title="Username"
              placeholder="John Doe"
              leftIcon="fa-user"
              isScrollbar
              onChange={handleChangeWithDebounce(form2)}
              value={form2.values.username}
              error={form2.touched.username ? form2.errors.username : undefined}
            />
            <InputField
              name="email"
              title="Email"
              placeholder="john.doe@example.com"
              leftIcon="fa-envelope"
              isScrollbar
              onChange={handleChangeWithDebounce(form2)}
              value={form2.values.email}
              error={form2.touched.email ? form2.errors.email : undefined}
            />
            <InputField
              name="password"
              title="Password"
              isPassword
              isScrollbar
              onChange={handleChangeWithDebounce(form2)}
              value={form2.values.password}
              error={form2.touched.password ? form2.errors.password : undefined}
            />
            <InputField
              name="confirmPassword"
              title="Confirm Password"
              isPassword
              isScrollbar
              onChange={handleChangeWithDebounce(form2)}
              value={form2.values.confirmPassword}
              error={form2.touched.confirmPassword ? form2.errors.confirmPassword : undefined}
            />
          </div>
          <Button>Signup</Button>
        </form>
        <Separator/>
        <p className="change-side">
          Already have an account ?
          <button className="link" data-flip-action>
            Login
          </button>
        </p>
      </FlipCardBackSide>
    </FlipCard>
  );
};

export default Auth;