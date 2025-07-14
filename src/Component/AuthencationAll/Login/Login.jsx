
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css"
import loginImage from "../../../assets/login/login.png"
import { useRef } from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useRole from "../../../Hook/useRole";

const Login = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    let { loginUser, PasswordResetAllUser } = useContext(AuthContext)

    const [roles] = useRole()
    const ad = roles?.role === "admin"

    let [success, setSuccess] = useState("")
    let [error, setError] = useState("")
    let [Show, setShow] = useState(false)
    const modalRef = useRef(null);
    let navigate = useNavigate()
    let location = useLocation()
    let stateInfo = location.state?.from.pathname || "/"

    let onSubmit = (data) => {
        setSuccess("")
        setError("")

        let emailValue = data.email
        let passwordValue = data.Password

        loginUser(emailValue, passwordValue)
            .then(result => {
                let user = result.user
                setSuccess("Your Login Successfully")
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(stateInfo)

            })
            .catch(error => {
                setError("Please Give Me Valid Password")
                // console.log(error)
            })
    }

    // ===================================================
    // Change User Email Password Validation
    // ===================================================

    let HandleChangeEmailData = (event) => {
        event.preventDefault()
        let EmailChangeValue = event.target.changeEmail.value
        // console.log(EmailChangeValue)
        PasswordResetAllUser(EmailChangeValue)
            .then(result => {

                // modal বন্ধ করা
                if (modalRef.current) {
                    modalRef.current.close();
                }
                alert("Please check your email and change password!")
            })
            .catch(error => {
                setError(error)
            })
    }


    return (

        <div className='LoginParent pt-[40px] pb-[40px] h-auto md:h-screen'>

            <div className='LogIn w-[100%] lg:w-[450px] mx-auto py-[20px] px-[30px] bg-[#ffffff80]'>

                <div className="MaineCard">

                    <h2 className=''>User Authentication Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className='FromData' >

                        <div className='relative'>
                            <input className='mt-[23px] text-black bg-[#FFFFFF] text-[14px] font-[600] rounded-[6px] py-[8px] px-[24px] w-[100%]' placeholder='Email' type="email" {...register("email", { required: true })} name='email' />
                            <h4 className='absolute font-[600] top-[28px] right-[22px] text-[18px]'>@</h4>
                            {errors.email && <span className='text-red-600 font-semibold'>Your Email  is required</span>}
                        </div>

                        <div className='relative'>
                            <input className='mt-[23px] text-black bg-[#FFFFFF] text-[14px] font-[600] rounded-[6px] py-[8px] px-[24px] w-[100%]' placeholder=' Password' type={Show === true ? "text" : "password"} {...register("Password", { required: true })} name='Password' />

                            <button onClick={() => setShow(!Show)} className='absolute top-[28px] right-[22px] text-[18px]'>
                                <i className={Show === true ? "fa fa-unlock" : "fa fa-lock"} aria-hidden="true"></i>
                            </button>

                            {errors.Password && <span className='text-red-600 font-semibold'>Your confirmPassword  is required</span>}
                        </div>

                        {/* ============================ */}
                        <h3 className='text-[#22afa3] text-[15px] font-[500] py-[6px]'>{success}</h3>
                        <h3 className='text-[#f93333] text-[15px] font-[500] py-[6px]'>{error}</h3>

                        {/* ============================ */}

                        <button className='Register mt-[4px] w-[100%] bg-[#22afa3] py-[8px] rounded-[4px] text-white text-[16px] font-[400]' type="submit">LOGIN </button>

                        {/* ========================= */}

                        <button onClick={() => document.getElementById('ResatPasswordOfEmail').showModal()} className=" mt-[18px] mx-auto text-right pb-2 text-[#22afa3] text-[15px] font-[500]">Forgot Password...?</button>

                        <p className="text-sm text-gray-600 text-center mt-6">
                            Don't have an account?{" "}
                            <Link
                                to="/SingUp"
                                className="text-green-600 font-semibold hover:underline transition"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>


            {/* ============================================ */}
            {/* Modal Button */}
            {/* ============================================ */}

            <dialog id="ResatPasswordOfEmail" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h2 className="font-bold text-xl mb-2 text-center text-[#1d4ed8]">Change your password of email</h2>

                    <p className="text-sm text-gray-500 mb-4 text-center">
                        Enter a email id below and press submit to change email password.
                    </p>

                    <form onSubmit={HandleChangeEmailData}>
                        <input
                            placeholder="Enter email id"
                            className="input input-bordered w-full mb-4"
                            type="email"
                            name="changeEmail"
                            required
                        />
                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </dialog>

        </div>

    );
};

export default Login;