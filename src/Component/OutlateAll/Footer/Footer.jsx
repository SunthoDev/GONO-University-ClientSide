import React from 'react';
import "./Footer.css"
import Logo from "../../../assets/logo/footer.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">

                <div className="grid md:grid-cols-9 gap-8 mt-">

                    {/* Column 1 */}
                    <div className="md:col-span-3">

                        <div className="footer-logo w-40 ">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="w-full"
                            />
                        </div>

                        <p className="text[#999999] text-[17px] leading-[23px]">
                            Nolam, P.O. Mirzanagar via Savar Cantonment,
                            <br />
                            Ashulia, Savar, Dhaka-1344.
                            <br />
                            Telephone: 01950003312, 01950003313,
                            01950003314 (Admission),(Administrative),
                        </p>

                        <div className="flex gap-4 mt-4">
                            <div className="SocialIcon">
                                <a href="https://www.facebook.com/share_channel/?type=reshare&link=https%3A%2F%2Fgonouniversity.edu.bd%2Fcontact-us%2F&app_id=966242223397117&source_surface=external_reshare&display&hashtag#">
                                    <i className="fa fa-facebook text-gray-800 text-xl"></i>
                                </a>
                            </div>
                            <div className="SocialIcon">
                                <a href="https://x.com/intent/tweet?url=https://gonouniversity.edu.bd/contact-us//&text=CONTACT%20US%20-%20Gono%20Bishwabidyalay">
                                    <i className="fa fa-twitter text-gray-800 text-xl"></i>
                                </a>
                            </div>
                            <div className="SocialIcon">
                                <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://gonouniversity.edu.bd/contact-us/&title=CONTACT%20US&source=Gono%20Bishwabidyalay">
                                    <i className="fa fa-linkedin text-gray-800 text-xl"></i>
                                </a>
                            </div>
                            <div className="SocialIcon">
                                <a href="https://en.wikipedia.org/wiki/Gono_Bishwabidyalay">
                                    <i className="fa fa-wikipedia-w text-gray-800 text-xl" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className="md:col-span-2">
                        <ul className=" text-sm text-gray-700">
                            <li><a href="https://iems.gonouniversity.edu.bd/">IEMS login</a></li>
                            <li><a href="https://admission.gonouniversity.edu.bd/apply-online/">Apply Online</a></li>
                            <li><a href="https://gonouniversity.edu.bd/category/convocation/">Convocation</a></li>
                            <li><a href="https://gonouniversity.edu.bd/admission/tuition-and-other-fees/">Tuition Fees</a></li>
                            <li><a href="https://gonouniversity.edu.bd/administration/authority/faculty/">Resources</a></li>
                            <li><a href="http://mail.google.com/a/uap-bd.edu">Faculty Members</a></li>
                            <li><a href="https://gonouniversity.edu.bd/administration/authority/board-of-trustees/">BOT</a></li>
                            <li><a href="https://gonouniversity.edu.bd/contact-us/">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="md:col-span-2">
                        <ul className=" text-sm text-gray-700">
                            <li><a href="https://searchenginereports.net/plagiarism-checker">Plagiarism Checker</a></li>
                            <li><a href="https://gonouniversity.edu.bd/category/notice/">Notice</a></li>
                            <li><a href="https://gonouniversity.edu.bd/category/top-scroll-notice/">Important Notice</a></li>
                            <li><a href="https://gonouniversity.edu.bd/category/exam-notice/#">Exam Notice</a></li>
                            <li><a href="https://gonouniversity.edu.bd/category/job-notice/">Job Notice</a></li>
                            <li><a href="https://gonouniversity.edu.bd/category/news-events/">All News & Events</a></li>
                            <li><a href="https://gonouniversity.edu.bd/category/tender/">Tender Notice</a></li>
                            <li><a href="https://gonouniversity.edu.bd/category/campus-life/">Campus Life/Gallery</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="md:col-span-2">
                        <ul className=" text-sm text-gray-700">
                            <li><a href="#">Email: admin@gonouniversity.edu.bd</a></li>
                            <li><a href="#">Mobile: 01950003312, 01950003313,</a></li>
                            <li><a href="#">Admission: 01950003314</a></li>
                            <li><a href="#">Administrative: 01950003319, 01950003320</a></li>
                        </ul>
                    </div>
                </div>


                {/* <!-- CONTACT WIDGET --> */}
                <div className="copyright pb-4 pt-4 w-full">
                    <div className="flex justify-between items-center w-full">
                        <h4 className="text-[18px] text-[#999999]">Copyright © Gono Bishwabidyalay 2025</h4>

                        <h4 className="text-[16px] text-[#999999]">
                            Developed By:{" "}
                            <a href="#" target="_blank" className="text-blue-500 hover:underline">
                                gono university it department.
                            </a>
                        </h4>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

