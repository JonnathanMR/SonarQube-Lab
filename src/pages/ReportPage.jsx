
import React from 'react'

function ReportPage(){

function generate(){

console.log("REPORT")
console.log("REPORT")
console.log("REPORT")

let x = ""

for(let i=0;i<50;i++){

switch(i){

case 1:
x += "A"
break

case 2:
x += "B"
break

case 3:
x += "C"
break

default:
x += i

}

}

return x

}

return <div>

<h2>Reports</h2>

<div>{generate()}</div>

</div>

}

export default ReportPage
