import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../OutlateAll/Main/Main';
import Home from '../../Home/Home';
import Dashboard from '../../DashboardAll/Dashboard/Dashboard';
import Error from '../Error/Error';
import Login from '../../AuthencationAll/Login/Login';
import SingUp from '../../AuthencationAll/SingUp/SingUp';
import PrivateRoute from '../../AuthencationAll/PrivateRoute/PrivateRoute';
import AdminSeeAllUser from '../../DashboardAll/AdminPanelDashboardAll/AdminSeeAllUser/AdminSeeAllUser';
import AdminRoute from '../../../Hook/AdminRoute';
import AdminHome from '../../DashboardAll/AdminPanelDashboardAll/AdminHome/AdminHome';
import AddStudentInformation from '../../DashboardAll/AdminPanelDashboardAll/AddStudentInformation/AddStudentInformation';
import StudentInformation from '../../HomePageOtherAllRoute/StudentInformation/StudentInformation';
import SeeAllStudentInformation from '../../DashboardAll/AdminPanelDashboardAll/SeeAllStudentInformation/SeeAllStudentInformation';

let route = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/singUp",
                element: <SingUp></SingUp>
            },
            {
                path: "/StudentInformation/:id",
                element: <StudentInformation></StudentInformation>,
                loader: ({ params }) => fetch(`https://test.educationboardresullt.com/SearchStudentData/${params.id}`)
            }
        ]
    },

    // Admin Panel  Work

    {
        path: "dashboard",
        element: <AdminRoute> <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute> </AdminRoute>,
        children: [
            {
                path: "AdminSingUpUser",
                element: <AdminRoute> <PrivateRoute> <SingUp></SingUp> </PrivateRoute> </AdminRoute>
            },
            {
                path: "AdminSeeAllUser",
                element: <AdminRoute> <PrivateRoute> <AdminSeeAllUser></AdminSeeAllUser> </PrivateRoute> </AdminRoute>,
            },
            {
                path: "AddStudentInformation",
                element: <AdminRoute> <PrivateRoute> <AddStudentInformation></AddStudentInformation> </PrivateRoute> </AdminRoute>,
            },
            {
                path: "AdminHome",
                element: <AdminRoute> <PrivateRoute> <AdminHome></AdminHome> </PrivateRoute> </AdminRoute>,
            },
            {
                path: "SeeAllStudentInformation",
                element: <AdminRoute> <PrivateRoute> <SeeAllStudentInformation></SeeAllStudentInformation> </PrivateRoute> </AdminRoute>,
            }
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }

])


export default route;




// ayta deya code client site  reset hoy
// git reset --hard HEAD~1

// ayta deta hova github remove hoy
// git push origin main --force

//  https://test.educationboardresullt.commmmmmmmmmmmmmmmm
