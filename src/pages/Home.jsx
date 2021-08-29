import React from 'react'
import homeimg1 from "../assets/home-img-1.png"
import homeimg2 from "../assets/home-img-2.png"
import homeimg3 from "../assets/home-img-3.png"
function Home() {
    return (
        <>
                 <section class="home" id="home">

                         <div class="swiper-container home-slider">

                                  <div class="swiper-wrapper wrapper">

                                                <div class="swiper-slide slide">
                                                    <div class="content">
                                                        <span>our special dish</span>
                                                        <h3>spicy noodles</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                                                        <a href="#" class="btn">order now</a>
                                                    </div>
                                                    <div class="image">
                                                        <img src={homeimg1} alt=""/>
                                                    </div>
                                                </div>

                                                    <div class="swiper-slide slide">
                                                        <div class="content">
                                                            <span>our special dish</span>
                                                            <h3>fried chicken</h3>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                                                            <a href="#" class="btn">order now</a>
                                                        </div>
                                                        <div class="image">
                                                             <img src={homeimg2} alt=""/>
                                                        </div>
                                                    </div>

                                                        <div class="swiper-slide slide">
                                                            <div class="content">
                                                                <span>our special dish</span>
                                                                <h3>hot pizza</h3>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                                                                <a href="#" class="btn">order now</a>
                                                            </div>
                                                            <div class="image">
                                                                  <img src={homeimg3} alt=""/>
                                                            </div>
                                                        </div>

                                             </div>

                                                 <div class="swiper-pagination"></div>

                                    </div>

                    </section>


        </>
    )
}

export default Home
