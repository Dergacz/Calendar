import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {formatDate, rules} from "../utils/utils";
import {IEvent, IUser} from "../models/models";
import {Dayjs} from "dayjs";
import {useAppSelector} from "../hooks/hooks";

interface IEventForm {
    guests: IUser[];
    submit: (event: IEvent) => void;
}

export const EventForm: FC<IEventForm> = ({
    guests,
    submit
}) => {
    const { user } = useAppSelector(state => state.authSlice);
    const [event, setEvent] = useState<IEvent>({
        guest: '',
        author: '',
        date: '',
        description: ''
    });

    const selectDate = (date: Dayjs | null) => {
        if(date) {
            setEvent({...event, date: formatDate(date.toDate())});
        }
    }

    const submitForm = () => {
        // @ts-ignore
        submit({...event, author: user?.username});
    }
    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Event description"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    onChange={e => setEvent({...event, description: e.target.value})}
                    value={event.description}
                />
            </Form.Item>
            <Form.Item
                label="Event date"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker onChange={(data) => selectDate(data)}/>
            </Form.Item>
            <Form.Item
                label="Choose the guest"
                name="name"
                rules={[rules.required()]}
            >
                <Select onChange={(guest: string) => setEvent({...event, guest})}>
                    {
                        guests.map(guest => {
                            return (
                                <Select.Option key={guest.username} value={guest.username}>
                                    {guest.username}
                                </Select.Option>
                            )
                        })
                    }
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};
