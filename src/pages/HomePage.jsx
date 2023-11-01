import { useState } from "react";

import Button from "react-bootstrap/Button";

import TransactionTable from "../components/Home/TransactionTable";
import TransactionModal from "../components/Home/TransactionModal";

const Home = () => {
  const [userAction, setUserAction] = useState("");

  const handleUserAction = (action) => {
    setUserAction(action);
  };

  const handleModalClose = () => {
    setUserAction("");
  };

  return (
    <>
      <div className="d-flex my-4 justify-content-between">
        <h4>Transaction History</h4>
        <div className="d-flex justify-content-between">
          <Button
            variant="primary"
            className="me-4"
            onClick={() => handleUserAction("deposit")}
          >
            Deposit
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleUserAction("withdraw")}
          >
            Withdraw
          </Button>
        </div>
      </div>
      <TransactionTable />
      <TransactionModal
        transactionType={userAction}
        show={userAction === "deposit" || userAction === "withdraw"}
        handleClose={handleModalClose}
      />
    </>
  );
};

export default Home;
