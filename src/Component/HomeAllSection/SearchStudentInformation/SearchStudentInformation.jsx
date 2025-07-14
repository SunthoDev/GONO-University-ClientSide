import React, { useState } from 'react';
import "./SearchStudentInformation.css"
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { useContext } from "react"
import { AuthContext } from '../../AuthencationAll/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SearchStudentInformation = () => {

    let { user, loading } = useContext(AuthContext)
    let navigate = useNavigate()
    let [Error, setError] = useState("")
    // user data all find use tenStack query 
    const { data: AllStudentInformation = [], refetch } = useQuery({
        queryKey: ["StudentALLData"],
        queryFn: async () => {
            const res = await fetch(" https://test.educationboardresullt.com/StudentALLData");
            return res.json();
        },
    });
    // console.log(AllStudentInformation)


    return (
        <div className='SearchStudentInformationParent bg-white'>
            
            <section className="container w-full h-full border-b pb-12">

                <marquee className="pyy-2 text-black">This is the only official website authorized by UAP for online certificate verification.</marquee>

                <div className="w-full mt-8 p-4 md:p-8 border shadow">
                    <div className="max-w-[650px] mx-auto border">
                        <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 border-b">
                            <i className="fa-solid fa-check"></i>
                            <p className="text-lg text-black">Certificate Verification</p>
                        </div>
                        
                        <form onSubmit={(event) => {
                            setError("")
                            event.preventDefault()
                            let RollNo = event.target.Roll_number.value
                            let RegNo = event.target.Registration_number.value
                            let PassYear = event.target.Pass_Year.value

                            let FindStudentInformation = AllStudentInformation?.find(StudentInfo => StudentInfo.Roll_No === RollNo && StudentInfo.Registration_No === RegNo && StudentInfo.Passing_Year === PassYear)

                            if (FindStudentInformation) {
                                // console.log(FindStudentInformation?._id)
                                navigate(`/StudentInformation/${FindStudentInformation?._id}`)

                            } else {
                                setError("No records found")
                            }

                        }} className="px-4 pb-4 space-y-2 mt-4">

                            {Error !== "" &&
                                <h4 className="p-4 rounded-[4px] text-[18px] text-white text-center bg-[#DC2626]">{Error}</h4>
                            }
                            <div className="row">
                                <div className="input_group">
                                    <label className="bg-[#F9FAFB]">Roll Number:</label>
                                    <input type="text" name="Roll_number" placeholder="Ex: 8764168175" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="input_group">
                                    <label for="registration_number">Registration Number:</label>
                                    <input type="text" name="Registration_number" placeholder="Ex: 8764168175" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="input_group">
                                    <label className="bg-[#F9FAFB]">Pass Year:</label>
                                    <input type="number" name="Pass_Year" placeholder="Pass year number" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="w-2/3 ms-auto">
                                    <button type="submit" class="VerifyButton">Verify</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SearchStudentInformation;