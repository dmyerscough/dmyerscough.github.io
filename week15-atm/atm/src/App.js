
import React, {useEffect} from "react";

const ATMDeposit = ({ onChange, isDeposit, atmMode, validTransaction }) => {
  const choice = ['Deposit', 'Cash Back'];
  console.log(`ATM isDeposit: ${isDeposit}`);

  let insufficientFunds = "";

  if (!validTransaction) {
      insufficientFunds = (
          <div className="alert alert-danger">
              <strong>Insufficient Funds.</strong> There is not enough funds within your account.
          </div>
      )
  }

  if (!choice.includes(atmMode)) {
    return (
        <>
        </>
    )
  }
  return (
      <>
        <h3>{choice[Number(!isDeposit)]}</h3>
          <div className="form-floating mb-3">
              <input type="number" className="form-control rounded-4" id="floatingInput" onChange={onChange} min="0"></input>
          </div>
          <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit" disabled={!validTransaction}>Submit</button>
          {insufficientFunds}
      </>
  );
};

const Account = () => {
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState("");
  const [validTransaction, setValidTransaction] = React.useState(false);

  let status = `Account Balance $${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);

  const handleChange = (event) => {
    console.log(`handleChange ${event.target.value}`);
    setDeposit(Number(event.target.value));

    if(atmMode === "Cash Back" && (totalState - Number(event.target.value)) < 0) {
      setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
  };
  const handleSubmit = (event) => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;

    if (newTotal >= 0) {
        setTotalState(newTotal);
    } else {
        setValidTransaction(false);
    }
    event.preventDefault();
  };

  const handleModeSelect = (event) => {
    setAtmMode(event.target.value);

    if(event.target.value === "Deposit") {
      setIsDeposit(true);
      setValidTransaction(true);
    } else if (event.target.value === "Cash Back") {
      setIsDeposit(false);
    }
  }

  useEffect( () => {
      if (totalState > 0) {
          setValidTransaction(true);
      } else {
          setValidTransaction(false);
      }
  }, [totalState]);

  return (
      <div className="modal modal-signin d-block bg-secondary py-5" tabIndex="-1" role="dialog" id="modalSignin">
          <div className="modal-dialog">
              <div className="modal-content rounded-5 shadow">
                  <div className="modal-header pb-4 border-bottom-0">
                      <h2 className="fw-bold mb-0">ATM</h2>
                  </div>
                  <div className="modal-body pt-0">
                      <h3 id="total">{status}</h3>
                      <form onSubmit={handleSubmit}>
                          <select className="custom-select" onChange={(e) => handleModeSelect(e)} name="mode" id="modeselect">
                              <option id="no-selection" value=""></option>
                              <option id="deposit-selection" value="Deposit">Deposit</option>
                              <option id="cashback-selection" value="Cash Back">Cash Back</option>
                          </select>
                          <ATMDeposit onChange={handleChange} isDeposit={isDeposit} atmMode={atmMode} validTransaction={validTransaction}></ATMDeposit>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Account;