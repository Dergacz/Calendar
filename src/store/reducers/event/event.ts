import {IEvent, IUser} from "../../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IEventState {
    guests: IUser[];
    events: IEvent[];
}

const initialState: IEventState = {
    guests: [],
    events: []
}

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setGuests(state, action: PayloadAction<IUser[]>) {
            state.guests = action.payload;
        },
        setEvents(state, action: PayloadAction<IEvent[]>) {
            state.events = action.payload;
        }
    }
});

export default eventSlice.reducer;