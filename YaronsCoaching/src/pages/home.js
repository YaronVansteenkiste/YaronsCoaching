import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import photo1 from "../images/photo1.png";
import photo4 from "../images/photo4.png";
import photo5 from "../images/photo5.png";
import { FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import gsap from 'gsap';


function Home() {
    const images = useMemo(() => [photo1, photo4, photo5], []);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const animateText = () => {
            const textElements = document.querySelectorAll('.text-to-reveal');
            gsap.from(textElements, {
              opacity: 0,
              x: -20,
              duration: 1,
              stagger: 0.1,
              ease: 'power1.inOut',
            });
          };

        animateText();
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % images.length;
            setCurrentIndex(nextIndex);
        }, 15000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex, images]);

    const customTransition = {
        type: "tween", 
        duration: 1, 
    };


    return (
        <div className="profile-section" id='home'>
            <div className="socials">
                <a href="https://www.instagram.com/yaronvsk/"
                    target="_blank" rel="noreferrer"><FaInstagram /></a>
                <a href="https://linkedin.com/in/yaron-vansteenkiste/"
                    target="_blank" rel="noreferrer"><FaDiscord /></a>
                <a href="https://github.com/YaronVansteenkiste"
                    target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
            <div className="profile-text">
                <div className="name text-to-reveal">
                    <h1>Yaron<br />Vansteenkiste</h1>
                </div>
                <div className="subtitle text-to-reveal">
                    <div className="dash"></div>
                    <h2>
                        Ontdek <em className="inline-word text-to-reveal">jouw</em> potentieel
                    </h2>
                </div>
                <div className="description text-to-reveal">
                    <p>
                        Met een passie voor fitness en bodybuilding die al jaren brandt,
                         ben ik klaar om al mijn kennis en de best bewaarde geheimen voor een perfect fysiek met jou te delen.
                         Jouw succes is mijn missie!
                    </p>
                </div>
                <div className="socials-horizontal">
                <a href="https://www.instagram.com/yaronvsk/"
                    target="_blank" rel="noreferrer"><FaInstagram /></a>
                <a href="https://linkedin.com/in/yaron-vansteenkiste/"
                    target="_blank" rel="noreferrer"><FaDiscord /></a>
                <a href="https://github.com/YaronVansteenkiste"
                    target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
                <div className="controls text-to-reveal">
                    <a href='#contact'>CONTACTEER MIJ</a>
                    <a href='#contact' className='email'>Of stuur mij een mail.</a>
                </div>
            </div>
            <div className="profile-photo text-to-reveal">
                <AnimatePresence>
                    <motion.img
                        key={images[currentIndex]} 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: -20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={customTransition}
                        src={images[currentIndex]}
                        alt="Profile"
                    />
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Home;
