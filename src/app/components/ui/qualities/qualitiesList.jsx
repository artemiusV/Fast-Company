import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQualities } from "../../../hooks/useQualities";
// import { useQualities } from "../../../hooks/useQualities";

const QualitiesList = ({ qualities }) => {
  console.log("11111111", qualities);
  const { isLoading } = useQualities();
  if (isLoading) return "Loading...";
  return (
    <>
      {qualities.map((qual) => (
        <Quality key={qual} id={qual} />
      ))}
    </>
  );
};

QualitiesList.propTypes = {
  qualities: PropTypes.array,
};

export default QualitiesList;
