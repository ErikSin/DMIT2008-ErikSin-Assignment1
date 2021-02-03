import * as ejs from 'ejs'
import {stockViewEjs} from './selected-stock'

//uses ejs to create a view (as a string)
export function stockView(price:string, date?:Date, stockSymbol?:string, high?: number, low?:number, change?:number)
{
    return ejs.render(stockViewEjs, {price, date, stockSymbol, high, low, change})
}