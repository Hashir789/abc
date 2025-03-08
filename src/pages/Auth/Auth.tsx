import "./Auth.css";
import * as Yup from "yup";
import { debounce } from "lodash";
import { useFormik } from "formik";
import Button from "../../components/Button/Button";
import React, { FC, useEffect, useCallback } from "react";
import InputField from "../../components/Input/InputField/InputField";
import { FlipCard, FlipCardBackSide, FlipCardFrontSide } from "../../components/FlipCard/FlipCard";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Must be 8+ characters")
    .matches(/[A-Z]/, "Include an uppercase letter")
    .matches(/[a-z]/, "Include a lowercase letter")
    .matches(/[0-9]/, "Include a number")
    .matches(/[^A-Za-z0-9]/, "Include a special character")
    .required("Password is required"),
});

const Auth: FC = () => {
  useEffect(() => {
    document.getElementsByClassName("display-window")[0].scrollTop = 150;
  }, []);

  const form1 = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  const debouncedValidate = useCallback(
    debounce((field: keyof typeof form1.values) => {
      form1.validateField(field);
    }, 500),
    []
  );

  const handleChangeWithDebounce = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name as keyof typeof form1.values;

    form1.setTouched({ ...form1.touched, [fieldName]: true });

    form1.handleChange(e);
    debouncedValidate(fieldName);
  };

  return (
    <FlipCard width="90vw" maxWidth="350px">
      <FlipCardFrontSide>
        <h1 className="logo">Kitaab</h1>
        <form className="form">
          <InputField
            name="email"
            title="Email"
            placeholder="john.doe@example.com"
            leftIcon="fa-envelope"
            onChange={handleChangeWithDebounce}
            value={form1.values.email}
            error={form1.touched.email ? form1.errors.email : undefined}
          />
          <InputField
            name="password"
            title="Password"
            isPassword
            onChange={handleChangeWithDebounce}
            value={form1.values.password}
            error={form1.touched.password ? form1.errors.password : undefined}
          />
          <Button>Login</Button>
        </form>
        <hr />
        <p className="change-side">
          Don't have an account?
          <button className="link" data-flip-action>
            &nbsp;Signup
          </button>
        </p>
      </FlipCardFrontSide>
      <FlipCardBackSide>
        <h1 className="logo">Kitaab</h1>
        <form className="form">
          <div className="display-window">
            <InputField title="Username" placeholder="John Doe" leftIcon="fa-user" isScrollbar />
            <InputField title="Email" placeholder="john.doe@example.com" leftIcon="fa-envelope" isScrollbar />
            <InputField title="Password" isPassword isScrollbar />
            <InputField title="Confirm Password" isPassword isScrollbar />
          </div>
          <Button>Signup</Button>
        </form>
        <hr />
        <p className="change-side">
          Already have an account?
          <button className="link" data-flip-action>
            &nbsp;Login
          </button>
        </p>
      </FlipCardBackSide>
    </FlipCard>
  );
};

export default Auth;