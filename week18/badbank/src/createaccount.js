import React from "react";

import { Formik, Form, Field } from "formik";

import * as Yup from "yup";

import { UserContext } from "./context";
import { Card } from "./context";

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const ctx = React.useContext(UserContext);

  const CreateAccountSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(8, "Too Short").required("Required"),
  });

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      className="mx-auto"
      header="Create Account"
      status={status}
      txtcolor="black"
      body={
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={CreateAccountSchema}
          onSubmit={(values) => {
            setName(values.name);
            setEmail(values.email);
            setPassword(values.password);
            setShow(true);
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form>
              Name
              <br />
              <Field
                className="form-control"
                name="name"
                placeholder="Enter name"
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <br />
              Email address
              <br />
              <Field
                className="form-control"
                name="email"
                placeholder="Enter email"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <br />
              Password
              <br />
              <Field
                className="form-control"
                name="password"
                placeholder="Enter password"
                type="password"
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
              <button type="submit" className="btn btn-outline-primary mr-1">
                Clear
              </button>
            </Form>
          )}
        </Formik>
      }
    />
  );
}

export { CreateAccount };
