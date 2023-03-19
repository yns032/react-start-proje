import { useState } from 'react';
import './App.css';
import Button from "./companents/button/Button";
import Form from "./companents/form/Form";
import Input from "./companents/input/Input";

function App() {

  const [user,setUser]=useState({name:"" ,password:""});
  const handleChange=(e)=>{
    if(e.target.type==="text"){
      setUser({...user,name:e.target.value})
      console.log(user);
    }else if(e.target.type==="password"){
      setUser({...user,password:e.target.value})
      console.log(user);
    }
  }
  const handleClick=()=>{
    if(user.name===""){
      alert("Kullanıcı Adı Boş Geçilemez");
    }else if(user.password===""){
      alert("Şifre Boş Geçilemez");
    }else{
      alert("Kullanici Adı: "+user.name+"Şifreniz:"+user.password);
    }
  }
  return (
    <div className="App">
     <h2>Giriş Formu</h2>
      
     <Form>
       <Input 
       type={"text"} 
       placeHolder={"Kullanıcı Adı"}
       onChange={handleChange}
       value={user.name}
       />
       <Input 
       type={"password"} 
       placeHolder={"Şifreniz"}
       onChange={handleChange}
       value={user.password}
       />
      <Button onClick={handleClick}/>
     </Form>
    </div>
  )
}
export default App;
