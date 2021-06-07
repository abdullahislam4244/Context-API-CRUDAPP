import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import EventContext from '../../store/Context';
import {useContext} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function NewMeetupPage() {
    const eventProvider = useContext(EventContext);

    function addMeetupHandler(enteredMeetupData) {
   eventProvider.addNewEvent(enteredMeetupData);
    toast("Event is added");
  
    }
    return (
    <>
    <ToastContainer />
    <NewMeetupForm onAddMeetup = {addMeetupHandler} />
   </>
    )
}

export default NewMeetupPage;