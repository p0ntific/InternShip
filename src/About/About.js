import React from 'react';
import style from './About.module.scss'
import Nav from "../Nav/Nav";
import aboutImg from '../images/aboutMain.jpg'

const About = () => {
    return (
        <div className={style.about}>
            <Nav/>
            <div className={style.block_wrapper}>
                <div className={style.block}>
                    <div className={style.main_img}>
                        <img src={aboutImg} alt=""/>
                    </div>
                    <div>
                        <h1 className={style.heading}>Немного О Нас</h1>
                        <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                            assumenda consectetur consequatur cumque deserunt dolores id libero magni, repudiandae
                            temporibus! Adipisci asperiores assumenda at autem consequuntur debitis deserunt dolorem
                            eaque error fugiat magni minima molestiae, necessitatibus possimus qui reiciendis sapiente
                            vel. Beatae cumque delectus dolore quidem ratione ullam voluptatem voluptatum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;