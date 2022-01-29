export let user: {
    readonly firstName: string, //readonly - нельзя поменять значение свойства
    age?: number, //необязательно тип
}

user = {
    firstName: 'Gena',
    age: 34
}

//let keys: keyof typeof user = 1;  // "firstName" | "age"
//let value: (typeof user)['firstName'] = 1;

let value2: (typeof user)['firstName' | 'age'] = 1; //string | number | undefined
let value2a: (typeof user)[keyof typeof user] = 1; //string | number | undefined


//непонятно сколько свойств, что есть ключи, но понятны какие значения могут быть
//Сигнатура индекса
let hasMap: { [id: string]: typeof user } = {
    'sdsdsd22323': user,
    'sdsdsdsdsfgh2232': user,
    'asasas24556': user,
}

//массивы - типизируем ячейку массива
let arr: number[] = [1, 2, 3];

//сделаем массив readonly
let arr2: readonly number[] = [1, 2, 3];

//типизируем и количество и ячейку элементов - tuple - уникальный
let tupleArr: readonly [string, number] = ['name', 1];

// as const

const str = 'const string' as const; //указали явно, для не знающих про утиную типизацию
let a: typeof str = 'const string'; //только значение 'const string'

let arrC = [1, 2, 3, 4] as const; //стал массив readonly number
//arrC.push(5)

const user1 = {
    firstName: 'Gena',
    age: 34
} as const
//user1.age = 21;