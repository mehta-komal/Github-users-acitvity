
import CreateEvent from './CreateEvent';
import PushEvent from './PushEvent';
import PublicEvent from './PublicEvent';


const eventType = {
    createEvent:CreateEvent,
    pushEvent:PushEvent,
    publicEvent:PublicEvent

}

const DisplayList = ({ data }) => {
  return (
    <>
      <div className='card-section'>
        {data.map((event, index) => {
            const EventCard = eventType[event.type];
            if(EventCard){
                return <EventCard key={index} event={event} />
            }
        
        })}
      </div>
    </>
  );
};

export default DisplayList;
