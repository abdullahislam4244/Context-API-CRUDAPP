import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import {useRouter} from 'next/router';
import {useContext} from 'react';
import EventContext from '../../store/Context';
function MeetupItem(props) {

  const router = useRouter();

  const eventProvider = useContext(EventContext);


  


  const showDetailsHandler = () => {

    router.push('/' + props.id);
    }

    const DetailEventHandler = () => {
      console.log(props.id);
      console.log(eventProvider);
      const events = [...eventProvider.events].filter(event=> {
        return event.id !== props.id;
      });
      console.log(events);
      
      eventProvider.updateState(events);
      
    }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick = {showDetailsHandler}>Show Details</button>
          <button onClick = {DetailEventHandler}>Delete Event</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
