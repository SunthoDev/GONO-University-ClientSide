import { useContext } from "react";
import "./Home.css"
import SearchStudentInformation from '../HomeAllSection/SearchStudentInformation/SearchStudentInformation'
import { AuthContext } from '../AuthencationAll/AuthProvider/AuthProvider';
import Login from '../AuthencationAll/Login/Login';

const Home = () => {

    let { user } = useContext(AuthContext)


    return (
        <div className="HomeParrent">


            <SearchStudentInformation></SearchStudentInformation>



        </div>
    );
};

export default Home;