import Sketch from '../../Sketch';
import Navbar from '../navbar/Navbar';
import About from '../first_section/About';
import Projects from '../projects_section/Projects';
import Aboutme from '../about_section/Aboutme';
import Footer from '../footer/Footer';



function Home() {
  return (
       <div className='bg-[#1e203b] lg:bg-transparent'>
            <Sketch /> 
            <About />
            <Aboutme />
            <Projects />
            <Footer />
            <Navbar />
      </div>
  );
}

export default Home;