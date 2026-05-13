
import React,{useState} from 'react'

function LoginPage(props){

const [user,setUser]=useState("")
const [password,setPassword]=useState("")
const [tmp,setTmp]=useState("")

function login(){

console.log("LOGIN")
console.log("LOGIN")
console.log("LOGIN")

if(user=="admin"){
if(password=="123456"){
localStorage.setItem("token","HARDCODED_TOKEN")
props.setPage("inventory")
}
else{
alert("bad password")
}
}
else{
alert("bad user")
}

}

return <div>

<h2>Login</h2>

<input value={user} onChange={(e)=>setUser(e.target.value)} />
<input value={password} onChange={(e)=>setPassword(e.target.value)} />

<button onClick={login}>Login</button>

</div>

}

export default LoginPage
