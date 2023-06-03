// import React from "react";
import PropTypes from "prop-types";
import { useQualities } from "../../../hooks/useQualities";

const Quality = ({ id }) => {
  console.log("qwerqewr", id);
  const { getQuality } = useQualities();
  const quality = getQuality(id);
  console.log("quality.jsx", quality);
  // return <span className={"badge m-1 bg-" + color}>{name}</span>;
  return "somet";
};
Quality.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Quality;
