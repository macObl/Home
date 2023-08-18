import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Project_card = ({ img, langs, title, disc, link, glink }) => {
    return (
        <div className='border mx-auto w-[90%] lg:w-[30%] border-[#FFFFFF] p-0 mt-[200px]'>
            {img.length == 1 && (
                <img className='w-full' src={img[0]} alt='' />
                         
            )}
            {img.length > 1 && (
                <Carousel className='main-slide' showStatus={false} showThumbs={false}>
                    {img.map((image, index) => (
                        <div key={index}>
                            <img className='w-full' src={image} alt='' />
                        </div>
                    ))}
                </Carousel> 
            )}
            <div className='flex gap-2 flex-wrap p-2 border-y border-[#FFFFFF]'>
                {langs.map((e, index) => (
                    <span key={index} className='text-white'>
                        {e}
                    </span>
                ))}
            </div>
            <div className='p-4 '>
                <h2 className='text-[#F5915C] text-2xl font-medium'>{title}</h2>
                <p className='py-4 text-[#ABB2BF]'>{disc}</p>
                <div className='flex gap-4 flex-wrap'>
                    {link !== 'blank' && (
                        <div style={{ display: 'inline' }}>
                            <button className='py-2 px-4 border text-white border-[#F5915C] hover:bg-[#DB816033] duration-150'>
                                <a href={link} target='_blank' rel='noopener noreferrer'>
                                    Live
                                </a>
                            </button>
                        </div>
                    )}
                     {glink !== 'blank' && (
                        <div style={{ display: 'inline' }}>
                            <button className='py-2 px-4 border text-white border-[#F5915C] hover:bg-[#DB816033] duration-150'>
                                <a href={glink} target='_blank' rel='noopener noreferrer'>
                                    Github
                                </a>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Project_card;
