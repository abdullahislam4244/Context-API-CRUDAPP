import {useState} from 'react';
import EventContext from './Context';

const Provider = ({children}) => {

    const [state, setstate] = useState({events:[ 
        
        {

        id:'1',
        title:'A First Meetup',
        image : 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address : 'Some address 5,12345 Some City',
        description : 'This is first meetup'    },
    
    
     ] })

     const addNewEvent = (eventobj) => {

        const tempState = {...state};
        eventobj['id'] = parseInt(tempState.events[tempState.events.length-1].id) + 1;

        tempState.events.push(eventobj);
      setstate ({...tempState});
     }
     const updateState = (obj) => {
        
         setstate ({events:[...obj]});
     }

     const Providervalues = {
         ...state,
         addNewEvent,
         updateState

     }

    return (

    <EventContext.Provider value = {Providervalues} >

        {children}
      
    </EventContext.Provider>
    
    )
}
export default Provider;