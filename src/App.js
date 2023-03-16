import React, { useState } from "react";
import SearchStatus from "./components/searchStatus";
import Users from "./components/users";
import api from "./api";
import Pagination from "./components/pagination";
import { paginate } from "./api/utils/paginate";

/* eslint-disable indent */

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const count = users.length;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const handlePageChange = (pageIndex) => {
    console.log("page:", pageIndex);
    setCurrentPage(pageIndex);
  };

  const userCrop = paginate(users, currentPage, pageSize);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
    console.log(userId);
  };

  const changeBookmark = (id) => {
    const newUsers = users.map((user) => {
      if (user._id === id) {
        return {
          ...user,
          bookmark: !user.bookmark,
        };
      }
      return user;
    });
    setUsers(newUsers);
  };

  return (
    <>
      <SearchStatus temp={users} />

      {count > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <Users
              temp={users}
              delete={handleDelete}
              bookmark={changeBookmark}
              userCrop={userCrop}
            />
          </tbody>
        </table>
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default App;
