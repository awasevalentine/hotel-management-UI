import { BiPhone, BiHome } from 'react-icons/bi'
import '../contact/contact.css'

const Contact = () => {


    return (

        <>
            <section class="contact-section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="contact-title">About Us Page</h2>
                    </div>
                    <div class="col-lg-8">
                      <h3>Name: Valentine Bassey</h3>
                      <p>Address: No. 7 Osoba Close, off Asset Street</p>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-home"></i></span>
                            <div class="media-body">
                                <h3><BiHome style={{display: 'inline-flex', fontSize: '20px'}}/> Address: No. 7 Osoba Close, off Asset Street. Lagos Nigeria.</h3>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                            <div class="media-body">
                                <h3 className='phone'><BiPhone style={{display: 'inline-flex', fontSize: '20px'}} /> +2348100114014 || +2348162305224</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-email"></i></span>
                            <div class="media-body">
                                <h3>awasevalentine@gmail.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}


export default Contact