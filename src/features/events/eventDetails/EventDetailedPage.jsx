import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Loader } from 'semantic-ui-react';
import { listenToSingleEventFromFirestore } from '../../../app/firestore/firestoreService';
import useFirestoreDoc from '../../../app/hooks/useFirestoreDoc';
import { listenToEvents } from '../eventActions';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';

export default function EventDetailedPage({match}) {

    const dispatch = useDispatch();

    const event = useSelector(state => state.event.events.find(e => e.id === match.params.id));

    const { loading, error } = useSelector((state) => state.async);

    useFirestoreDoc({
        query: () => listenToSingleEventFromFirestore(match.params.id),
        data: (event) => dispatch(listenToEvents([event])),
        deps: [match.params.id, dispatch],
      });

    if(loading || !event) return <Loader content='Loading your event...' /> 

    if (error) return <Loader content='Cannot find the document!' /> 

    return(
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader event={event} />
                <EventDetailedInfo event={event} />
                {/* <EventDetailedChat /> */}
            </Grid.Column>

            <Grid.Column width={6}>
                <EventDetailedSidebar attendees={event?.attendees} />
            </Grid.Column>
        </Grid>
    )
}