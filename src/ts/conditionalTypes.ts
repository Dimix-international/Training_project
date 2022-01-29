// T extends U ? X: Y - например выкинуть по условию какой-то тип


export type noneUndefined<T> = T extends undefined ? never : T
//если я по типу undefined - never(ничего не хочу возвращать) иначе T
const value: noneUndefined<string | undefined | number> = 1;


type excludeFactId<T> = T extends 'factId' ? never : T;

interface IFact {
    factId: number;
    user: any;
    value: string;
}

const value2: excludeFactId<keyof IFact> = 'value';

//будет предложено только user или value, т.к. factId - never


interface IUser {
    name: string;
    age: number;
}

//создадим массив функций (tuple)
const arrr: [() => IUser, () => number | null] = [() => ({
    name: 'Arra',
    age: 25
}), () => null];

//нужно захватывать тип возвращаемого значения первого элемента
//получим ссылку на первый элемент  - infer U лежит тип boolean
//infer - получение ссылки соответствующего элемента
type FirstElementReturnType<T> = T extends [infer U, ...unknown[]] //является ли переданное значений функцией
    ? U extends (...args: unknown[]) => infer R //если этот тип U является произвольной функцией,
        ? R //то я хочу захватить тип его возвращаемого значения
        : never //ничего не возвращай
    : never;

//let valueF: FirstElementReturnType<typeof arrr> = 1;
//let valueF1: FirstElementReturnType<number> = 1;


//Задача - автоматически делать type из параметров функции + возвращаемое значение
function fn(_a: number, _b: IUser): boolean {
    return true
}

type NonFunction<T> = T extends Function ? never : T; //отсеиваем функции (методы)
//T extends какой-то функции с любым количество параметров с сылкой на них тип(...args: infer Args)
// infer Args - ссылка на массив, с его методами
type FunctionsParamsAndReturn<T> = T extends (...args: infer Args) => infer R
    ? NonFunction<Args[keyof Args]> | R //проверим ключ является функцией или нет
    : never

const vall:FunctionsParamsAndReturn<typeof fn> = 1;

 let a:Exclude<any, any>; //посмотреть все шаблоны типов, если клик по Exclude