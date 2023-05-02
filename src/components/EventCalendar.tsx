import React, {FC} from 'react';
import {Badge, Calendar} from "antd";
import {IEvent} from "../models/models";
import {Dayjs} from "dayjs";
import {formatDate} from "../utils/utils";

interface IEventCalendar {
    events: IEvent[];
}

export const EventCalendar: FC<IEventCalendar> = ({
    events
}) => {

    const dateCellRender = (value: Dayjs) => {
        const formatedData = formatDate(value.toDate());
        const currentDayEvents = events.filter(ev => ev.date === formatedData);
        return (
            <div>
                {
                    currentDayEvents.map((ev, index) => (
                        <div key={index}>{ev.description}</div>
                    ))
                }
            </div>
        )
    };

    return (
        <Calendar cellRender={dateCellRender}/>
    );
};
