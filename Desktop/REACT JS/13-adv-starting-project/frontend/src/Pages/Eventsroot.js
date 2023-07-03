import React from 'react'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import EventsNavigation from '../components/EventsNavigation'

const Eventsroot = () => {
  return (
    <Fragment>
    <EventsNavigation/>
    <Outlet/>
    </Fragment>
  )
}

export default Eventsroot