import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';
import Head from 'next/head'

const index = (props) => {
  return (
    <Fragment>
    <Head>
    <title>React Meetups</title>
    </Head>
    <meta
    name='description'
    content='browse a huge list of highly active react meetups!'>
    </meta>
    <MeetupList meetups={props.meetups}/>
    </Fragment>
  )
}

export async function getStaticProps(){

  const client=await MongoClient.connect('mongodb+srv://pankajkandpal24:1234@cluster0.l3uwaim.mongodb.net/meetups?retryWrites=true&w=majority')
  const db=client.db();
  const meetupcollection=db.collection('meetups')

  const meetups=await meetupcollection.find().toArray();
client.close();

return{
  props:{
    meetups:meetups.map((meetup)=>({
      title:meetup.title,
      image:meetup.image,
      address:meetup.address,
      id:meetup._id.toString()
    }))
  },
  revalidate:1
}
}

export default index;
