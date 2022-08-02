
const ConfirmBooking = () => {


    return (
        <>
        <div class="container">
        <form action="/status" method="post">
            <div class="row">
                <div class="col-12 mt-5">

                    {/* <h2 class="text-center text-primary">Categhory: <%=name%></h2>
                    <h2 class="text-center text-success">Room Type: <%=type%></h2>
                    <h2 class="text-center text-info">Room Cost: <%=cost%></h2> */}
                        <h2 class="text-center text-primary">Category: </h2>
                        <h2 class="text-center text-success">Room Type: </h2>
                        <h2 class="text-center text-info">Room Cost: </h2>
                    </div>
                    <div class="col-lg-4 col-md-12 col-md-12 position">
                    <input type="hidden" name="name" value="<%=name%>" />
                    <input type="hidden" name="type" value="<%=type%>" />
                    <input type="hidden" name="cost" value="<%=cost%>" />

                            <div class="boking-tittle text-center mt-3 mb-3">
                                <span> Booking Date:</span>
                                <input type="date" name="date" class="form-control text-center" required />
                            </div>

                            <div class="boking-tittle text-center mt-3 mb-3">
                                <span> Room Want:</span>
                                <input name="roomWant"  type="number" class="form-control" required placeholder="0" />
                            </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <input type="submit" class="btn btn-info mt-3 mb-5 positionbtn" value="Confirm Booking" />
                    </div>
            </div>
            </form>
        </div>
        </>
    )
}

export default ConfirmBooking