//type - создание кастомного типа
export type aacc = {
    name: string,
    age: number
}
let user: aacc;

//--Критерии сравнения interface и type--

//1) можем ли типизировать объекты/функции
interface IPoint {
    x:number;
    y:number
}
let pI: IPoint = {
    x:1,
    y:1
}

type TPoint =  {
    x:number;
    y:number
}

let pT: TPoint = {
    x:1,
    y:1
}
//Для функии
interface ISetPoint {
    (x:number, y:number):void
}
type TSetPoint = (x:number, y:number) => void

// Используем любой метод для объектов/функций

//2) Расширение - extends
type PartialPoint = {
    x:number
}
type Point = PartialPoint & {
    y: number
}

interface IPartialPoint {
    y: number
}

type PointBig = PartialPoint & IPartialPoint

interface PointInt extends PartialPoint, IPartialPoint {

}

//Итог расширять можно типы и интерфейсы

//3) implements
//для классов создаем контракт - т.е. интерфейс должен быть выполнен
class Base implements PartialPoint, IPartialPoint {
    public x = 1;
    public y = 2;
}

//4) Разница
//1) interface описывает только объектный тип
//interface a = string;

//2) для type недоступно декларативное слияние  - merge
/*type TAccount = { //нельзя
    name:string
}
type TAccount = {
    age:number
}*/

interface IAccount1 {
    name:string;
    info: {male:boolean};
}
interface IAccount2 {
    age:number;
    info: {salary:number}
}
interface  IAccount extends IAccount1, IAccount2 {
    info: {
        male:boolean,
        salary:number
    }
}
const userMerge:IAccount = {
    name:'Frank',
    age:22,
    info: {
        male:true,
        salary:2000,
    }
}


