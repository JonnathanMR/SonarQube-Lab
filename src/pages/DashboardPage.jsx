
import React from 'react'

function DashboardPage(){

let total = 0

for(let i=0;i<100;i++){
total += i
}

return <div>

<h2>Dashboard</h2>

<div>Total: {total}</div>

</div>

}

export default DashboardPage
