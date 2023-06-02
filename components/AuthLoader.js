import { useEffect, useState } from "react";
// import LoadingGIF from "../assets/images/loading.gif";
import {useRouter} from "next/router";
import {Col, Row, Skeleton} from "antd";
const AuthLoader = ({ path = "" })=> {
    // state
    const [count, setCount] = useState(3);
    // hooks
    const router = useRouter();


    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000);
        // redirect once count is equal to 0
        count === 0 &&
        /*navigate(`/${path}`, {
            state: location.pathname,
        });*/
        router.push('/login')
        // cleanup
        return () => clearInterval(interval);
    }, [count]);

    return (
        <div style={{ zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white!important', height: '100vh', width: '100%', position: "absolute", left: '0px!important'}}>
            <Skeleton active style={{width: '700px'}} />
        </div>

    );
}

export default AuthLoader;