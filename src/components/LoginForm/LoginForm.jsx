import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";
import { useId } from "react";
import toast, { Toaster } from "react-hot-toast";

import css from "./LoginForm.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
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

export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log("login success");
        toast.success("You have successfully logged in!");
      })
      .catch(() => {
        console.log("login error");
        toast.error(
          "The entered data is incorrect or the user is unregistered!"
        );
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
              <span className={css.wSpan}>Welcome back!</span>
            </div>
            <div
              className={css.inputContainer}
              style={{ marginBottom: touched.email && errors.email && "12px" }}
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
              style={{
                marginBottom: touched.password && errors.password && "2px",
              }}
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
                  name="password"
                  placeholder="Password"
                  type="password"
                  {...getFieldProps("password")}
                />
                {touched.password && errors.password && (
                  <span className={css.error}>{errors.password}</span>
                )}
              </div>
            </div>
            <button className={css.btn} type="submit">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
