import React from 'react';
import hero from '../assets/hero.png';
import "/src/App.css";

const Hero = () => {
return (
    <>
    <div className='bg-cover w-full hero-bg h-screen' style={{ backgroundImage: `url(${hero})`}}>
        <div className='hero-meta'>
            <h1 className='hero-heading'>Digitizing Ideas with Clean Code & Modern Design</h1>
            <p className='hero-description'>At Websort, we turn digital visions into reality with expert web and app development, UI/UX design, and digital marketing. Based in Bangalore, we craft responsive websites, innovative mobile apps, and drive results through SEO, PPC, and social media strategies.</p>
            <div className="flex justify-start items-center gap-4 mt-1">
                <button className='contact-btn'>Contact Us</button>
                <button className='knowmore-btn'>Know More</button>
            </div>
        </div>
    </div>
    </>
)
};

export default Hero;