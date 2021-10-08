import React from "react";
import * as Yup from "yup";

import { Field, Form, Formik } from "formik";
import { Card, UserContext } from "./context";

function Deposit() {
  const DepositSchema = Yup.object().shape({
    deposit: Yup.number().required("Required"),
  });

  const ctx = React.useContext(UserContext);

  const users = ctx.users.map((user) => {
    // return user;
    return (
      <option key={user} value={user}>
        {user}
      </option>
    );
  });

  console.log(users);

  return (
    <Card
      className="mx-auto"
      header="Deposit"
      txtcolor="black"
      body={
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
          }}
          validationSchema={DepositSchema}
          onSubmit={(values) => {
            // ctx.users.push({
            //   name: values.username,
            //   email: values.email,
            //   password: values.password,
            //   balance: 100,
            // });

            console.log("Saved");
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form>
              Account
              <br />
              <Field as="select" name="username" className="form-control">
                {users}
              </Field>
              {errors.username && touched.username ? (
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "x-small",
                  }}
                >
                  {errors.username}
                </div>
              ) : null}
              <br />
              Amount
              <br />
              <Field
                className="form-control"
                name="amount"
                placeholder="Deposit Amount"
                type="number"
                autoComplete="new-password"
              />
              {errors.password && touched.password ? (
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "x-small",
                  }}
                >
                  {errors.password}
                </div>
              ) : null}
              <br />
              <button
                type="submit"
                className="btn btn-outline-primary mr-1 w-100"
                disabled={!(isValid && dirty)}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      }
    />
  );
}

export { Deposit };
