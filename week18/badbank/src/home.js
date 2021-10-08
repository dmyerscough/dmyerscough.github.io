import { Card } from "./context";

function Home() {
  return (
    <Card
      className="mx-auto"
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the BadBank"
      body={
        <img src="bank.png" className="img-fluid" alt="Welcome to BadBank" />
      }
    />
  );
}

export { Home };
