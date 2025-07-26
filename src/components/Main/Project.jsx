import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';


/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-18.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Certified Ethical Hacker (CEH)</h3>
                            <p>
                                Boston Institute of Analytics
                            </p>
                            <p className="tecnologias">
                                VAPT
                                <span> -</span> WEB
                                <span> -</span> API
                                <span> -</span> Network
                                <span> -</span> BurpSuite Pro
                            </p>
                            <a href="https://bia.bostoninstituteofanalytics.org/bia-certification/QklBXzQzMjhfQklB" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>OpenCreds</span></a>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./APIP.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>API Pententration Testing</h3>
                            <p>
                                APIsec University
                            </p>
                            <p className="tecnologias">
                                VAPT
                                <span> -</span> Postman
                                <span> -</span> SoapUI
                                <span> -</span> IDOR
                                <span> -</span> BurpSuite Pro
                            </p>
                            <a href="https://www.credly.com/badges/ef6c30b6-c620-4d57-a52b-c5c51a417682/public_url" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>OpenCreds</span></a>
                            
                        </div>
                    </SwiperSlide>
                     
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./cloud.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Multi-Cloud Red Teaming Analyst</h3>
                            <p>
                                CyberWarFare Labs
                            </p>
                            <p className="tecnologias">
                                VAPT
                                <span> -</span> AWS
                                <span> -</span> Azure
                                <span> -</span> GCP
                                <span> -</span> Cloud Pentesting
                            </p>
                            <a href="https://www.linkedin.com/in/rajkumar-prajapati-001427257/details/certifications/1748420184047/single-media-viewer/?profileId=ACoAAD8-sUEBOOj0CuCBD1TeumAQRRqBg7eMXLY" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>OpenCreds</span></a>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./cp.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>CyberSecurity Specialist</h3>
                            <p>
                                Boston Institute of Analytics
                            </p>
                            <p className="tecnologias">
                                Defence
                                <span> -</span> Network
                                <span> -</span> WEB
                                <span> -</span> API
                                <span> -</span> Cloud 
                            </p>
                            <a href="https://bia.bostoninstituteofanalytics.org/public/bia-certification/QklBXzQzMjdfQklB" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>OpenCreds</span></a>
                            
                        </div>
                    </SwiperSlide>
                     <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./web.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Web Development</h3>
                            <p>
                                Microsoft Learn Student Ambassadors
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS3
                                <span> -</span> JavaScript
                                <span> -</span> React
                                <span> -</span> Node.js 
                            </p>
                            <a href="https://www.cert.devtown.in/verify/25kiex" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>OpenCreds</span></a>
                            
                        </div>
                    </SwiperSlide>
                    
                    
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            {/* <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div> */}
        </section>

    )
};
export default React.memo(Project);