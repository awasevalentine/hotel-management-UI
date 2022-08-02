
import '../login/login.css'

const Login = () => {


    return (
        <>
        <div className="row content-wrapper">
            <div class="col-lg-4 col-md-6 col-sm-12 text-center position">
                <form action="/login" method="POST">
                    <label className='mt-3'>User Mail Address</label>
                    <input type="text" name="mail" class="form-control" placeholder="Email" required />
                    <label className='mt-3'>Password</label>
                    <input type="password" name="pass" class="form-control" placeholder="Password" required />
                    <p><input type="checkbox" /> Remember Password</p>
                    <input type="submit" value="Login" class="btn btn-info btn-lg" />
                </form>
            </div>
        </div>
        </>
    )
}

export default Login