import React from 'react';
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from "react";
import Logo from "../../../assets/logo/logo.png"
import { useContext } from 'react';
import { AuthContext } from '../../AuthencationAll/AuthProvider/AuthProvider';
import useRole from '../../../Hook/useRole';
import { useQuery } from '@tanstack/react-query';

const Heder = () => {

    let { user, logOutUser } = useContext(AuthContext)
    let navigate = useNavigate()
    const modalRef = useRef(null);
    const [roles] = useRole()
    const ad = roles?.role === "admin"
    // console.log(roles)


    // logOut user 
    let handleLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch((error) => { })
    }


    return (
        <div className="">
            <div className="bg-[#275CAB]">
                <div className="container flex justify-between items-center px-2 md:px-16 py-4 ">

                    <div className='LogoPart w-[180px]'>
                        <Link to="/">
                            <img className='w-[100%]' src={Logo} alt="img" />
                        </Link>
                    </div>
                    {
                        ad &&
                        <Link to="dashboard">
                            <button className="NavButton">Dashboard</button>
                        </Link>
                    }
                </div>
            </div>

            <nav class="bg-blue-950">
                <div class="container flex justify-between py-2">
                    <a href="https://gonouniversity.edu.bd/">
                        <button className="NavButton">Home</button>
                    </a>
                    <a href="https://gonouniversity.edu.bd/">
                        <button className="NavButton">Graduate Login</button>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Heder;