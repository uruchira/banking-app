import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import { toast } from "react-toastify";

import TextInput from "../TextInput";
import { deposit, withdraw } from "../../slices";

const TransactionModal = ({ transactionType, show, handleClose }) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleOnChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    if (e.target.value) {
      setErrorMessage(e.target.name, true);
    } else {
      setErrorMessage(e.target.name, false);
    }
  };

  const checkForRequired = (field) => {
    if (formValues[field]) {
      return true;
    }
    return false;
  };

  const setErrorMessage = (name, value) => {
    if (value) {
      setFormErrors((prevErrors) => {
        return { ...prevErrors, [name]: "" };
      });
    } else {
      setFormErrors((prevErrors) => {
        return { ...prevErrors, [name]: `${name} is required` };
      });
    }
  };

  const handleOnSave = () => {
    const noAmount = checkForRequired("amount");
    const noRemarks = checkForRequired("remarks");

    if (noAmount && noRemarks) {
      if (transactionType === "deposit") {
        dispatch(deposit({ ...formValues, tid: nanoid(), type: "credit" }));
        toast.success("Credited to your account successfully");
      } else if (transactionType === "withdraw") {
        dispatch(withdraw({ ...formValues, tid: nanoid(), type: "debit" }));
        toast.success("Debited from your account successfully");
      } else {
        return false;
      }
      setFormValues({});
      handleClose();
    } else {
      setErrorMessage("amount", noAmount);
      setErrorMessage("remarks", noRemarks);
    }
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
            error={formErrors.amount || ""}
            onChange={handleOnChange}
          />
          <TextInput
            label="Remarks"
            name="remarks"
            placeholder="Remarks"
            value={formValues.remarks || ""}
            error={formErrors.remarks || ""}
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
