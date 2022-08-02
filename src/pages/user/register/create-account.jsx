import { Input } from "@chakra-ui/react"
import '../register/create-account.css'


const Register  = () => {

    return (
        <>
        <div className="row content-wrapper">
            <div class="col-lg-4 col-md-6 col-sm-12 text-center position">
                    <form action="/createaccount" method="POST">
                        {/* <label class="mt-2">User Name</label> */}
                        <input type="text" name="name" class="form-control mt-4" placeholder="User Name" required />
                        {/* <label class="mt-2">Email Address</label> */}
                        <input type="text" name="mail" class="form-control mt-4" placeholder="Email Address" required />
                        {/* <label class="mt-2">Phone number</label> */}
                        <input type="text" name="phone" class="form-control mt-4" placeholder="Phone number" required />
                        {/* <label class="mt-2">Password</label> */}
                        <input type="password" name="pass" class="form-control mt-4" placeholder="password" required />
                        {/* <label class="mt-2">Re-enter Password</label> */}
                        <input type="password" name="con_pass" class="form-control mt-4" placeholder="password" required />

                        <input type="submit" value="Create Account" class="btn btn-create btn-lg mt-3" />
                    </form>
            </div>
        </div>
        </>
    )
}

export default Register