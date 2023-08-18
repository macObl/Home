const Aboutme = () => {
    return <>
        <div className='px-5 max-w-[1560px] mx-auto mt-20 py-10' id='about'>
            <div className='flex-wrap flex items-center justify-between'>
                <div className='md:w-[48%] w-full'>
                    <div className='mb-12'>
                        <div className=' text-white font-medium text-[32px] flex items-center gap-2'>
                            <div className=''> 
                                <span className='text-[#F5915C]'>#</span>about-me
                            </div>
                            <div className='line w-2/3 h-px bg-[#F5915C]'></div>
                        </div>
                    </div>
                    <p className='text-[#ABB2BF]'>
                        As you probably already know my name is MacGregor O'Blenes, 
                        but you can call me Mac. I am a program developer, based in Ottawa,
                        Canada.
                        <br />
                        <br />
                        I am primarily geared toward web development, but have experience creating
                        responsive websites (like this one), and have an interest in creating
                        video games.
                        <br />
                        <br />
                         Some other interests include skateboarding, skiing, web development, game development,
                         and machine learning. I have recently spent time with JavaScript, Ruby on
                          Rails, Apex, HTML/CSS(SASS), and PostgreSQL. Outside of my current job 
                          I have used Python, Reactjs, MongoDB, Flask, Django, and Expressjs. 
                          Other Services I have used include SalesForce, Tableau, Heroku, Azure, 
                          and Google Cloud.
                        <br />
                        <br />
                        If you have a different challenge, no worries! I enjoy working through 
                        and solving problems!
                    </p>
                </div>
                <div className='mx-auto'>
                    <img className='mx-auto rounded-full pt-8' src={require("./imgs/cubeWave.gif")} alt="" />
                </div>
            </div>
        </div>
    </>
};

export default Aboutme;