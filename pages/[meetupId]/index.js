import MeetupDetails from '../../components/meetups/MeetupDetails';



function MeetupDetail () {
console.log("parent");
    return (
        <MeetupDetails  foo={'f00'}/>
    )

}

export default MeetupDetail;

MeetupDetail.getInitialProps = async ({ query }) => {
   const {meetupId} = query;
    return {
       props: {},
      };
}