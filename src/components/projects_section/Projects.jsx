import Project_card from '../project_card/Project_card';
import bd_first from './imgs/dashboard_1.png';
import bd_second from './imgs/dashboard_2.png';
import bd_thrid from './imgs/dashboard_3.png';
import MF_first from './imgs/doom_1.png';
import MF_second from './imgs/doom_2.png';
import F_first from './imgs/fighter_1.png';
import F_second from './imgs/fighter_2.png';
import F_thrid from './imgs/fighter_3.png';
import F_forth from './imgs/fighter_4.png';
import J_first from './imgs/jumper_1.png';
import J_second from './imgs/jumper_2.png';
import J_thrid from './imgs/jumper_3.png';
import J_forth from './imgs/jumper_4.png';
import coming from './imgs/coming_soon.png';

const projects = [
    {
        img: [bd_first,bd_second, bd_thrid],
        langs: ["Node.JS", "EJS", "CSS", "Python"],
        title: "Video Game Dashboard",
        disc: "An analytics dashbaord created to view web-scraped video game data.",
        link: "#project1",
        glink: "https://github.com/macObl/Game_Dashboard"
    },
    {
        img: [MF_first, MF_second],
        langs: ["JS", "HTML"],
        title: "Escape MF Dooms Maze",
        disc: "Old school DOOM inspired video game made entirly with JavaScript and HTML",
        link: "/home/doom", 
        glink: "https://github.com/macObl/MF_DOOMZ_Maze"
    },
    {
        img: [F_first, F_second, F_thrid, F_forth],
        langs: ["Python", "Pygames"],
        title: "Impetum",
        disc: "Fighting video game inspired by fighting combat games like Mortal Kombat and Street Fighter, built using Python/ Pygames",
        link: "blank",
        glink: "https://github.com/macObl/Impetum"
    },
    {
        img: [J_first, J_second, J_thrid, J_forth],
        langs: ["Python", "Pygames"],
        title: "Temple Jumper",
        disc: "Fun 2D platformer video game that was also built using Python/ Pygames",
        link: "blank",
        glink: "https://github.com/macObl/Temple_Jumper"
    },
    {
        img: [coming],
        langs: ["COMING SOON"],
        title: "COMING SOON",
        disc: "Currently working on a Pixel sorting web app",
        link: "blank",
        glink: "blank"
    },
];

const Projects = () => {
    return <>
        <div className='px-5 max-w-[1560px] mx-auto mt-20 py-10' id='project'>
            <div className=''>
                <div className=' text-white font-medium text-[32px] flex items-center gap-2'>
                    <div className=''> 
                        <span className='text-[#F5915C]'>#</span>projects
                    </div>
                    <div className='line w-2/3 h-px bg-[#F5915C]'></div>
                </div>
                <div className='flex flex-wrap justify-between gap-4 my-12'>
                    {projects.map(({img, langs, title, disc, link, glink})=> {
                        return <>
                        <Project_card  img = {img} langs = {langs} title = {title} disc = {disc} link={link}  glink={glink} />
                        </>
                    })}
                </div>
            </div>
        </div>
    </>
}

export default Projects