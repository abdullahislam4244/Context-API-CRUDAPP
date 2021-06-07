import MeetupItem from './MeetupItem';
import EventContext from '../../store/Context';
import {useContext} from 'react';
import classes from './MeetupList.module.css';

function MeetupList() {
  const {events} = useContext(EventContext);
  
  console.log("this one works smoothly");
  console.log(events);
  return (
    <ul className={classes.list}>
      {events.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
