import React, { useState } from "react";
import * as Yup from "yup";

import { Field, Form, Formik } from "formik";
import { Card, UserContext } from "./context";

function Deposit() {
  // Change balance to trigger a page re-render
  const [_, setBalanceUpdate] = useState(null);

  const DepositSchema = Yup.object().shape({
    depositAmount: Yup.number().min(1).required("Required"),
  });

  const ctx = React.useContext(UserContext);

  const users = ctx.users.map((user, idx) => {
    return (
      <option key={idx} value={idx}>
        {user.name}
      </option>
    );
  });

  return (
    <Card
      className="mx-auto"
      header="Deposit"
      txtcolor="black"
      body={
        <Formik
          initialValues={{
            userPosition: "",
            depositAmount: 0,
          }}
          validationSchema={DepositSchema}
          onSubmit={(values) => {
            ctx.users[values.userPosition].balance += values.depositAmount;
            setBalanceUpdate(ctx.users[values.userPosition].balance);
          }}
          validateOnChange={(values) =>
            setBalanceUpdate(ctx.users[values.userPosition].balance)
          }
        >
          {({ errors, touched, isValid, dirty, values }) => (
            <Form>
              Account Balance:{" "}
              {values.userPosition === ""
                ? "$0"
                : "$" + ctx.users[values.userPosition].balance}
              <br />
              <Field as="select" name="userPosition" className="form-control">
                <option key="selectUser" value="" disabled>
                  Select User
                </option>
                {users}
              </Field>
              {errors.userPosition && touched.userPosition ? (
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "x-small",
                  }}
                >
                  {errors.userPosition}
                </div>
              ) : null}
              <br />
              Amount
              <br />
              <Field
                className="form-control"
                name="depositAmount"
                placeholder="Deposit Amount"
                type="number"
                default="0"
                min="0"
              />
              {errors.depositAmount && touched.depositAmount ? (
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "x-small",
                  }}
                >
                  {errors.depositAmount}
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
