import { Fragment, Suspense } from 'react';
import { Await, defer, json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const {events}=useLoaderData();
  
  return (
    <Fragment>
    <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
    <Await resolve={events}>
     {(loadedevent)=><EventsList events={loadedevent} />}
    </Await>
    </Suspense>
      </Fragment>
  );
}
export default EventsPage;

const loadevent=async()=>{

    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
      // return {isError:true,message:'something went wrong!!!'}
      throw json( {message:'could not fetch events.'},{status:500})
    } 
    else {
      const resdata=await response.json();
      return resdata.events;
    }
}


export  const eloader=()=>{
return defer(
  {events:loadevent()}
)
}
