import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import {EventCalendar} from "../components/EventCalendar";
import {EventForm} from "../components/EventForm";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {createEvent, fetchEvents, fetchGuests} from "../store/reducers/event/action-creators";
import {IEvent} from "../models/models";

export const Event: FC = () => {
    const dispatch = useAppDispatch();
    const { guests, events } = useAppSelector(state => state.eventSlice);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const { user } = useAppSelector(state => state.authSlice);

    useEffect(() => {
        dispatch(fetchGuests());
        if (user) {
            dispatch(fetchEvents(user.username));
        }
    }, [dispatch]);

    const addNewEvent = (event: IEvent) => {
        dispatch(createEvent(event));
        setModalVisible(false);
    }

    return (
        <Layout>
            <EventCalendar events={events} />
            <Row justify="center" style={{ margin: '10px 0'}}>
                <Button onClick={() => setModalVisible(true)}>Add event</Button>
            </Row>
            <Modal
                title="Add event"
                open={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm
                    guests={guests}
                    submit={addNewEvent}
                />
            </Modal>
        </Layout>
    );
};
