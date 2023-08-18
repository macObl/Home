import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return <>
        <div className=' bg-[#18192e]'> 
            <div className='w-full h-px bg-[#F5915C] mt-20 mb-8'></div>
            <div className=' px-5 max-w-[1560px] mx-auto'>
                <div className='flex justify-between gap-y-10 flex-wrap'>
                    <div className='mx-auto'>
                        <div className=' flex items-center gap-8 mb-3 flex-wrap'>
                            <div className='flex gap-1 items-center text-2x1 text-white font-bold'>
                                <a href="mailto:macgregor@live.ca"><FontAwesomeIcon icon={faEnvelope} size="2xl"/></a>
                            </div>
                            <div className='text-[#F5915C]'><a href="mailto:macgregor@live.ca">macgregor@live.ca</a></div>
                        </div>
                        <div className='text-[#ABB2BF]'>
                            <p>Program and Web developer base in Canada</p>
                        </div>
                    </div>
                    <div className='mx-auto'>
                            <h1 className='text-white text-2x1 font-medium mb-3'>Media</h1>
                            <div className='flex items-center gap-2'>
                                <a className='text-[#F5915C]' href="https://github.com/macObl" target="_blank"><FontAwesomeIcon icon={faGithub} size="xl"/></a>
                                <a className='text-[#F5915C]' href="https://www.linkedin.com/in/macgregor-oblenes/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="xl"/></a>
                            </div>
                    </div>
                </div>
                <div className='text-center  text-[#ABB2BF] pb-8 mt-12 text-[12px]'>©Copyright... Just Kidding</div>
            </div>
        </div>
    </>
};

export default Footer;