import React from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

const AddStudentInformation = () => {

  const { register, handleSubmit, reset } = useForm();


  // Admin add website banner work Here !
  // =======================================================
  let onSubmit = (data) => {
    let fromData = new FormData()
    fromData.append("image", data.Student_Image[0])
    fetch(`https://api.imgbb.com/1/upload?key=1685773ae2ac69444846d73f9220b840`, {
      method: "POST",
      body: fromData
    })
      .then(res => res.json())
      .then(imageResponse => {
        if (imageResponse.success) {

          // console.log(imageResponse.secure_url);

          let StudentImageUrl = imageResponse.data.display_url
          let date = moment().format("D/MM/YY , hh:mm A")
          let {
            Department, Name, Fathers_Name, Mother_Name, Section, Roll_No, Registration_No, Session, Admission_Date, Passing_Year, Gmail, Address, Credit, CGPA,

            oneTh_Semester, twoTh_Semester, threeTh_Semester, fourTh_Semester, fiveTh_Semester, sixTh_Semester, sevenTh_Semester, eightTh_Semester,

            oneTh_Year, twoTh_Year, threeTh_Year, fourTh_Year, fiveTh_Year, sixTh_Year, sevenTh_Year, eightTh_Year
          } = data

          let allInfo = {
            Department, Name, Fathers_Name, Mother_Name, Section, Roll_No, Registration_No, Session, Admission_Date, Passing_Year, Gmail, Address, Credit, CGPA,

            oneTh_Semester, twoTh_Semester, threeTh_Semester, fourTh_Semester, fiveTh_Semester, sixTh_Semester, sevenTh_Semester, eightTh_Semester,

            oneTh_Year, twoTh_Year, threeTh_Year, fourTh_Year, fiveTh_Year, sixTh_Year, sevenTh_Year, eightTh_Year,

            StudentImageUrl, date
          }

          // console.log(allInfo)

          // save user Database 
          // ==========================
          fetch("https://test.educationboardresullt.com/AdminAddStudentInformation", {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(allInfo)
          })
            .then(res => res.json())
            .then(data => {
              // console.log(data)
              if (data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Student Information Add Successfully",
                  showConfirmButton: false,
                  timer: 1500
                })
                reset()
              }
            })

        } else {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Network Connection Lost, Try agin",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }

  return (
    <div className="mx-2 md:mx-8 px-4 py-8 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Student Information Add</h2>
      <form onSubmit={handleSubmit(onSubmit)} >

        {/* Student personal Information*/}
        {/* ================================================= */}
        <h2 className="text-[18px] text-black text-center font-[600] py-8">Student personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 1 */}
          <div>
            <label className="block mb-1 text-black font-medium">Student Image</label>
            <input type="file" {...register("Student_Image")} name="Student_Image" className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* 2 */}
          <div>
            <label className="block mb-1 text-black font-medium">Department</label>
            <input type="text" {...register("Department")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* 3 */}
          <div>
            <label className="block mb-1 text-black font-medium">Name</label>
            <input type="text" {...register("Name")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* 4 */}
          <div>
            <label className="block mb-1 text-black font-medium">Fathers Name</label>
            <input type="text" {...register("Fathers_Name")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* 5 */}
          <div>
            <label className="block mb-1 text-black font-medium">Mother Name</label>
            <input type="text" {...register("Mother_Name")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* 6 */}
          <div>
            <label className="block mb-1 text-black font-medium">Section</label>
            <input type="text" {...register("Section")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* 7 */}
          <div>
            <label className="block mb-1 text-black font-medium">Roll No</label>
            <input type="text" {...register("Roll_No")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* 8 */}
          <div>
            <label className="block mb-1 text-black font-medium">Registration No</label>
            <input type="text" {...register("Registration_No")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* 9 */}
          <div>
            <label className="block mb-1 text-black font-medium">Session</label>
            <input type="text" {...register("Session")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* 10 */}
          <div>
            <label className="block mb-1 text-black font-medium">Admission Date</label>
            <input type="date" {...register("Admission_Date")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* 11 */}
          <div>
            <label className="block mb-1 text-black font-medium">Passing year</label>
            <input type="text" {...register("Passing_Year")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* 12 */}
          <div>
            <label className="block mb-1 text-black font-medium">G-mail</label>
            <input type="email" {...register("Gmail")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* 13 */}
          <div>
            <label className="block mb-1 text-black font-medium">Address</label>
            <input type="text" {...register("Address")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* 14 */}
          <div>
            <label className="block mb-1 text-black font-medium">Credit</label>
            <input type="number" {...register("Credit")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* 15 */}
          <div>
            <label className="block mb-1 text-black font-medium">CGPA</label>
            <input type="text" {...register("CGPA")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>

        {/* Semester Fields */}
        {/* ================================================= */}
        <h2 className="text-[18px] text-black text-center font-[600] py-8">Semester Fields</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-black font-medium">1th Semester</label>
            <input type="text" {...register("oneTh_Semester")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-1 text-black font-medium">2th Semester</label>
            <input type="text" {...register("twoTh_Semester")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-1 text-black font-medium">3th Semester</label>
            <input type="text" {...register("threeTh_Semester")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-1 text-black font-medium">4th Semester</label>
            <input type="text" {...register("fourTh_Semester")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-1 text-black font-medium">5th Semester</label>
            <input type="text" {...register("fiveTh_Semester")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-1 text-black font-medium">6th Semester</label>
            <input type="text" {...register("sixTh_Semester")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-1 text-black font-medium">7th Semester</label>
            <input type="text" {...register("sevenTh_Semester")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-1 text-black font-medium">8th Semester</label>
            <input type="text" {...register("eightTh_Semester")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>

        {/* Year Fields */}
        {/* ================================================= */}
        <h2 className="text-[18px] text-black text-center font-[600] py-8">Year Fields</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-black font-medium">1st Year</label>
            <input type="text" {...register("oneTh_Year")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-1 text-black font-medium">2nd Year</label>
            <input type="text" {...register("twoTh_Year")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-1 text-black font-medium">3rd Year</label>
            <input type="text" {...register("threeTh_Year")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-1 text-black font-medium">4th Year</label>
            <input type="text" {...register("fourTh_Year")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-1 text-black font-medium">5th Year</label>
            <input type="text" {...register("fiveTh_Year")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-1 text-black font-medium">6th Year</label>
            <input type="text" {...register("sixTh_Year")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-1 text-black font-medium">7th Year</label>
            <input type="text" {...register("sevenTh_Year")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-1 text-black font-medium">8th Year</label>
            <input type="text" {...register("eightTh_Year")} className="w-full border border-gray-300 bg-white text-black px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center mt-6">
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Submit
          </button>
        </div>
      </form>
    </div>

  );
};

export default AddStudentInformation;
