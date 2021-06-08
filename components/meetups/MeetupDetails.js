
import {useRouter} from 'next/router';
import styles from './MeetupDetails.module.css';
import EventContext from '../../store/Context';
import {useContext} from 'react';
const MeetupDetails = ({foo}) => {

    const {events} = useContext(EventContext);
    
    const router = useRouter();
    
    
    const meetDetails =  events.find(event=> {
        return event.id === router?.query?.meetupId;
    })

    
    
    
    return (
<div className={styles.card}>
        <img src={meetDetails.image} />
        <h1>{meetDetails.title}</h1>
        <p>{meetDetails.description}</p>
  </div>      
        )

}

export default MeetupDetails;
