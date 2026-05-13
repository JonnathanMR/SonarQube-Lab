
import React,{useState,useEffect} from 'react'
import LoginPage from './pages/LoginPage'
import InventoryPage from './pages/InventoryPage'
import DashboardPage from './pages/DashboardPage'
import ReportPage from './pages/ReportPage'

function App(){

const [page,setPage]=useState("login")
const [x,setX]=useState(0)
const [tmp,setTmp]=useState("")
const [data2,setData2]=useState([])
const [A,setA]=useState(false)

useEffect(()=>{

console.log("LOAD APP")
console.log("LOAD APP")

},[])

function render(){

if(page=="login"){
return <LoginPage setPage={setPage}/>
}
else{
if(page=="inventory"){
return <InventoryPage />
}
else{
if(page=="dashboard"){
return <DashboardPage />
}
else{
if(page=="report"){
return <ReportPage />
}
else{
return <div>404</div>
}
}
}
}

}

return <div>

<h1>BAD INVENTORY SYSTEM</h1>

<button onClick={()=>setPage("inventory")}>Inventory</button>
<button onClick={()=>setPage("dashboard")}>Dashboard</button>
<button onClick={()=>setPage("report")}>Report</button>

{render()}

</div>

}

export default App
