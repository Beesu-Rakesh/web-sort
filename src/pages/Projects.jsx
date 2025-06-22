import ProjectsHeroBg from '../assets/ProjectsHeroBg.png';
import ProjectsBg1 from '../assets/ProjectsBg1.png'
import ProjectsBg2 from '../assets/ProjectsBg2.png'
import ProjectsBg3 from '../assets/ProjectsBg3.png';
import uiux from '../assets/uiux.jpg';
import WebDesign from '../assets/WebDesign.png';
import AppDevelopment from '../assets/AppDevelopment.png';
import ProjectWorkImg from '../assets/ProjectWorkImg.png';
import BulbImg from '../assets/BulbImg.png';
import "/src/App.css";

const Projects = () => {
    return (
        <>
        <main>
        <div className='bg-cover w-full hero-bg h-screen' style={{ backgroundImage: `url(${ProjectsHeroBg})`}}>
                <div className='hero-meta'>
                    <h1 className='hero-heading'>Digitizing Ideas with Clean Code & Modern Design</h1>
                    <p className='hero-description'>At Websort, we turn digital visions into reality with expert web and app development, UI/UX design, and digital marketing. Based in Bangalore, we craft responsive websites, innovative mobile apps, and drive results through SEO, PPC, and social media strategies.</p>
                    <div className="flex justify-start items-center gap-4 mt-1">
                        <button className='contact-btn'>Contact Us</button>
                        <button className='knowmore-btn'>Know More</button>
                    </div>
                </div>
        </div>
        <div className='project-about-us flex flex-row' style={{ backgroundImage: `url(${ProjectsBg2})`}}>
            <div>
                <h2 className='project-about-h2'>About Us</h2>
                <h1 className='project-about-h1'>Where Innovation Meets Execution</h1>
            </div>
            <div>
                <p className='projects-about-description'>Websort builds websites, apps, and digital marketing solutions to help you grow online. Based in Bangalore, we focus on smart design, strong tech, and real results.We specialize in web development, mobile app development, UI/UX design, and digital marketing—delivering responsive websites, high-performance Android/iOS apps, and visually engaging interfaces. Our digital marketing expertise spans SEO, PPC, social media marketing, and content creation, helping businesses grow and connect with their ideal audience.</p>
                <button className='knowmore-btn'>Know More</button>
            </div>
        </div>
        <div className="bg-cover" style={{ backgroundImage: `url(${ProjectsBg1})`}}>
            <h1 className='services-main'>Our Services</h1>
            <div className='project-images'>
                <img src={uiux} alt="uiux-image" className='project-services-image'/>
                <img src={WebDesign} alt="uiux-image" className='project-services-image'/>
                <img src={AppDevelopment} alt="uiux-image" className='project-services-image'/>
            </div>
        </div>
        <div className='bg-cover projectspageimg' style={{ backgroundImage: `url(${ProjectsBg3})`}}>
          <div className='projects-meta3'>
            <h1 className='project-heading3'>See Our Work in Web Design & Development</h1>
            <p className='hero-description'>We specialize in building responsive, user-friendly websites tailored to client needs. Take a look at our recent projects to see how design and functionality come together.</p>
            <div className="flex justify-start items-center gap-4 mt-1">
                <button className='knowmore-btn'>Know More</button>
            </div>
          </div>
          <img src={ProjectWorkImg}/>
        </div>
        <div className='bg-[#150C11] flex flex-row justify-evenly items-center p-5'>
          <div className='projects-meta3'>
            <h1 className='project-heading3'>Why We Stand Out</h1>
            <p className='hero-description'>At Websort, we don’t just build digital products — we build careers. By joining our team, you become part of a creative and collaborative environment that values innovation, continuous learning, and personal growth.</p>
          </div>
          <img src={BulbImg} className='bulb-img'/>
        </div>
        </main>
        </>
    )
}

export default Projects;