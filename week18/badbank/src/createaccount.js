import React from "react";

import { Formik, Form, Field } from "formik";

import * as Yup from "yup";

import { UserContext } from "./context";
import { Card } from "./context";

function CreateAccount() {
  const [show, setShow] = React.useState(true);

  const ctx = React.useContext(UserContext);

  const CreateAccountSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(8, "Too Short").required("Required"),
  });

  return (
    <Card
      className="mx-auto"
      header="Create Account"
      txtcolor="black"
      body={
        show ? (
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
            }}
            validationSchema={CreateAccountSchema}
            onSubmit={(values, { resetForm }) => {
              setShow(false);

              ctx.users.push({
                name: values.username,
                email: values.email,
                password: values.password,
                balance: 100,
              });

              resetForm();
              console.log("Saved");
            }}
          >
            {({ errors, touched, isValid, dirty }) => (
              <Form>
                Name
                <br />
                <Field
                  className="form-control"
                  name="username"
                  placeholder="Enter name"
                  autoComplete="new-username"
                />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <br />
                Email address
                <br />
                <Field
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  autoComplete="new-username"
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <br />
                Password
                <br />
                <Field
                  className="form-control"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  autoComplete="new-password"
                />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <br />
                <button
                  type="submit"
                  className="btn btn-outline-primary mr-1"
                  disabled={!(isValid && dirty)}
                >
                  Create Account
                </button>
                <button type="reset" className="btn btn-outline-primary mr-1">
                  Clear
                </button>
              </Form>
            )}
          </Formik>
        ) : (
          <>
            <h5>Success</h5>
            <button
              type="submit"
              className="btn btn-outline-primary mr-1"
              onClick={() => {
                setShow(true);
              }}
            >
              Add another account
            </button>
          </>
        )
      }
    />
  );
}

export { CreateAccount };
