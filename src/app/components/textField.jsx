import React from "react";
import PropTypes from "prop-types";

const TextField = ({ lable, type, name, value, onChange, error }) => {
  const getInputClasses = () => {
    return "form-control " + (error ? "is-invalid" : "");
  };
  return (
    <div className="mb-4">
      <lable htmlFor={name}>{lable}</lable>
      <input
        type={type}
        id={name}
        value={value}
        name={name}
        onChange={onChange}
        className={getInputClasses()}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
};

TextField.propTypes = {
  lable: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default TextField;
