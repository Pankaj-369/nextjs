import React, { Fragment } from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'
import { MongoClient, ObjectId } from 'mongodb'
import Head from 'next/head'

const details = (props) => {
  return (
    <Fragment>
    <Head>
    <title>{props.meetups.title}</title>
    </Head>
    <meta
    name='description'
    content={props.meetups.description}>
    </meta>
    <MeetupDetail
    image={props.meetups.image}
    title={props.meetups.title}
    address={props.meetups.address}
    description={props.meetups.description}
    />
    </Fragment>
  )
}

export default details

export async function getStaticPaths(){

  const client = await MongoClient.connect(
    "mongodb+srv://pankajkandpal24:1234@cluster0.l3uwaim.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupcollection = db.collection("meetups");

  const meetups=await meetupcollection.find({},{_id:1}).toArray();

  client.close();

  return{
    fallback:false,
    paths: meetups.map((meetup)=>({
      params:{
        meetupid:meetup._id.toString(),
      },
    }))
  }
}

export async function getStaticProps(context){

  const id=context.params.meetupid

  const client = await MongoClient.connect(
    "mongodb+srv://pankajkandpal24:1234@cluster0.l3uwaim.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db(); 
  const meetupcollection = db.collection("meetups");

  const meetup= await meetupcollection.findOne({_id: new ObjectId(id)});

return{
  props:{
    meetups:{
      id:meetup._id.toString(),
      title:meetup.title,
      image:meetup.image,
      address:meetup.address,
      description:meetup.description
    }
  }
}
}