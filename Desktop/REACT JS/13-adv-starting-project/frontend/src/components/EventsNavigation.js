import { NavLink } from 'react-router-dom';
import classes from './EventsNavigation.module.css';

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={({isActive})=>isActive?classes.active:undefined} end to="">All Events</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive?classes.active:undefined} to="new">New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
