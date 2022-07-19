export interface Student<T = string> {
    _id: T;
    name: string;
    email: string;
    cohort: string;
    phoneNumber?: number;
}
