import React from 'react'
import dish1 from "../assets/dish-1.png"
import dish2 from "../assets/dish-2.png"
import dish3 from "../assets/dish-3.png"
import dish4 from "../assets/dish-4.png"
import dish5 from "../assets/dish-5.png"
import dish6 from "../assets/dish-6.png"
function Dishes() {
    return (
        <>
                        <section class="dishes" id="dishes">

                                    <h3 class="sub-heading"> our dishes </h3>
                                    <h1 class="heading"> popular dishes </h1>

                                           <div class="box-container">

                                                    <div class="box">
                                                        <a href="#" class="fas fa-heart"></a>
                                                        <a href="#" class="fas fa-eye"></a>
                                                        <img src={dish1} alt=""/>
                                                        <h3>tasty food</h3>
                                                        <div class="stars">
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star-half-alt"></i>
                                                        </div>
                                                        <span>$15.99</span>
                                                        <a href="#" class="btn">add to cart</a>
                                                    </div>

                                                    <div class="box">
                                                        <a href="#" class="fas fa-heart"></a>
                                                        <a href="#" class="fas fa-eye"></a>
                                                        <img src={dish2} alt=""/>
                                                        <h3>tasty food</h3>
                                                        <div class="stars">
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star-half-alt"></i>
                                                        </div>
                                                        <span>$15.99</span>
                                                        <a href="#" class="btn">add to cart</a>
                                                    </div>

                                                    <div class="box">
                                                        <a href="#" class="fas fa-heart"></a>
                                                        <a href="#" class="fas fa-eye"></a>
                                                        <img src={dish3} alt=""/>
                                                        <h3>tasty food</h3>
                                                        <div class="stars">
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star-half-alt"></i>
                                                        </div>
                                                        <span>$15.99</span>
                                                        <a href="#" class="btn">add to cart</a>
                                                    </div>

                                                    <div class="box">
                                                        <a href="#" class="fas fa-heart"></a>
                                                        <a href="#" class="fas fa-eye"></a>
                                                        <img src={dish4} alt=""/>
                                                        <h3>tasty food</h3>
                                                        <div class="stars">
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star-half-alt"></i>
                                                        </div>
                                                        <span>$15.99</span>
                                                        <a href="#" class="btn">add to cart</a>
                                                    </div>

                                                    <div class="box">
                                                        <a href="#" class="fas fa-heart"></a>
                                                        <a href="#" class="fas fa-eye"></a>
                                                        <img src={dish5} alt=""/>
                                                        <h3>tasty food</h3>
                                                        <div class="stars">
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star-half-alt"></i>
                                                        </div>
                                                        <span>$15.99</span>
                                                        <a href="#" class="btn">add to cart</a>
                                                    </div>

                                                    <div class="box">
                                                        <a href="#" class="fas fa-heart"></a>
                                                        <a href="#" class="fas fa-eye"></a>
                                                        <img src={dish6} alt=""/>
                                                        <h3>tasty food</h3>
                                                        <div class="stars">
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star-half-alt"></i>
                                                        </div>
                                                        <span>$15.99</span>
                                                        <a href="#" class="btn">add to cart</a>
                                                    </div>

                                        </div>

                        </section>


        </>
    )
}

export default Dishes
