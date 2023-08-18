const About = () => {
    return <>
        <div className= ' bg-transparent px-5 max-w-[1560px] mx-auto min-h-screen flex items-center justify-between flex-wrap' id='home'> 
            <div className=' w-10/12 sm:w-8/12 mx-auto mt-20 lg:mt-0'>
                <h1 className='text-[32px] text-white mb-3'> Hello! my name is <span className='text-[#F5915C]'>MacGregor O'Blenes</span> and I am a developer</h1>
            </div>
            <div className='w-12/12 sm:w-4/12 px-4'>
                <img className='shadow-lg rounded max-w-full h-auto align-middle border-8 border-[#1e203b]' src={require("./imgs/SupSkelly.png")} alt="" /> 
            </div>
        </div>
    </>
}
export default About