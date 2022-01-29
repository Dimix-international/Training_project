//any
export let anyType: any = {};
anyType.a = 1;
anyType.a();

//object - нельзя обращаться к свойствам или методам
let objType: object = {};
objType = {a: 1};
//objType.a = 5;

//unknown - any с ограничениями ЛУЧШЕ чем any - присваиваем все что угодно, но
// к свойствам или методам нельзя обращаться или вызывать
let unknownType: unknown = {};
unknownType = {u: 1};
//unknownType.c = 3;

//void - к нему можно присовить только undefined
let voidType: void = undefined;
//voidType = 2;

//если функция ничего не возвращает, то она возвращает undefined - для функций
function fn ():void {

}