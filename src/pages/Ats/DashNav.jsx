import { Link, useLocation } from 'react-router-dom';
import admin from "../../assets/images/Ats-img/admin.png";
import msg from "../../assets/images/Ats-img/msg.png"
import bell from "../../assets/images/Ats-img/bell.png"

export default function DashNav(){
    return(
        <>
            <div className="bg-[#edf7f3] flex justify-between px-14 ">
                <div className='flex'>
                    <Link to="#"><img src={msg} alt="Message-Image" className='rounded-full scale-50'/></Link>
                    <Link to="#"><img src={bell} alt="Bell-Image" className='rounded-full scale-50'/></Link>
                    <Link to="#">
                        <div className="flex scale-75">
                            <img src={admin} alt="Admin-Img" className="rounded-full scale-75"/>
                            <div className='flex flex-col justify-center'>
                                <p className="text-lg font-semibold">Scott Martin</p><p className="text-[#5f5f61] text-base">Administrator</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}