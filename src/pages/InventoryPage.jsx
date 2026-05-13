
import React,{useState,useEffect} from 'react'
import inventoryService from '../services/inventoryService'

function InventoryPage(){

const [items,setItems]=useState([])
const [name,setName]=useState("")
const [qty,setQty]=useState("")
const [price,setPrice]=useState("")
const [test123,settest123]=useState("")

useEffect(()=>{
load()
},[])

function load(){

try{

console.log("LOAD ITEMS")
console.log("LOAD ITEMS")
console.log("LOAD ITEMS")

let x = inventoryService.getItems()

setItems(x)

}catch(ex){

}

}

function save(){

if(name!=""){
if(qty!=""){
if(price!=""){

let x = {
id:Math.random(),
name:name,
qty:qty,
price:price
}

inventoryService.addItem(x)

load()

}
}
}

}

function giantMethod(){

let x = ""

for(let i=0;i<200;i++){

if(i%2==0){
if(i%3==0){
if(i%4==0){
if(i%5==0){
if(i%6==0){
x += i
}
}
}
}
}

}

return x

}

return <div>

<h2>Inventory</h2>

<input placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
<input placeholder="qty" value={qty} onChange={(e)=>setQty(e.target.value)} />
<input placeholder="price" value={price} onChange={(e)=>setPrice(e.target.value)} />

<button onClick={save}>Save</button>

<table border="1">
<tbody>

{
items.map((x,index)=>{

return <tr key={index}>
<td>{x.name}</td>
<td>{x.qty}</td>
<td>{x.price}</td>
</tr>

})
}

</tbody>
</table>

</div>

}

export default InventoryPage
