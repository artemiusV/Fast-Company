import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookMark";
import PropTypes from "prop-types";

/* eslint-disable indent */

const Users = (props) => {
  // const users = props.temp;
  const usersCrop = props.userCrop;
  const handleDelete = props.delete;
  const changeBookmark = props.bookmark;

  return (
    <>
      {usersCrop.map((user) => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>
            <Qualitie temp={user} />
          </td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}/5</td>
          <td>
            <BookMark changeBookmark={changeBookmark} user={user} />
          </td>
          <td>
            <button
              onClick={() => handleDelete(user._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

Users.propTypes = {
  temp: PropTypes.string.isRequired,
  userCrop: PropTypes.array.isRequired,
  delete: PropTypes.func.isRequired,
  bookmark: PropTypes.func.isRequired,
};

export default Users;

// import React, { useState } from "react";
// import api from "../api";

// const Users = () => {
//   const [users, setUsers] = useState(api.users.fetchAll());
//   //   console.log(api.users.fetchAll());
//   const handleDelete = (userId) => {
//     setUsers(users.filter((user) => user._id !== userId));
//     console.log(userId);
//   };

//   const renderPhrase = (number) => {
//     if (number > 4 && number < 13)
//       return `${number} человек тусанет сегодня с тобой`;
//     if (number < 5 && number > 1)
//       return `${number} человека тусанет сегодня с тобой`;
//     if (number === 1) return `${number} человек тусанет сегодня с тобой`;
//     return "Никто с тобой не тусанет";
//   };

//   return (
//     // <h1>sss</h1>
//     <>
//       <h2>
//         <span
//           className={"badge " + (users.length > 0 ? "bg-primary" : "bg-danger")}
//         >
//           {renderPhrase(users.length)}
//         </span>
//       </h2>
//       {users.length > 0 && (
//         <table class="table">
//           <thead>
//             <tr>
//               <th scope="col">Имя</th>
//               <th scope="col">Качества</th>
//               <th scope="col">Профессия</th>
//               <th scope="col">Встретился, раз</th>
//               <th scope="col">Оценка</th>
//             </tr>
//             ёё
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id}>
//                 <td>{user.name}</td>
//                 <td>
//                   {user.qualities.map((item) => (
//                     <span className={"badge m-1 bg-" + item.color}>
//                       {item.name}
//                     </span>
//                   ))}
//                 </td>
//                 <td>{user.profession.name}</td>
//                 <td>{user.completedMeetings}</td>
//                 <td>{user.rate}/5</td>
//                 <td>
//                   <button
//                     onClick={() => handleDelete(user._id)}
//                     className="btn btn-danger"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </>
//   );
// };

// export default Users;
