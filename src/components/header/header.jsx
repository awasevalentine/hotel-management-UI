import { Image } from '@chakra-ui/react';
import { GoThreeBars } from 'react-icons/go';
import './header.css'

const PageHeader = () => {

    var user= ''
    return ( 
        <header>
            <nav class="navbar navbar-expand-lg sticky-top">
            <div class="container">
                <a class="navbar-brand" href="#"><Image src={require('../../assets/img/logo/hotel.png')}></Image></a>
                <a class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span><GoThreeBars/></span>
                </a>
                <div class="collapse navbar-collapse justify-content-md-end " id="navbarTogglerDemo02">
                <ul class="navbar-nav justify-content-md-end mb-2 mb-lg-0 " style={{paddingRight: '1.6rem'}} >
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    
                    </li>
                    {user ? (
                        <>
                            <li class="nav-item"><a class="nav-link" href="/category">Category</a></li>
                            <li class="nav-item"><a class="nav-link" href="/showStatus">Status</a></li>
                            <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
                            <li class="nav-item"><a class="nav-link" href="/logout">Logout</a></li>
                        </>
                                             
                        ):(
                        <>
                            <li class="nav-item"><a class="nav-link" href="/login">Login</a></li>
                            <li class="nav-item"><a class="nav-link" href="/createaccount">Create Account</a></li>
                            <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
                        </>
                                            
                        )}
                </ul>
                </div>
            </div>
            </nav>
    </header>
     );
}
 
export default PageHeader;