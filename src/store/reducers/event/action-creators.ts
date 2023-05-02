import {Dispatch} from "@reduxjs/toolkit";
import {eventSlice} from "./event";
import {IEvent, IUser} from "../../../models/models";
import api from "../../../api/api";

export const fetchGuests = () => async (dispatch: Dispatch) => {
    try {
        const response = await api.getUsers();
        dispatch(eventSlice.actions.setGuests(response.data));
    } catch (e) {
        console.log(e);
    }
}

export const createEvent = (event: IEvent) => async (dispatch: Dispatch) => {
    try {
        const events = localStorage.getItem('events') || [];
        let json = [] as IEvent[];
        if (typeof events === "string") {
            json = JSON.parse(events) as IEvent[];
        }
        json.push(event);
        dispatch(eventSlice.actions.setEvents(json));
        localStorage.setItem('events', JSON.stringify(json));
    } catch (e) {
        console.log(e);
    }
}

export const fetchEvents = (username: string) => (dispatch: Dispatch) => {
    try {
        const events = localStorage.getItem('events') || [];
        let json = [] as IEvent[];
        if (typeof events === "string") {
            json = JSON.parse(events) as IEvent[];
        }
        const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username);
        dispatch(eventSlice.actions.setEvents(currentUserEvents));
    } catch (e) {
        console.log(e);
    }
}

export const setEventAction = (event: IEvent[]) => (dispatch: Dispatch) => {
    dispatch(eventSlice.actions.setEvents(event));
}

export const setUserAction = (user: IUser[]) => (dispatch: Dispatch) => {
    dispatch(eventSlice.actions.setGuests(user));
}
