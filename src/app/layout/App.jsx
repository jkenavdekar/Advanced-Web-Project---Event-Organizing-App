import React from 'react';
import { Route, useLocation } from 'react-router';
import { Container } from 'semantic-ui-react';


import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetails/EventDetailedPage';
import EventForm from '../../features/events/EventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';
import Sanbox from '../../features/SandBox/Sanbox';
import ModalManager from '../common/modals/ModalManager';

function App() {

  const {key} = useLocation();

  return (
    <>
      <ModalManager/>
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (

        <>
          <NavBar />
          <Container className='main'>
            <Route exact path='/events' component={EventDashboard} />
            <Route exact path='/sanbox' component={Sanbox} />
            <Route path='/events/:id' component={EventDetailedPage} />
            <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key} />
        </Container>
        
        </>
      )} />

    </>
  );
}

export default App;