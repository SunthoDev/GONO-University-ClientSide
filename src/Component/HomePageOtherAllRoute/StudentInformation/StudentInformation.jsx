import React from 'react';
import "./StudentInformation.css"
import logo from "../../../assets/logo/footer.png"
import { useLoaderData } from 'react-router-dom';

const StudentInformation = () => {

    let StudentInfoAll = useLoaderData()
    // console.log(StudentInfoAll)

    // let {
    //     Department, Name, Fathers_Name, Mother_Name, Section, Roll_No, Registration_No, Session, Admission_Date, Passing_Year, Gmail, Address, Credit, CGPA,

    //     oneTh_Semester, twoTh_Semester, threeTh_Semester, fourTh_Semester, fiveTh_Semester, sixTh_Semester, sevenTh_Semester, eightTh_Semester,

    //     oneTh_Year, twoTh_Year, threeTh_Year, fourTh_Year, fiveTh_Year, sixTh_Year, sevenTh_Year, eightTh_Year,

    //     StudentImageUrl, date
    // } = StudentInfoAll

    return (
        <div className="StudentInformationParent">
            <div className="StudentInformation w-[100%] md:w-[68%] mx-auto px-2 md:px-0 pt-[20px] pb-[40px]">

                <div className="hidden md:block mb-[8px]">
                    <div className="flex items-center justify-between">
                        <div className="w-[60%] md:w-[12%]">
                            <a href="https://gonouniversity.edu.bd/" target="_blank">
                                <img className='w-full h-full' src={logo} alt="img" />
                            </a>
                        </div>
                        <div className="w-[148px] h-[140px] overflow-hidden bg-black rounded-[8px]">
                            <a href="#" target="_blank">
                                <img className='w-full h-full rounded-[8px]' src={StudentInfoAll?.StudentImageUrl} alt="img" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="block md:hidden">
                    <div className="w-[148px] h-[140px] mx-auto mb-[8px] overflow-hidden bg-black rounded-[8px]">
                        <a href="#" target="_blank">
                            <img className='w-full h-full rounded-[8px]' src={StudentInfoAll?.StudentImageUrl} alt="img" />
                        </a>
                    </div>
                </div>



                <div className="CertificateTotalInformation p-6 shadow ">

                    <div className="flex gap-6">
                        <div className="left">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                        </div>
                        <div className="right">
                            <h2 className="text-[#1F2937]">Certificate Verification</h2>
                        </div>
                    </div>

                    {StudentInfoAll ?
                        <>
                            <h3 className=" ml-[0px] md:ml-[56px]">Verified</h3>
                            <div className="Information ml-[0px] md:ml-[56px] grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 mt-[18px]">

                                <div className="StudentData">
                                    <table>
                                        <tr>
                                            <td>Department</td>
                                            <td>{StudentInfoAll?.Department}</td>
                                        </tr>
                                        <tr>
                                            <td>Name</td>
                                            <td>{StudentInfoAll?.Name}</td>
                                        </tr>
                                        <tr>
                                            <td>Fathers Name</td>
                                            <td>{StudentInfoAll?.Fathers_Name}</td>
                                        </tr>
                                        <tr>
                                            <td>Mother Name</td>
                                            <td>{StudentInfoAll?.Mother_Name}</td>
                                        </tr>
                                        <tr>
                                            <td>Section</td>
                                            <td>{StudentInfoAll?.Section}</td>
                                        </tr>
                                        <tr>
                                            <td>Roll No</td>
                                            <td>{StudentInfoAll?.Roll_No}</td>
                                        </tr>
                                        <tr>
                                            <td>Registration No</td>
                                            <td>{StudentInfoAll?.Registration_No}</td>
                                        </tr>
                                        <tr>
                                            <td>Session</td>
                                            <td>{StudentInfoAll?.Session}</td>
                                        </tr>
                                        <tr>
                                            <td>Admission Date</td>
                                            <td>{StudentInfoAll?.Admission_Date}</td>
                                        </tr>
                                        <tr>
                                            <td>Passing year</td>
                                            <td>{StudentInfoAll?.Passing_Year}</td>
                                        </tr>
                                        <tr>
                                            <td>G-mail</td>
                                            <td>{StudentInfoAll?.Gmail}</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>{StudentInfoAll?.Address}</td>
                                        </tr>
                                        <tr>
                                            <td>Credit</td>
                                            <td>{StudentInfoAll?.Credit}</td>
                                        </tr>
                                        <tr>
                                            <td>CGPA</td>
                                            <td>{StudentInfoAll?.CGPA}</td>
                                        </tr>
                                        <tr>
                                            <td>1th Semester</td>
                                            <td>{StudentInfoAll?.oneTh_Semester}</td>
                                        </tr>
                                    </table>
                                </div>

                                <div className="StudentData">
                                    <table>
                                        <tr>
                                            <td>2th Semester</td>
                                            <td>{StudentInfoAll?.twoTh_Semester}</td>
                                        </tr>
                                        <tr>
                                            <td>3th Semester</td>
                                            <td>{StudentInfoAll?.threeTh_Semester}</td>
                                        </tr>
                                        <tr>
                                            <td>4th Semester</td>
                                            <td>{StudentInfoAll?.fourTh_Semester}</td>
                                        </tr>
                                        <tr>
                                            <td>5th Semester</td>
                                            <td>{StudentInfoAll?.fiveTh_Semester}</td>
                                        </tr>
                                        <tr>
                                            <td>6th Semester</td>
                                            <td>{StudentInfoAll?.sixTh_Semester}</td>
                                        </tr>
                                        <tr>
                                            <td>7th Semester</td>
                                            <td>{StudentInfoAll?.sevenTh_Semester}</td>
                                        </tr>
                                        <tr>
                                            <td>8th Semester</td>
                                            <td>{StudentInfoAll?.eightTh_Semester}</td>
                                        </tr>

                                        <tr>
                                            <td>1st Year</td>
                                            <td>{StudentInfoAll?.oneTh_Year}</td>
                                        </tr>
                                        <tr>
                                            <td>2nd Year</td>
                                            <td>{StudentInfoAll?.twoTh_Year}</td>
                                        </tr>
                                        <tr>
                                            <td>3rd Year</td>
                                            <td>{StudentInfoAll?.threeTh_Year}</td>
                                        </tr>
                                        <tr>
                                            <td>4th Year</td>
                                            <td>{StudentInfoAll?.fourTh_Year}</td>
                                        </tr>
                                        <tr>
                                            <td>5th Year</td>
                                            <td>{StudentInfoAll?.fiveTh_Year}</td>
                                        </tr>
                                        <tr>
                                            <td>6th Year</td>
                                            <td>{StudentInfoAll?.sixTh_Year}</td>
                                        </tr>
                                        <tr>
                                            <td>7th Year</td>
                                            <td>{StudentInfoAll?.sevenTh_Year}</td>
                                        </tr>
                                        <tr>
                                            <td>8th Year</td>
                                            <td>{StudentInfoAll?.eightTh_Year}</td>
                                        </tr>

                                    </table>
                                </div>
                            </div>
                        </>

                        : <h6 className="ResultNotFound">Not found result</h6>
                    }
                </div>
            </div>
        </div>
    );
};

export default StudentInformation;