import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";

const TextInput = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  error,
  onChange,
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        className={error ? "is-invalid" : ""}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
