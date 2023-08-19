import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import PDF from './imgs/MacResume.pdf';



const Navbar = () => {
        const [toggle, setToggle] = useState(false)
    return<>
        <div className='fixed top-0 left-0 right-0 bg-[#18192e]'>
            <div className='px-5 max-w-[1560px] mx-auto flex items-center justify-between pt-6 my-2'>
                <div className="left flex gap-2 items-center font-bold text-white text-base">
                    <FontAwesomeIcon icon={faGamepad} />
                    Mac
                </div>

                <div className="right flex items-center">
                    <div className={`bg-[#18192e] menu duration-300 flex-col justify-center md:flex-row flex fixed w-full ${!toggle  ? `right-[-100%] top-0 bottom-0 ` : `right-0 top-0 bottom-0`}  md:static`}>
                        <Link to="home" spy={true} smooth={true} offset={0}>
                            <li className='text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4 cursor-pointer'>
                                <span className='text-[#F5915C] font-medium'>#</span>Home
                            </li>
                        </Link>
                        <Link to="about" spy={true} smooth={true} offset={-50}>
                            <li className='text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4 cursor-pointer'>
                                <span className='text-[#F5915C] font-medium'>#</span>About-me
                            </li>
                        </Link>
                        <Link to="project" spy={true} smooth={true} offset={10}>
                            <li className='text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4 cursor-pointer'>
                                <span className='text-[#F5915C] font-medium'>#</span>Projects
                            </li>
                        </Link>
                        <li className='text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4 cursor-pointer'>
                                <a href={PDF} target="_blank"><span className='text-[#F5915C] font-medium'>#</span>Resume</a>
                        </li>
                        <div onClick={()=>setToggle(false)} className='close absolute block md:hidden right-3 top-3'>
                            <FontAwesomeIcon icon={faXmark} size="2xl" style={{color: "#ffffff",}} />
                        </div>
                    </div>
                    <div onClick={()=>setToggle(true)} className="">
                        <div className="close block md:hidden w-8">
                            <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                            <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                            <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}
export default Navbar