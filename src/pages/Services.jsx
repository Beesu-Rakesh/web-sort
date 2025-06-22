import uiux from '../assets/uiux.png';
import WebDesign from '../assets/EebDesign.png';
import AppDevelopment from '../assets/AppDevelopment.png';
import DigitalMarheting from '../assets/DigitalMarketing.png';
import ServicesBg from '../assets/ServicesBg.png';

import "/src/App.css";

const Services = () => {
    return (
        <>
      <main className="relative overflow-hidden bg-cover" style={{ backgroundImage: `url(${ServicesBg})`}}>
        <h1 className='services-main'>Our Services</h1>
        <div className='service-container'>
          <img src={uiux} alt="uiux-image" className='services-image'/>
          <div className='ml-12 mt-3 hidden md:block'>
            <h1 className='services-type'>UI/UX Design</h1>
            <p className='services-description mt-4'>We design clean, intuitive, and engaging user interfaces that enhance the overall user experience. From wireframes to final designs, our focus is on usability, consistency, and creating visually appealing digital products that users love.</p>
          </div>
        </div>
        <div className='service-container'>
          <img src={WebDesign} alt="WebDesign-image" className='services-image order-1 ml-12'/>
          <div className='mt-3 hidden md:block'>
            <h1 className='services-type'>Web Development</h1>
            <p className='services-description mt-4'>Planned and executed a digital marketing strategy including SEO, social media marketing, and content creation. Improved website traffic and engagement through targeted campaigns and regular performance tracking.</p>
          </div>
        </div>
        <div className='service-container'>
          <img src={AppDevelopment} alt="AppDevelopment-image" className='services-image'/>
          <div className='ml-12 mt-3 hidden md:block'>
            <h1 className='services-type'> App Development</h1>
            <p className='services-description mt-4'>Developed a cross-platform mobile app using Flutter for Android and iOS. The app allows users to browse services, make bookings, and receive real-time updates. Designed with a clean UI and smooth navigation to ensure a seamless user experience.</p>
          </div>
        </div>
        <div className='service-container'>
          <img src={DigitalMarheting} alt="DigitalMarketing-image" className='services-image order-1 ml-12'/>
          <div className='mt-3 hidden md:block'>
            <h1 className='services-type'>Digital Marketing</h1>
            <p className='services-description mt-4'>Designed and developed a responsive, SEO-optimized website using React. The site includes a modern UI, fast loading speed, and full mobile compatibility. Key features include service pages, contact form, and an easy-to-manage content structure to support client updates and user engagement.</p>
          </div>
        </div>
      </main>
        </>
    )
}

export default Services;