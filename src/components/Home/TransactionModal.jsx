import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import TextInput from "../TextInput";
import { deposit, withdraw } from "../../slices";

const TransactionModal = ({ transactionType, show, handleClose }) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({});

  const handleOnChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleOnSave = () => {
    if (transactionType === "deposit") {
      dispatch(deposit({ ...formValues, tid: nanoid(), type: "credit" }));
    } else if (transactionType === "withdraw") {
      dispatch(withdraw({ ...formValues, tid: nanoid(), type: "debit" }));
    } else {
      return false;
    }
    setFormValues({});
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-capitalize">{transactionType}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <TextInput
            label="Amount"
            type="number"
            name="amount"
            placeholder="Amount in dollar"
            value={formValues.amount || ""}
            onChange={handleOnChange}
          />
          <TextInput
            label="Remarks"
            name="remarks"
            placeholder="Remarks"
            value={formValues.remarks || ""}
            onChange={handleOnChange}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          type="button"
          variant="primary"
          className="text-capitalize"
          onClick={handleOnSave}
        >
          {transactionType}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

TransactionModal.propTypes = {
  transactionType: PropTypes.string,
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default TransactionModal;
