import { useEffect, useState } from 'react';
import { PaystackButton } from 'react-paystack';
import '../booking/booking.css';



const Booking = () => {
    const [showDaysInHotel, setShowDaysInHotel] = useState(false);
    const [daysInHotel, setDaysInHotel] = useState(0);
    var totalAmount = 0;

  
    const [roomQuantity, setRoomQuantity] = useState(1);
    const [booking, setBooking] = useState({

        category: '',
        roomType: '',
        checkInDate: '',
        checkOutDate: '',
        email: '',
        phone: '',
        amount: totalAmount,
        name: '',
        // roomQuantity: 1

    })

    
    const changeText = (e) =>{
        setBooking((prevData)=>({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const {
            email, phone, name, amount, checkInDate, 
            checkOutDate, roomType, category
        } = booking;

        const roomCategory = ["Luxury", "Economy", "Business"]
        const roomTypeValue = ["Single", "Delux", "Double"]

        switch(category){
            case "Luxury":
                switch (roomType) {
                    case "Single":
                        totalAmount = 25200 *daysInHotel* roomQuantity
                        break;
                    case "Delux":
                        totalAmount = 32400  *daysInHotel* roomQuantity
                        break;
                    case "Double":
                    totalAmount = 40800 *daysInHotel* roomQuantity
                        break;
                    default:
                        totalAmount = 0
                        break;
                }
                break;
            case "Economy":
                switch (roomType) {
                    case "Single":
                        totalAmount = 17200 *daysInHotel* roomQuantity
                        break;
                    case "Delux":
                        totalAmount = 24400 *daysInHotel* roomQuantity
                        break;
                    case "Double":
                        totalAmount = 31600 *daysInHotel* roomQuantity
                        break;
                    default:
                        totalAmount = 0
                        break;
        }
                break;
            case "Business":
                switch (roomType) {
                    case "Single":
                        totalAmount = 35200 *daysInHotel* roomQuantity
                        break;
                    case "Delux":
                        totalAmount = 40400 *daysInHotel* roomQuantity
                        break;
                    case "Double":
                        totalAmount = 58800 *daysInHotel* roomQuantity
                        break;
                    default:
                        totalAmount = 0
                        break;
                }
                break;
            default:
                totalAmount = 0
                break;
        }


    const componentProps = {
        email,
        amount: totalAmount+"00",
        metadata: {
          name,
          phone,
        },
        
        publicKey: process.env.REACT_APP_PUBLICKEY,
        text: "Pay Now",
        
        onSuccess: (e) =>{
            const {status, message} = e;
            if(status === "success"){
                console.log("This is the user data", booking)
            }
        //   alert("Thanks for doing business with us! Come back soon!!")
        //   console.log("Returned from paystack", e)
        },
        onClose: () =>{
        console.log("This is the component", componentProps);
      alert("Wait! Don't leave :(")

        }
      }



//Mehod to handle the payment from auto submitting when the user clicks on the button
    const bookReservation = (e) => {
        e.preventDefault();
        // console.log("The booking details ", booking)
    }


    useEffect(() => {

        let daysInHotel = (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24);
        if(daysInHotel > 0 ){
            setDaysInHotel(daysInHotel);
            setShowDaysInHotel(true)
        }
    })



    return (

        <>
            <div className="booking-wrapper container-fluid">
            <h2 className='booking-header text-center mb-3'>Booking Form</h2>
            <div className='days-in-hotel'>
                { showDaysInHotel &&
                    <h3 className='text-center'>
                        You will be spending <span className='days_wrapper'>
                            {daysInHotel}</span> days in our hotel
                    </h3>
                }
            </div>
                <div className="booking-form">
                <form className="form-main-wrapper" onSubmit={bookReservation}>

                    <div className="row form-wrapper">
                        <div className="col-sm-12 col-md-6 form-fields">
                            <label htmlFor="category">Category</label>
                                <select class="form-select form-control" name='category' id='category'
                                onChange={changeText}
                                >
                                <option selected>Choose...</option>
                                    {
                                    roomCategory.map((rooms,index) =>(
                                        <>
                                        <span key={index}> </span>
                                        <option  value={rooms}>{rooms}</option>
                                        </>
                                        ))
                                    }

                                </select>
                        </div>
                        <div className="col-sm-12 col-md-6 form-fields">
                            <label htmlFor="room-type">Room Type</label>
                            <select class="form-select form-control" name='roomType' id='roomType' 
                                onChange={changeText}
                                >
                            <option selected>Choose...</option>
                            {
                                roomTypeValue.map((res, index) =>(
                                    <>
                                        <span key={index}> </span>

                                    <option value={res}>{res}</option>
                                    </>
                                ))
                            }
                            </select>
                        </div>
                        <div className="col-sm-12 col-md-6 form-fields">
                            <label htmlFor="check-in-date">Check In Date</label>
                            <input type="date" name="checkInDate" id="checkInDate" className='form-control' 
                                onChange={changeText}
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 form-fields">
                            <label htmlFor="check-in-date">Check Out Date</label>
                            <input type="date" name="checkOutDate" id="checkOutDate" className='form-control' 
                            onChange={changeText}
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 form-fields">
                            <label htmlFor='room_quantity'>Room Quantity</label>
                            <input type="number" className='form-control' name='roomQuantity' id='roomQuantity' 
                                onChange={(e) => setRoomQuantity(e.target.value)}
                                placeholder='Enter the Quantity of Room Needed' 
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 form-fields">
                            <label htmlFor='name'>Name</label>
                            <input type='text' className='form-control' name='name' id='name' 
                                onChange={changeText}
                                placeholder='Enter your Name' 
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 form-fields">
                            <label htmlFor='email'>Email</label>
                            <input type='email' className='form-control' name='email' id='email' 
                                onChange={changeText}
                                placeholder='Enter your Email Address' 
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 form-fields">
                        <label htmlFor='email'>Phone</label>
                            <input type='tel' className='form-control' name='phone' id='phone' 
                                onChange={changeText}
                                placeholder='Enter your Phone Number'
                            />
                        </div>
                        <div className='total-wrapper mt-4'>
                            <p className='text-center'>Total: ₦{totalAmount} </p>
                        </div>
                        <div className='payment-btn'>
                            {/* <button type='button' onClick={bookReservation} className='btn btn-warm'>Make Payment</button> */}
                            <PaystackButton className="paystack-button" {...componentProps} />
                        
                        </div>
                    </div>
                </form>
                </div>

            </div>
        </>
    )
}

export default Booking