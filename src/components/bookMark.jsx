import React from "react";
import PropTypes from "prop-types";

const BookMark = (props) => {
  const changeBookmark = props.changeBookmark;
  const user = props.user;

  return (
    <button
      onClick={() => changeBookmark(user._id)}
      className={`btn bi bi-bookmark-heart${user.bookmark ? "-fill" : ""}`}
    ></button>
  );
};

BookMark.propTypes = {
  changeBookmark: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};

export default BookMark;
