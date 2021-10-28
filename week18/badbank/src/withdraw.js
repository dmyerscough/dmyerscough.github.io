import React, { useState } from "react";
import { Field, Form, Formik } from "formik";

import { Card, UserContext } from "./context";

function validateFunds(withdrawAmount, balance) {
  let error;

  if (balance - withdrawAmount < 0) {
    error = "Insufficient Funds";
  }
  return error;
}

function Withdraw() {
  // Change balance to trigger a page re-render
  const [currentBalance, setCurrentBalance] = useState(null);

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
      header="Withdraw"
      txtcolor="black"
      body={
        <Formik
          initialValues={{
            userPosition: 0,
            withdrawAmount: 0,
          }}
          onSubmit={(values) => {
            ctx.users[values.userPosition].balance -= values.withdrawAmount;
            setCurrentBalance(ctx.users[values.userPosition].balance);
          }}
          validateOnChange={(values) => {
            setCurrentBalance(ctx.users[values.userPosition].balance);
          }}
        >
          {({ errors, touched, isValid, dirty, values }) => (
            <Form>
              Account Balance:{" "}
              {values.userPosition === ""
                ? "$" + {currentBalance}
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
                name="withdrawAmount"
                type="number"
                default="0"
                min="0"
                validate={() =>
                  validateFunds(
                    values.withdrawAmount,
                    ctx.users[values.userPosition].balance
                  )
                }
              />
              {errors.withdrawAmount && touched.withdrawAmount ? (
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "x-small",
                  }}
                >
                  {errors.withdrawAmount}
                </div>
              ) : null}
              <br />
              <button
                type="submit"
                className="btn btn-outline-primary mb-1 w-100"
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

export { Withdraw };
