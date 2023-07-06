import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  const fetch=useFetcher();
  const{state,data}=fetch;
  useEffect(()=>{
    if(state==='idle'&& data && data.message){
      window.alert(data.message);
    }
  },[data,state]) 
  
  return ( 
    <fetch.Form method="POST" action='/newsletter' className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetch.Form>
  );
}

export default NewsletterSignup;