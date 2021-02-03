import {stockController} from './controller'
import { stockView } from './views/views'


//waits for the onload event
window.addEventListener("load", async (e) =>
{
    //Only One submit event in the page
    window.addEventListener("submit", async e=>
    {

        e.preventDefault()
        
        //on submit => loading message appears
        document.querySelector('#dynamicContent').innerHTML = "<h3> Loading . . . </h3>"
        
        //extracts value from input
        let myvalue = document.querySelector<HTMLInputElement>('#stockSymbol')
        //inputs value into stock api
        const theStock = (await stockController(myvalue.value))['Global Quote']
        
        //checks to see if it blank
        if(JSON.stringify(theStock) === '{}')
        {
            document.querySelector('#dynamicContent').innerHTML = "<h2> Not found </h2>"
        }
        else
        {
            //uses ejs to render a view
            const template = stockView(theStock["05. price"], theStock["07. latest trading day"], theStock["01. symbol"], theStock["03. high"], theStock["04. low"], theStock["09. change"])            
            document.querySelector('#dynamicContent').innerHTML = template
        }
        
        
        
        
    })
    
})


