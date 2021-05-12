//1
const concat = function(a: string, b: string): string {
    return a + ' ' + b;
}

concat('Hello ', 'World');

//2
interface IMyHometask {
    howIDoIt: string;
    simeArray: [string, string, number];
    withData: [
        {
            howIDoIt: string;
            simeArray: [string, number];
        }
    ]
}

const MyHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

//3

interface MyArray<T> {
    [N: number]: T;
  
    reduce<U>(fn: (accumulator: U, value: T, index: number, arr: MyArray<T>) => U, initialValue?: U): U
}

const arr: MyArray<number> = [1,2,3];

arr.reduce((accumulator, value) => accumulator + value, 0);

//4
interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N]
}

type MyPartialDeep<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartialDeep<T[N]> : T[N]
}


// type MyPartial<T> = {
//     [N in keyof T]: T[N] extends object ? MyPatial<T[N]> : T[N]
// }

const homeTask: MyPartialDeep<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}
