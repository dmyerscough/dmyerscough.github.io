import React from "react";

import { Card, UserContext } from "./context";

function AllData() {
  const ctx = React.useContext(UserContext);

  return ctx.users.map((user) => {
    return (
      <Card
        key={user.name}
        className="mx-auto"
        header={user.name}
        txtcolor="black"
        text={"Email: " + user.email}
        body={"Balance: $" + user.balance}
      />
    );
  });
}

export { AllData };
