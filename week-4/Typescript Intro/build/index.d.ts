declare let isDone: boolean;
declare let price: number;
declare let first_name: string;
declare let last_name: string;
declare let full_name: string;
declare let arr: number[];
declare let arrOfString: string[];
declare let arrOfNumber: Array<number>;
declare type company = {
    first_name: string;
    last_name: string;
    age: number;
};
declare type softwareDeveloper = {
    skills: string;
    isWorking: boolean;
};
declare const masai: company;
declare let arrOfCompany: company[];
declare let tuple: [string, number, string];
declare enum Color {
    RED = 0,
    GREEN = 1,
    BLUE = 2,
    YELLOW = 3
}
declare let u: undefined;
declare let n: null;
declare let a: any;
declare function sum(a: number, b: number): number;
declare const printData: ({ first_name, last_name, age }: company) => void;
declare let output: (number | string)[];
declare const masaiStudent: company & softwareDeveloper;
