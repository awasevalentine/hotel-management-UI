import { Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import PageHeader from '../../components/header/header';
import { CustomSpinner } from '../../components/spinner/custom_spinner';
// import { ChevronRightIcon } from '@chakra-ui/icons';
import { GoChevronRight } from 'react-icons/go';
import './home.css'

const Home = () => {

    const [loaded, setStatus] = useState(true);


    window.onload = () => {
        setTimeout(()=>{
            setStatus(false);
        },2000)
    }

useEffect(()=>{

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
        

        {/* Carousel display on the first section */}
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" ride='false' data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active bullet" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" class="bullet"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" class="bullet"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <Image src={require('../../assets/img/hero/sabel-blanco.jpg')} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-sm-blockd-md-block">
                    <h1 data-animation="fadeInUp" data-delay=".4s">Barrondy luxury hotel</h1>
                    <h3 data-animation="fadeInDown" data-delay=".4s">~ Comfort ~</h3>
                </div>
                </div>
                <div class="carousel-item">
                <img src={require('../../assets/img/hero/h1_hero.jpg')} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-sm-block d-md-block">
                <h1 data-animation="fadeInUp" data-delay=".4s">Hotel with a difference</h1>
                    <h3 data-animation="fadeInDown" data-delay=".4s">~ Exquisite ~</h3>
                </div>
                </div>
                <div class="carousel-item">
                <img src={require('../../assets/img/hero/capricious-wayfarer.jpg')} class="d-block w-100 h-50" alt="..." />
                <div class="carousel-caption d-sm-block d-md-block">
                <h1 data-animation="fadeInUp" data-delay=".4s">Making your dream</h1>
                    <h3 data-animation="fadeInDown" data-delay=".4s">~ Perfection ~</h3>
                </div>
                </div>
            </div>
        </div>
        {/* End of Carousel display on first section */}

        {/* About our hotel */}
        <section class="make-customer-area customar-padding fix">
            <div class="container-fluid p-0">
                <div class="row">
                    <div class="col-xl-5 col-lg-6">
                        <div class="customer-img mb-120">
                            <Image src={require('../../assets/img/customer/customar1.png')} class="customar-img1" alt="" />
                            <Image  src={require('../../assets/img/customer/customar2.png')} class="customar-img2" alt="" />
                            <div class="service-experience heartbeat">
                                <h3>25 Years of Service<br />Experience</h3>
                            </div>
                        </div>
                    </div>
                    <div class=" col-xl-4 col-lg-4">
                        <div class="customer-caption">
                            <span>About our company</span>
                            <h2>Make the customer the hero of your story</h2>
                            <div class="caption-details">
                                <p class="pera-dtails">Lorem ipsum dolor sit amet, consectetur adipisic- ing elit, sed
                                    do eiusmod tempor inc. </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                </p>
                                <a href="/" class="btn more-btn1">Learn More <GoChevronRight /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End of about our hotel */}


        {/* Our dinning */}
        <div class="dining-area dining-padding-top">
            {/* Single Left img */}
            <div class="single-dining-area left-img">
                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-lg-8 col-md-8">
                            <div class="dining-caption">
                                <span>Our resturent</span>
                                <h3>Dining & Drinks</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br /> tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis
                                    nostrud.</p>
                                <a href="#" class="btn border-btn">Learn More <i class="ti-angle-right"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- single Right img --> */}
            <div class="single-dining-area right-img">
                <div class="container">
                    <div class="row justify-content-start">
                        <div class="col-lg-8 col-md-8">
                            <div class="dining-caption text-right">
                                <span>Our Pool</span>
                                <h3>Swimming Pool</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br/> tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis
                                    nostrud.</p>
                                <a href="#" class="btn border-btn">Learn More <i class="ti-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Dining End --> */}



        </>

     );
}
 
export default Home;