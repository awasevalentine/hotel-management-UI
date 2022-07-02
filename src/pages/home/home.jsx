import { Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import PageHeader from '../../components/header/header';
import { CustomSpinner } from '../../components/spinner/custom_spinner';
import './home.css'

const Home = () => {

    const [loaded, setStatus] = useState(true);

useEffect(()=>{
    setTimeout(()=>{
        setStatus(false)
    },3000)

})
    return ( 
        <>
        { loaded ? (
                <CustomSpinner />
            ):(
            <div class="sticky-top">
                <PageHeader />
            </div>
            )}
        


        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active bullet" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" class="bullet"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" class="bullet"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <Image src={require('../../assets/img/hero/sabel-blanco.jpg')} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h1 data-animation="fadeInUp" data-delay=".4s">Barrondy luxury hotel</h1>
                    <h3 data-animation="fadeInDown" data-delay=".4s">~ Comfort ~</h3>
                </div>
                </div>
                <div class="carousel-item">
                <img src={require('../../assets/img/hero/h1_hero.jpg')} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                <h1 data-animation="fadeInUp" data-delay=".4s">Hotel with a difference</h1>
                    <h3 data-animation="fadeInDown" data-delay=".4s">~ Exquisite ~</h3>
                </div>
                </div>
                <div class="carousel-item">
                <img src={require('../../assets/img/hero/capricious-wayfarer.jpg')} class="d-block w-100 h-50" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                <h1 data-animation="fadeInUp" data-delay=".4s">Making your dream</h1>
                    <h3 data-animation="fadeInDown" data-delay=".4s">~ Perfection ~</h3>
                </div>
                </div>
            </div>
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> */}
        </div>





        {/* <!-- slider Area Start--> */}
        <div class="slider-area ">
            {/* <!-- Mobile Menu --> */}
            <div class="slider-active dot-style">
                <div class="single-slider  hero-overly slider-height d-flex align-items-center"
                    data-background="/assets/img/hero/h1_hero.jpg">
                    <div class="container">
                        <div class="row justify-content-center text-center">
                            <div class="col-xl-9">
                                <div class="h1-slider-caption">
                                    <h1 data-animation="fadeInUp" data-delay=".4s">top hotel in the city</h1>
                                    <h3 data-animation="fadeInDown" data-delay=".4s">~ Hotel ~</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="single-slider  hero-overly slider-height d-flex align-items-center"
                    data-background="/assets/img/hero/h1_hero.jpg">
                    <div class="container">
                        <div class="row justify-content-center text-center">
                            <div class="col-xl-9">
                                <div class="h1-slider-caption">
                                    <h1 data-animation="fadeInUp" data-delay=".4s">top hotel in the city</h1>
                                    <h3 data-animation="fadeInDown" data-delay=".4s">Hotel & Resourt</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="single-slider  hero-overly slider-height d-flex align-items-center"
                    data-background="/assets/img/hero/h1_hero.jpg">
                    <div class="container">
                        <div class="row justify-content-center text-center">
                            <div class="col-xl-9">
                                <div class="h1-slider-caption">
                                    <h1 data-animation="fadeInUp" data-delay=".4s">top hotel in the city</h1>
                                    <h3 data-animation="fadeInDown" data-delay=".4s">Hotel & Resourt</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- slider Area End--> */}




        </>
     );
}
 
export default Home;