import { Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import PageHeader from '../../components/header/header';
import { CustomSpinner } from '../../components/spinner/custom_spinner';
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

        </>

     );
}
 
export default Home;