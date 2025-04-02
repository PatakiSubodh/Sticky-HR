import logo from "../assets/images/cmpyLogo.png"

import { faWhatsapp, faXTwitter, faYoutube, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Newsletter } from "./ui/Newsletter";

function Footer() {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    <footer className="w-full bg-[#222222] text-white p-6 md:block hidden">
      <div className="grid grid-cols-4 gap-4 h-full">
        {/* The Mighty First Column */}
        <div id="mighty-col" className="col-span-1 p-4 flex flex-col gap-4 h-full border-r-[1px] border-[#666666]">
          {/* logo and description */}
          <div id="mighty-top" className="p-4 flex flex-col">
            <Link to="/" onClick={handleHomeClick}>
              <img src={logo} alt="Company Logo" className="w-[90%] mb-4" />
            </Link>
            <p className="text-sm font-normal text-left opacity-75 hover:opacity-100 tracking-wider mt-3" style={{ wordSpacing: '2px' }}>
              Our sticky HR is developing a comprehensive HRMS product to manage end-to-end HR services for early-stage startup companies.
            </p>

          </div>

          {/* company phone  */}
          <div id="mighty-mid" className="p-4 flex flex-col space-y-2">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <a href="tel:+919033244538" className="flex opacity-75 hover:opacity-100">
              <div className="bg-[#086165] text-white text-sm font-medium px-4 py-2 rounded-3xl flex items-center opacity-100">
                +91 90332 44538
              </div>
              <div className="bg-[#086165] text-white p-3 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faPhoneVolume} className="text-lg" />
              </div>
            </a>
          </div>

          {/* location and email */}
          <div id="mighty-bottom" className="p-4 flex flex-col gap-4">
            {/* office location */}
            <div className="flex flex-col text-white">
              <h3 className="text-lg font-bold">Location</h3>
              <a 
                href="https://maps.google.com/?q=Garuda+Bhive+workspace,+Kuvempu+Bus+Station,+BTM+Layout,+Bengaluru,+Karnataka-560068"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-65 hover:opacity-100"
              >
                Garuda Bhive workspace, Kuvempu Bus Station, BTM Layout, Bengaluru, Karnataka-560068
              </a>
            </div>
            {/* office email */}
            <div className="flex flex-col text-white">
              <h3 className="text-lg font-bold">Inquiry</h3>
              <a href="mailto:shakti@stickyhr.com" className="text-sm opacity-65 hover:opacity-100">
                shakti@stickyhr.com
              </a>
            </div>
          </div>
        </div>

        {/* The Bold Second Column */}
        <div id="bold-col" className="col-span-3 p-4 flex flex-col gap-4 h-full">
          {/* The Fantastic Four (First Row) */}
          <div id="fantastic-four" className="grid grid-cols-4 gap-4 flex-1">
            <div id="blaze-one" className="p-4 flex-1">
              <h3 className="text-2xl font-semibold text-[#F5F5F5]">Resources</h3>
              <ul className="mt-3 text-base space-y-2">
                <li><Link to="/blog" className="text-[#F5F5F5] opacity-65 hover:opacity-100">Blog</Link></li>
              </ul>
            </div>
            <div id="blaze-two" className="p-4 flex-1">
              <h3 className="text-2xl font-semibold text-[#F5F5F5]">Features</h3>
              <ul className="mt-3 text-base space-y-2">
                <li><Link to="/features/user-mangement" className="text-[#F5F5F5] opacity-65 hover:opacity-100">User Management</Link></li>
                <li><Link to="/features/attendance-mangement" className="text-[#F5F5F5] opacity-65 hover:opacity-100">Attendence Management</Link></li>
                <li><Link to="/features/leave-mangement" className="text-[#F5F5F5] opacity-65 hover:opacity-100">Leave Management</Link></li>
                <li><Link to="/features/payroll-mangement" className="text-[#F5F5F5] opacity-65 hover:opacity-100">Payroll Management</Link></li>
                <li><Link to="/features/expense-mangement" className="text-[#F5F5F5] opacity-65 hover:opacity-100">Expense Management</Link></li>
                <li><Link to="/features/assets-mangement" className="text-[#F5F5F5] opacity-65 hover:opacity-100">Assets Management</Link></li>
                <li><Link to="/features/document-mangement" className="text-[#F5F5F5] opacity-65 hover:opacity-100">Document Management</Link></li>
              </ul>
            </div>
            <div id="blaze-three" className="p-4 flex-1">
              <h3 className="text-2xl font-semibold text-[#F5F5F5]">Services</h3>
              <ul className="mt-3 text-base space-y-2">
                <li><Link to="/services/virtaul-hr-service" className="text-[#F5F5F5] opacity-65 hover:opacity-100">Virtual HR</Link></li>
                <li><Link to="/services/hiring-and-recruitment-service" className="text-[#F5F5F5] opacity-65 hover:opacity-100">Hiring & Recruitment</Link></li>
                <li><Link to="/services/background-verification-service" className="text-[#F5F5F5] opacity-65 hover:opacity-100">Background Verification</Link></li>
                <li><Link to="/services/training-service" className="text-[#F5F5F5] opacity-65 hover:opacity-100">Training</Link></li>
              </ul>
            </div>
            <div id="blaze-four" className="p-4 flex-1">
              <h3 className="text-2xl font-semibold text-[#F5F5F5]">Company</h3>
              <ul className="mt-3 text-base space-y-2">
                <li><Link to="/pricing" className="text-[#F5F5F5] opacity-65 hover:opacity-100">Pricing</Link></li>
                <li><Link to="/our-story" className="text-[#F5F5F5] opacity-65 hover:opacity-100">About Us</Link></li>
                <li><Link to="/contact-us" className="text-[#F5F5F5] opacity-65 hover:opacity-100">Contact Us</Link></li>
                <li><Link to="/careers" className="text-[#F5F5F5] opacity-65 hover:opacity-100">Careers</Link></li>
                <li><Link to="/customers" className="text-[#F5F5F5] opacity-65 hover:opacity-100">Customers</Link></li>
              </ul>
            </div>
          </div>

          {/* The Dynamic Duo (Second Row) */}
          <div id="dynamic-duo" className="grid grid-cols-2 gap-4 flex-1">
            <div id="alpha-box" className="p-4 flex-1 text-[#F5F5F5] flex flex-col justify-center">
              {/* <div className="mb-4">
                <h3 className="text-2xl font-semibold">Our Newsletter</h3>
                <p className="text-base opacity-80">Enter your email and we will contact you!</p>
              </div>
              <div className="flex items-center bg-[#2D2D2D] rounded-lg overflow-hidden w-[80%]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-[#F5F5F5] bg-[#2D2D2D] placeholder-[#B0B0B0] outline-none "
                />
                <button className="p-3 text-[#F5F5F5]">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div> */}
              <Newsletter />
            </div>

            {/* Socials (Nested Grid) */}
            <div id="tri-force" className="p-4 flex flex-col gap-1 items-center">
              <div id="tri-force-top" className="grid grid-cols-3 gap-10">
                {/* whatsapp */}
                <a href="https://wa.me/919033244538" target="_blank" rel="noopener noreferrer">
                  <div className="p-2 flex items-center justify-center w-[50px]">
                    <div className="bg-[#393939] opacity-75 hover:opacity-100 cursor-pointer p-6 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faWhatsapp} className="text-[#F5F5F5] text-2xl" />
                    </div>
                  </div>
                </a>
                {/* twitter or X */}
                <a href="https://x.com/StickyHr" target="_blank" rel="noopener noreferrer">
                  <div className="p-2 flex items-center justify-center w-[50px]">
                    <div className="bg-[#393939] opacity-75 hover:opacity-100 cursor-pointer p-6 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faXTwitter} className="text-[#F5F5F5] text-2xl" />
                    </div>
                  </div>
                </a>
                {/* youtube */}
                <a href="https://www.youtube.com/channel/UCOlD2Nq3o2S269G3_2lXc6Q" target="_blank" rel="noopener noreferrer">
                  <div className="p-2 flex items-center justify-center w-[50px]">
                    <div className="bg-[#393939] opacity-75 hover:opacity-100 cursor-pointer p-6 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faYoutube} className="text-[#F5F5F5] text-2xl" />
                    </div>
                  </div>
                </a>
              </div>

              <div id="tri-force-bottom" className="grid grid-cols-3 gap-10 mt-1">
                {/* linkedin */}
                <a href="https://www.linkedin.com/company/stickyhr/" target="_blank" rel="noopener noreferrer">
                  <div className="p-2 flex items-center justify-center w-[50px]">
                    <div className="bg-[#393939] opacity-75 hover:opacity-100 cursor-pointer p-6 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faLinkedinIn} className="text-[#F5F5F5] text-2xl" />
                    </div>
                  </div>
                </a>
                {/* instagram */}
                <a href="https://www.instagram.com/stickyhr" target="_blank" rel="noopener noreferrer">
                  <div className="p-2 flex items-center justify-center w-[50px]">
                    <div className="bg-[#393939] opacity-75 hover:opacity-100 cursor-pointer p-6 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faInstagram} className="text-[#F5F5F5] text-2xl" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* copyright section */}
      <div className="flex justify-around items-center text-sm border-t-[1px] border-[#666666] mt-6 pt-6">
          <div className="cpyrt opacity-65 hover:opacity-100 cursor-pointer">
            &#169; 2025 StickyHR Solution Pvt. Ltd, All rights reserved
          </div>

          <div className="policies flex gap-6">
            <a href="#" className="opacity-65 hover:opacity-100">Terms of Service</a>
            <a href="#" className="opacity-65 hover:opacity-100">Privacy Policy</a>
            <a href="#" className="opacity-65 hover:opacity-100">Security Policy</a>
          </div>
        </div>
    </footer>


    {/* For small devices */}
    <footer className="w-full bg-[#222222] text-white p-2 md:hidden block">
      
        {/* The Mighty First Column */}
        <div id="mighty-col" className="col-span-2 p-2 flex flex-col gap-4 h-full">
          {/* logo and description */}
          <div id="mighty-top" className="pt-4 flex flex-col">
            <Link to="/" onClick={handleHomeClick}>
              <img src={logo} alt="Company Logo" className="w-[60%] mb-4" />
            </Link>
            <p className="text-md text-[#f5f5f5] font-normal text-left opacity-75 hover:opacity-100 tracking-wider mt-3" style={{ wordSpacing: '2px' }}>
              Our sticky HR is developing a comprehensive HRMS product to manage end-to-end HR services for early-stage startup companies.
            </p>
          </div>


          <div className="grid grid-flow-row grid-rows-1 grid-cols-1">

            {/* company phone  */}
            <div id="mighty-mid" className="flex flex-row ">
              <a href="tel:+919033244538" className="flex opacity-75 hover:opacity-100">
                <div className="bg-[#086165] text-white text-xs font-medium px-2 py-2 rounded-3xl flex items-center opacity-100">
                  +91 90332 44538
                </div>
                <div className="bg-[#086165] text-white p-3 rounded-full h-10 flex justify-center items-center ">
                  <FontAwesomeIcon icon={faPhoneVolume} className="text-xs " />
                </div>
              </a>
            </div>

            <div className="flex mt-5 gap-x-5">

              {/* whatsapp */}
              <a href="https://wa.me/919033244538" target="_blank" rel="noopener noreferrer" >
                  <div className="h-10 flex items-center justify-center w-10 ">
                    <div className="bg-[#393939] opacity-75 w-10 h-10 hover:opacity-100 cursor-pointer p-5 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faWhatsapp} className="text-[#F5F5F5] text-2xl" />
                    </div>
                  </div>
              </a>

              {/* twitter or X */}
              <a href="https://x.com/StickyHr" target="_blank" rel="noopener noreferrer">
                <div className="h-10 flex items-center justify-center w-10">
                  <div className="bg-[#393939] opacity-75 w-10 h-10 hover:opacity-100 cursor-pointer p-5 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faXTwitter} className="text-[#F5F5F5] text-2xl" />
                  </div>
                </div>
              </a>

              {/* youtube */}
              <a href="https://www.youtube.com/channel/UCOlD2Nq3o2S269G3_2lXc6Q" target="_blank" rel="noopener noreferrer">
                <div className="h-10 flex items-center justify-center w-10">
                  <div className="bg-[#393939] opacity-75 w-10 h-10 hover:opacity-100 cursor-pointer p-5 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faYoutube} className="text-[#F5F5F5] text-2xl" />
                  </div>
                </div>
              </a>

              {/* linkedin */}
              <a href="https://www.linkedin.com/company/stickyhr/" target="_blank" rel="noopener noreferrer">
                <div className="h-10 flex items-center justify-center w-10">
                  <div className="bg-[#393939] opacity-75 w-10 h-10 hover:opacity-100 cursor-pointer p-5 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-[#F5F5F5] text-2xl" />
                  </div>
                </div>
              </a>

              {/* instagram */}
              <a href="https://www.instagram.com/stickyhr" target="_blank" rel="noopener noreferrer">
                <div className="h-10 flex items-center justify-center w-10">
                  <div className="bg-[#393939] opacity-75 w-10 h-10 hover:opacity-100 cursor-pointer p-5 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faInstagram} className="text-[#F5F5F5] text-2xl" />
                  </div>
                </div>
              </a>
            </div>

            <hr className="mt-5 border-gray-500"/>

          </div>
                
          {/* location and email */}
          <div id="mighty-bottom" className=" flex flex-col gap-4">
            {/* office location */}
            <div className="flex flex-col text-[#E6E6E6]">
              <h3 className="text-xl font-bold">Location</h3>
              <a 
                href="https://maps.google.com/?q=Garuda+Bhive+workspace,+Kuvempu+Bus+Station,+BTM+Layout,+Bengaluru,+Karnataka-560068"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-md opacity-65 hover:opacity-100 text-[#E6E6E6]"
              >
                Garuda Bhive workspace, Kuvempu Bus Station, BTM Layout, Bengaluru, Karnataka-560068
              </a>
            </div>
            {/* office email */}
            <div className="flex flex-col text-[#E6E6E6]">
              <h3 className="text-xl  font-bold">Inquiry</h3>
              <a href="mailto:shakti@stickyhr.com" className="mt-2 text-md opacity-65 hover:opacity-100">
                shakti@stickyhr.com
              </a>
            </div>
          </div>
          <hr className="mt-5 border-gray-500"/>
        </div>

        {/* The Bold Second Column */}
        <div className="grid grid-rows-2 p-2 gap-y-5">

          <div className="grid grid-flow-col grid-cols-2">

            <div className="grid place-content-start gap-y-2">
              <h3 className="text-2xl font-semibold text-[#F5F5F5]">Resources</h3>
              <Link to="/blog" className="text-[#F5F5F5] opacity-65 hover:opacity-100 text-sm">Blog</Link>
            </div>
            <div className="grid place-content-start gap-y-2">
              <h3 className="text-2xl font-semibold text-[#F5F5F5]">Features</h3>
              <Link to="/features/user-mangement" className="text-[#F5F5F5] opacity-65 hover:opacity-100 text-sm">User Management</Link>
              <Link to="/features/attendance-mangement" className="text-[#F5F5F5] opacity-65 hover:opacity-100 text-sm">Attendence Management</Link>
              <Link to="/features/leave-mangement" className="text-[#F5F5F5] opacity-65 hover:opacity-100 text-sm">Leave Management</Link>
              <Link to="/features/payroll-mangement" className="text-[#F5F5F5] opacity-65 hover:opacity-100 text-sm">Payroll Management</Link>
              <Link to="/features/expense-mangement" className="text-[#F5F5F5] opacity-65 hover:opacity-100 text-sm">Expense Management</Link>
              <Link to="/features/assets-mangement" className="text-[#F5F5F5] opacity-65 hover:opacity-100 text-sm">Assets Management</Link>
              <Link to="/features/document-mangement" className="text-[#F5F5F5] opacity-65 hover:opacity-100 text-sm">Document Management</Link>
            </div>

          </div>

          <div className="grid grid-cols-2 ">

            <div className="grid place-content-start gap-y-2">
              <h3 className="text-2xl font-semibold text-[#F5F5F5]">Services</h3>
                <Link to="/services/virtaul-hr-service" className="text-[#F5F5F5] opacity-65 hover:opacity-100 text-sm">Virtual HR</Link>
                <Link to="/services/hiring-and-recruitment-service" className="text-[#F5F5F5] opacity-65 hover:opacity-100 text-sm">Hiring & Recruitment</Link>
                <Link to="/services/background-verification-service" className="text-[#F5F5F5] opacity-65 hover:opacity-100 text-sm">Background Verification</Link>
                <Link to="/services/training-service" className="text-[#F5F5F5] opacity-65 hover:opacity-100 text-sm">Training</Link>
            </div>
            <div  className="grid place-content-start gap-y-2">
              <h3 className="text-2xl font-semibold text-[#F5F5F5]">Company</h3>
                <Link to="/pricing" className="text-[#F5F5F5] opacity-65 hover:opacity-100 text-sm">Pricing</Link>
                <Link to="/our-story" className="text-[#F5F5F5] opacity-65 hover:opacity-100 text-sm">About Us</Link>
                <Link to="/contact-us" className="text-[#F5F5F5] opacity-65 hover:opacity-100 text-sm">Contact Us</Link>
                <Link to="/careers" className="text-[#F5F5F5] opacity-65 hover:opacity-100 text-sm">Careers</Link>
                <Link to="/customers" className="text-[#F5F5F5] opacity-65 hover:opacity-100 text-sm">Customers</Link>
            </div>

          </div>

        </div>
      {/* copyright section */}
      <div className=" text-sm border-t-[1px] border-[#666666] mt-6 pt-4 mb-6">
          <div className="cpyrt opacity-65 hover:opacity-100 text-[97%] cursor-pointer">
            &#169; 2025 StickyHR Solution Pvt. Ltd, All rights reserved
          </div>
          <div className="flex gap-x-4 mt-1">
            <Link to="#" className="opacity-65 hover:opacity-100">Terms of Service</Link>
            <Link to="#" className="opacity-65 hover:opacity-100">Privacy Policy</Link>
            <Link to="#" className="opacity-65 hover:opacity-100">Security Policy</Link>
          </div>
        </div>
    </footer>
    </>
  );
};

export default Footer;
