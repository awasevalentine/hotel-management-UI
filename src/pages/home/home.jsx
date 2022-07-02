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
        <       CustomSpinner />
            ):(
                <PageHeader />
            )
}

        </>
     );
}
 
export default Home;