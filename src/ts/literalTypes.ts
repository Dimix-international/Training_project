// области декларации - реальная и виртуальная

interface UserAccount { //сущность виртуальная (для ts) - декларация типов
    name: string;
    age: number
}

let userAccount = {
    name: 'Igor',
    age: 34,
}
let person1: UserAccount = {
    name: 'Gena',
    age: 22
}
//захватили тип реальной сущности  userAccount  с помощью typeof userAccount
//typeof удобен чтобы не описать интерфейс
export let person2: typeof userAccount = {
    name: 'Vasya',
    age: 18
}

//литеральные типы - объединения
interface AnimationOptions { //interface - объектный тип
    delay: number,
    type: 'ease-in' | 'ease-out' //литеральный тип
}

function animate(_options: AnimationOptions) {

}

animate({delay: 3000, type: 'ease-out'});

//ключевые слова
let num: AnimationOptions['delay'] = 1;
//1) keyof - из ключей объектного типа выстраивается литеральный тип
// будет тип 'delay' | 'type'
let num2: keyof AnimationOptions = 'delay'

interface IFact {
    factId: number;
    user: string;
    value: any;
}

const dataList: { action: string, data: IFact }[] = [];

//если не типизировать функция возвращает string
const uniqueValue = (): keyof IFact => { //теперь ошибку в 52 мы не словим
    return 'factId';
}
dataList.map(item => {
    if (item.data[uniqueValue()] === 2) {
        return {...item}
    }
    return item
})

enum Actions {
    Create = 'create',
    Remove = 'remove'
}

let actions: keyof typeof Actions; //получаем литеральный тип "Create" | "Remove"