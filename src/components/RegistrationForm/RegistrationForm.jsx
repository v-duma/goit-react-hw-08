import { useDispatch } from "react-redux";
import { registration } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";
import { useId } from "react";
import toast, { Toaster } from "react-hot-toast";

import css from "./RegistrationForm.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Enter 1 to 20 characters")
    .max(20, "Enter 3 to 20 characters")
    .required("Field can't be empty! Please enter your name."),
  email: Yup.string()
    .email("Invalid email format")
    .min(3, "Enter 3 to 50 characters")
    .max(50, "Enter 3 to 50 characters")
    .required("Field can't be empty! Please enter your email."),
  password: Yup.string()
    .min(3, "Enter 3 to 25 characters")
    .max(25, "Enter 3 to 25 characters")
    .required("Field can't be empty! Please enter your password."),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(registration(values))
      .unwrap()
      .then(() => {
        console.log("registration and login success");
        toast.success("You have successfully registered and logged in!");
      })
      .catch(() => {
        console.log("registration and login error");
        toast.error("Ooops! Something is wrong...");
      });
    actions.resetForm();
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ getFieldProps, errors, touched }) => (
          <Form className={css.form}>
            <div className={css.wContainer}>
              <span className={css.wSpan}>Welcome!</span>
            </div>
            <div
              className={css.inputContainer}
              style={{ marginBottom: touched.name && errors.name && "14px" }}
            >
              <Field
                className={`${css.input} ${
                  touched.name && errors.name
                    ? css.errorInput
                    : touched.name && !errors.name
                    ? css.successInput
                    : ""
                }`}
                id={nameFieldId}
                placeholder="Name"
                name="name"
                {...getFieldProps("name")}
              />
              {touched.name && errors.name && (
                <span className={css.error}>{errors.name}</span>
              )}
            </div>
            <div
              className={css.inputContainer}
              style={{ marginBottom: touched.email && errors.email && "14px" }}
            >
              <Field
                className={`${css.input} ${
                  touched.email && errors.email
                    ? css.errorInput
                    : touched.email && !errors.email
                    ? css.successInput
                    : ""
                }`}
                id={emailFieldId}
                placeholder="Email"
                name="email"
                {...getFieldProps("email")}
              />
              {touched.email && errors.email && (
                <span className={css.error}>{errors.email}</span>
              )}
            </div>
            <div
              className={css.inputContainer}
              style={{ marginBottom: touched.email && errors.email && "2px" }}
            >
              <div className={css.passwordContainer}>
                <Field
                  className={`${css.input} ${
                    touched.password && errors.password
                      ? css.errorInput
                      : touched.password && !errors.password
                      ? css.successInput
                      : ""
                  }`}
                  id={passwordFieldId}
                  placeholder="Password"
                  name="password"
                  type="password"
                  {...getFieldProps("password")}
                />
                {touched.password && errors.password && (
                  <span className={css.error}>{errors.password}</span>
                )}
              </div>
            </div>
            <button className={css.btn} type="submit">
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
