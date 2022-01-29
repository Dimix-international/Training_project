//generic - обобщение - вызов сущности с разными параметрами - параметры для типа
//сущности доступные к обобщению - type, interface, function, classes

/*export let userGen: {
   id:string,
   name:string
}
let admin : {
    id:number,
    name:string
}*/

//параметры у котор есть знач по умолч ставятся последними (T = string)
type Info = { salary: number }
//extends - ограничить параметр по типу
// (как минимум должен быть параметр Info с его типами и  email:string)
interface IAccount<UserInfo extends Info & { email: string }, T = string> {
    id: T,
    name: string
    info: UserInfo
}

export let userGen: IAccount<{ male: boolean, salary: number, email: string }> = {
    id: 'dsdsd',
    name: 'Gena',
    info: {
        male: true,
        salary: 3000,
        email: 'asas.ru'
    }
};
let admin: IAccount<{ salary: number, subjects: string [], email: string }, number> = {
    id: 123,
    name: 'Vika',
    info: {
        salary: 3000,
        subjects: ['TS', 'JS'],
        email: 'www.ru'
    }
};


interface IUser {
    name: string,
    age: number
}

interface IProduct {
    name: string,
    price: number
}

interface ICartProduct extends IProduct {
    count: number
}

type TState = {
    user: IUser,
    products: IProduct [],
    cart: ICartProduct [],
}

const state: TState = {
    user: {
        name: 'Igor',
        age: 12
    },
    products: [{name: 'Phone8', price: 200}],
    cart: [{name: 'Phone8', price: 200, count: 2}]
}

//опишем тип селекта
//этот тип работает с State, это будет функция которую обобщим <Field extends keyof State>,
// мы ее ограничиваем ключами объектами State, параметры функции будут (state: State, field: Field)
// т.е field: 'user' | 'products' | 'cart'
//возвращаем State[Field]
type Select<State> = <Field extends keyof State>(state: State, field: Field) => State[Field];

const select:Select<TState> = (storeState, field) => storeState[field];

//выведем
const user:IUser = select(state, 'user');
const products: IProduct[] = select(state, 'products');
const cart: ICartProduct[] = select(state, 'cart');



function getProperty<T,K extends keyof T>(obj:T, key: K) {
    // Т - объект, К- ключи, которые ограничены ключами объекта Т
    return obj[key]
}

const key = 'key1';
//getProperty({a:1}, key) //ошибка, ключа key1 в объекте нету