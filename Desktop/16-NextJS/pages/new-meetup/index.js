import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import {useRouter} from 'next/router'
import Head from 'next/head'

function NewMeetupPage() {
  const route=useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response =await fetch('/api/new-meetup',{
      method:'POST',
      body:JSON.stringify(enteredMeetupData),
      headers:{
        'Content-Type':'application/json'
      }
    })

    const data=await response.json();
    console.log(data);

    route.push('./');
  }

  return(
    <Fragment>
    <Head>
   <title>React Meetups</title> 
    </Head>
    <meta
    name='description'
    content='creating new opportunities'>
    </meta>

   <NewMeetupForm onAddMeetup={addMeetupHandler} />
   </Fragment>
  )
}

export default NewMeetupPage;


















// import NewMeetupForm from '../../components/meetups/NewMeetupForm'

// const Meetups = () => {
//   function addmeetup(newmeetupdata){
//       console.log(newmeetupdata)
//   }
//   return (
//     <NewMeetupForm onAddMeetup={addmeetup}/>
//   )
// }


// export default Meetups