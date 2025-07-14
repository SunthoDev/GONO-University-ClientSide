import React from 'react';
import "./UserAllData.css"

const UserAllData = ({ allUser, HandleAdmin, handleUser, HandleDelete }) => {

    // console.log(allUser)

    let { LastName, Password, date, email, name, photo, role, status, userId, _id, } = allUser

    return (
        <tr className='UserAllData'>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} />
                        </div>
                    </div>
                </div>
            </td>

            <td>
                <h3>{name}</h3>
            </td>
            <td>
                <h3>{email}</h3>
                <h3>Password: {Password}</h3>
            </td>

            <td>
                <h3 className={role === "admin" ? "text-center border-4 border-green-700" : "text-center border-4 border-red-700"}>{role}</h3>
            </td>

            <td>
                <button onClick={() => HandleAdmin(_id)}>Admin</button>
                <br />
                <button onClick={() => handleUser(_id)}>User</button>
            </td>
            <td><button onClick={() => HandleDelete(_id)}>Delete</button></td>

        </tr>
    );
};

export default UserAllData;