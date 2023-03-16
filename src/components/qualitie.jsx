import React from "react";
import PropTypes from "prop-types";

/* eslint-disable indent */

const Qualitie = (props) => {
  const user = props.temp;

  return (
    <>
      {user.qualities.map((item) => (
        <span className={"badge m-1 bg-" + item.color} key={item._id}>
          {item.name}
        </span>
      ))}
    </>
  );
};

Qualitie.propTypes = {
  temp: PropTypes.string.isRequired,
};

export default Qualitie;
