import {API_KEY} from './constants'

//makes fetch to stock api
export async function stockController (searchString: string)
{
    let url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${searchString}&apikey=${API_KEY}`

    let results = await fetch(url)
    return await results.json()

}
