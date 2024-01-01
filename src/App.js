import logo from './logo.svg';
import './App.css';
import EventsCalendar from './Events-calendar/events-calendar';
import { addDays } from 'date-fns';

function App() {
  return (
    <EventsCalendar events={[{date: addDays(new Date, 6), title: 'Edit a video'}, {date: addDays(new Date, 3), title: 'code'}, {date: addDays(new Date, 0), title: 'party'}]} />
  );
}

export default App;
