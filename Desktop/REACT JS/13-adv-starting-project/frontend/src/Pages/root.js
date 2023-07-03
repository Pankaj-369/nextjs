import React from 'react'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const Root = () => {
  // const nav=useNavigation();
  return (
    <Fragment>
    <MainNavigation/>
    {/*nav.state==='loading' && <p>Loading...</p>*/}
    <main>
    <Outlet/>
    </main>
    </Fragment>
  )
}

export default Root