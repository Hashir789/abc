import "./Auth.css";
import * as Yup from "yup";
import { debounce } from "lodash";
import { useFormik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/Button/Button";
import { toast, Bounce } from "react-toastify";
import React, { FC, useState, useCallback, useRef } from "react";
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
  fullname: Yup.string().required("Fullname is required").min(3, "Must be at least 3 characters"),
  email: Yup.string().email("Invalid email format").required("Email is required")
});

const Auth: FC = () => {

  const [changeSection, setChangeSection] = useState(true);
  const [next, setNext] = useState(false);

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
    initialValues: { fullname: "", email: "" },
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

  const isToastActive = useRef(false);

  const showToast = () => {
    if (!isToastActive.current) {
      isToastActive.current = true;
      toast.error("Wrong username or password!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
        onClose: () => {
          isToastActive.current = false;
        }
      });
    }
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
                <Button onClick={showToast}>Login</Button>
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
        <div className="flip-container">
          <div className={`flip-content ${changeSection ? '': 'change-flip-section'}`}>
            <div className="flip-section">
              <h1 className="logo">Kitaab</h1>
              <form className="form" onSubmit={form2.handleSubmit}>
                <InputField
                  name="fullname"
                  title="Full Name"
                  placeholder="John Doe"
                  leftIcon="fa-user"
                  onChange={handleChangeWithDebounce(form2)}
                  value={form2.values.fullname}
                  error={form2.touched.fullname ? form2.errors.fullname : undefined}
                />
                <InputField
                  name="email"
                  title="Email"
                  placeholder="john.doe@example.com"
                  leftIcon="fa-envelope"
                  onChange={handleChangeWithDebounce(form2)}
                  value={form2.values.email}
                  error={form2.touched.email ? form2.errors.email : undefined}
                />
                <Button>
                  <div onMouseEnter={()=> setNext(true)} onMouseLeave={()=> setNext(false)} onClick={()=> setChangeSection(false)}>
                    Next
                    <i className={`fa-solid fa-angles-right fa-xs next ${next ? 'animate-next': ''}`}></i>
                  </div>
                </Button>
              </form>
              <Separator/>
              <p className="change-side">
                Already have an account ?
                <button className="link" data-flip-action>
                  Login
                </button>
              </p>
            </div>
            <div className="flip-section">
              <h1 className="logo" onClick={()=> setChangeSection(true)}>Kitaab</h1>
            </div>
          </div>
        </div>
      </FlipCardBackSide>
    </FlipCard>
  );
};

export default Auth;