import React from 'react';
import "./SeeAllStudentInformation.css"
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { useContext } from "react"
import { useNavigate } from 'react-router-dom';

const SeeAllStudentInformation = () => {

    let navigate = useNavigate()

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
        <div className="mx-2 my-4 bg-white shadow-md rounded-md p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Student Informations</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Roll</th>
                            <th className="px-4 py-2 border">Registration</th>
                            <th className="px-4 py-2 border">Department</th>
                            <th className="px-4 py-2 border">Credit</th>
                            <th className="px-4 py-2 border">Session</th>
                            <th className="px-4 py-2 border">Passing Year</th>
                            <th className="px-4 py-2 border text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AllStudentInformation?.map(studentInfo => <tr className="hover:bg-gray-50">
                                <td className="px-4 py-2 border">{studentInfo?.Name}</td>
                                <td className="px-4 py-2 border">{studentInfo?.Roll_No}</td>
                                <td className="px-4 py-2 border">{studentInfo?.Registration_No}</td>
                                <td className="px-4 py-2 border">{studentInfo?.Department}</td>
                                <td className="px-4 py-2 border">{studentInfo?.Credit}</td>
                                <td className="px-4 py-2 border">{studentInfo?.Session}</td>
                                <td className="px-4 py-2 border">{studentInfo?.Passing_Year}</td>
                                <td className="px-4 py-2 border text-center">
                                    <button
                                        onClick={() => {
                                            Swal.fire({
                                                title: "Are you sure?",
                                                text: "You won't be able to revert this!",
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#3085d6",
                                                cancelButtonColor: "#d33",
                                                confirmButtonText: "Yes, delete it!"
                                            }).then((result) => {
                                                if (result.isConfirmed) {

                                                    fetch(` https://test.educationboardresullt.com/AdminDeleteStudentDelete/${studentInfo?._id}`, {
                                                        method: "DELETE",
                                                    })
                                                        .then(res => res.json())
                                                        .then(data => {
                                                            if (data.deletedCount > 0) {
                                                                Swal.fire({
                                                                    position: "top-end",
                                                                    icon: "success",
                                                                    title: "Admin Delete student information has been Success",
                                                                    showConfirmButton: false,
                                                                    timer: 1500
                                                                })
                                                            }
                                                            refetch()
                                                        })
                                                }
                                            });
                                        }} className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded">
                                        Delete
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SeeAllStudentInformation;