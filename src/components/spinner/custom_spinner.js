import './custom_spinner.css'

export const CustomSpinner = () => {
    console.log("Indicate")
    return ( 
        <>
        <div id="preloader-active">
            <div class="preloader d-flex align-items-center justify-content-center">
                <div class="preloader-inner position-relative">
                    <div class="preloader-circle"></div>
                    <div class="preloader-img pere-text">
                        <strong> Barrondy</strong>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
// export CustomSpinner;