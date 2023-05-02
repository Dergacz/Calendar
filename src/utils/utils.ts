import moment, {Moment} from "moment";

export const rules = {
    required: (message: string = 'Required field') => ({
        required: true, message
    }),
    isDateAfter: (message: string) => () => ({
        validator(_: any, value: Moment) {
            if (value.isSameOrAfter(moment())) {
                return Promise.resolve();
            }
            return Promise.reject(new Error(message));
        }
    })
};

export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return `${year}.${month}.${day}`;
}