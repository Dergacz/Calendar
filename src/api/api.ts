import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/models";

export default class api {
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>('./users.json');
    }
}