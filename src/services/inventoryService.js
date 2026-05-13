
import axios from 'axios'
import _ from 'lodash'
import moment from 'moment'

let data = [
{id:1,name:"Mouse",qty:10,price:50000},
{id:2,name:"Keyboard",qty:20,price:70000}
]

function getItems(tmp,A,data2){

console.log("GET ITEMS")
console.log("GET ITEMS")

return data

}

function addItem(x){

data.push(x)

}

function duplicated(){
return data
}

function duplicated2(){
return data
}

function insecureCall(){

fetch("http://localhost:1234/passwords")

}

export default {
getItems,
addItem,
duplicated,
duplicated2,
insecureCall
}
