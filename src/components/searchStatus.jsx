import React from "react";

const SearchStatus = (props) => {
  const users = props.temp;

  const renderPhrase = (number) => {
    if (number > 4 && number < 13)
      return `${number} человек тусанет сегодня с тобой`;
    if (number < 5 && number > 1)
      return `${number} человека тусанет сегодня с тобой`;
    if (number === 1) return `${number} человек тусанет сегодня с тобой`;
    return "Никто с тобой не тусанет";
  };

  return (
    <h2>
      <span
        className={"badge " + (users.length > 0 ? "bg-primary" : "bg-danger")}
      >
        {renderPhrase(users.length)}
      </span>
    </h2>
  );
};

export default SearchStatus;
