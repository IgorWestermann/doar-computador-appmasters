import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../../styles/Home.module.css'


interface StatusProps {
    alive: boolean
}

const ApiStatus: React.FC = () => {
    const [status, setStatus] = useState({} as StatusProps);

    useEffect(() => {
        const statusApi = async () => {
            const {data: res} = await axios.get('https://doar-computador-api.herokuapp.com'); 
            setStatus(res.alive);
            return console.log('debug: ', res.alive);
        } 
        statusApi();
    }, [])

    return (
        <>
            <h1>
                <span className={styles.highlight}>Doação</span> de computadores usados
            </h1>
            {
                status ? (
                    <p className="teste">
                        API Online
                    </p> 
                ) : (
                    <p className="teste">
                        API Offline
                    </p>)
            }
        </>
    );
    
}

export default ApiStatus;