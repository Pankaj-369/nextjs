import React from 'react'
import PageContent from '../components/pagecontent'
import {useRouteError} from 'react-router-dom'
import { Fragment } from 'react';
import MainNavigation from '../components/MainNavigation';

const Error = () => {

  const error=useRouteError();

  let title='An error occured!';
  let message='something went wrong!!';

if(error.status===500){
  message=error.data.message;
}
if(error.status===404){
  title='Not found..!';
  message='Could not find resource or page...';
}

  return (
    <Fragment>
    <MainNavigation/>
    <PageContent title={title}>{message}</PageContent>
    </Fragment>
  )
}

export default Error