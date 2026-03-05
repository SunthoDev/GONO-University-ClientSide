import React, { useContext, useState } from 'react';
import "./Singup.css"
import singUpImage from "../../../assets/login/singUp.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, updateProfile } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';


const SingUp = () => {

    let [Show, setShow] = useState(false)

    // ================================================

    const { register, handleSubmit, formState: { errors } } = useForm();

    let { createUser, logOutUser } = useContext(AuthContext)

    let [success, setSuccess] = useState("")
    let [error, setError] = useState("")
    let navigate = useNavigate()

    let onSubmit = (data) => {
        setError("")
        setSuccess("")
        let FirstName = data.FirstName
        let LastName = data.LastName
        // let Address = data.Address
        // let Phone = data.number
        let Email = data.email
        let Password = data.password
        let confirmPassword = data.confirmPassword
        let date = moment().format("MM/D/YY , hh:mm A")

        if (Password !== confirmPassword) {
            setError("Please Meatch Your Password")
            return
        }

        // console.log(allData)
        

        createUser(Email, Password)
            .then(result => {
                let createUser = result.user
                setSuccess(" Your SingUp Successfully ")
                // console.log(createUser)
                // user Update 
                updateProfile(createUser, { displayName: FirstName })
                    .then(() => {
                        let saveUser = { name: createUser.displayName, LastName: LastName, Password, email: createUser.email, photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", userId: Math.round(Math.random() * 99999999).toString(), role: "user", status: "pending", date }

                        // console.log(saveUser)

                        // save user DB 
                        fetch("https://server.gonouniversityverification.com/users", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                // console.log(data)
                                if (data.insertedId) {
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Congratulation New user',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                }
                                logOutUser()
                                    .then(result => { navigate("/Login") })
                                    .then(error => { })
                            })

                    })
                    .catch(error => {
                    })

            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }



    return (
        <div className='SingUpParent pt-[40px] pb-[40px]'>

            <div className='SingUp w-[100%] lg:w-[450px] mx-auto py-[20px] px-[30px] bg-[#ffffff80]'>
                <div className="MaineCard">
                    <h2 className=''>User Authentication Register</h2>

                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div className="">
                            <div className='relative'>
                                <input className='mt-[23px] text-black bg-[#FFFFFF] text-[14px] font-[600] rounded-[6px] py-[8px] px-[24px] w-[100%]' placeholder='First Name' type="text" {...register("FirstName", { required: true })} name='FirstName' />
                                <h4 className='absolute font-[600] top-[28px] right-[22px] text-[18px]'><i class="fa fa-user" aria-hidden="true"></i></h4>
                                {errors.FirstName && <span className='text-red-600  font-semibold'>Your First Name is required</span>}
                            </div>
                            <div className='relative'>
                                <input className='mt-[23px] text-black bg-[#FFFFFF] text-[14px] font-[600] rounded-[6px] py-[8px] px-[24px] w-[100%]' placeholder='Last Name' type="text" {...register("LastName", { required: true })} name='LastName' />
                                <h4 className='absolute font-[600] top-[28px] right-[22px] text-[18px]'><i class="fa fa-user" aria-hidden="true"></i></h4>
                                {errors.LastName && <span className='text-red-600 font-semibold'>Your Last Name is required</span>}
                            </div>
                        </div>
                        <div className='relative'>
                            <input className='mt-[23px] text-black bg-[#FFFFFF] text-[14px] font-[600] rounded-[6px] py-[8px] px-[24px] w-[100%]' placeholder='Email' type="email" {...register("email", { required: true })} name='email' />
                            <h4 className='absolute font-[600] top-[28px] right-[22px] text-[18px]'>@</h4>
                            {errors.email && <span className='text-red-600 font-semibold'>Your Email  is required</span>}
                        </div>
                        <div className="">
                            <div className='relative'>
                                <input className='mt-[23px] text-black bg-[#FFFFFF] text-[14px] font-[600] rounded-[6px] py-[8px] px-[24px] w-[100%]' placeholder='Password' type={Show === true ? "text" : "password"} name='password'
                                    {...register("password",
                                        {
                                            required: true,
                                        })}
                                />
                                <button onClick={() => setShow(!Show)} className='absolute top-[28px] right-[22px] text-[18px]'>
                                    <i className={Show === true ? "fa fa-unlock" : "fa fa-lock"} aria-hidden="true"></i>
                                </button>

                                {errors.password?.type === "required" && <span className='text-red-600 font-semibold'>Password field is required</span>}
                            </div>

                            <div className='relative'>
                                <input className='mt-[23px] text-black bg-[#FFFFFF] text-[14px] font-[600] rounded-[6px] py-[8px] px-[24px] w-[100%]' placeholder='Confirm Password' type={Show === true ? "text" : "password"}    {...register("confirmPassword", { required: true })} name='confirmPassword' />
                                <button onClick={() => setShow(!Show)} className='absolute top-[28px] right-[22px] text-[18px]'>
                                    <i className={Show === true ? "fa fa-unlock" : "fa fa-lock"} aria-hidden="true"></i>
                                </button>

                                {errors.confirmPassword && <span className='text-red-600 font-semibold'>Your confirmPassword  is required</span>}
                            </div>

                        </div>
                        {/* ============================ */}
                        <h3 className='text-[#22afa3] text-[15px] font-[500] py-[6px]'>{success}</h3>
                        <h3 className='text-[#f93333] text-[15px] font-[500] py-[6px]'>{error}</h3>


                        {/* ======================== */}
                        <button className='Register mt-[4px] w-[100%] bg-[#22afa3] py-[10px] rounded-[7px] text-white text-[18px] font-[600]' type="submit">Register Now</button>

                        <p className="text-sm text-gray-600 text-center mt-6">
                            If you have an account?{" "}
                            <Link
                                to="/Login"
                                className="text-green-600 font-semibold hover:underline transition"
                            >
                                Login
                            </Link>
                        </p>


                    </form>

                </div>
            </div>
        </div>
    );
};

export default SingUp;






