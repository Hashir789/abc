import React, { useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { debounce } from "lodash";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const App = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  // Debounced validation function
  const debouncedValidate = useCallback(
    debounce(() => {
      formik.validateForm().then((errors) => {
        if (Object.keys(errors).length > 0) {
          console.log("Validation Errors:", errors);
        }
      });
    }, 3000),
    [formik.validateForm]
  );

  const handleChangeWithDebounce = (e) => {
    formik.handleChange(e);
    debouncedValidate();
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleChangeWithDebounce}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;