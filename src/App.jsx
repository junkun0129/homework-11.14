import { Component } from "react";

import {Field} from "./components/Field";
import {Button} from "./components/Button";
import { useState,useEffect } from "react";

import MainFunction, {validateEmail, validatePassword} from './util/validators'


function App () {
 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailHint, setEmailHint] = useState(null);
  const [passwordHint, setPasswordHint] = useState(null);
  const [disableBtn, setDisableBtn] = useState(true);

 
  
  const changeHandler = (evt) => {
    const { name, value } = evt.target

    if(email !== "" && password !== ""){
      setDisableBtn(false)
    }else{
      setDisableBtn(true);
    }

    
    if(name === "email"){
      setEmail(value)
    }else if(name === "password"){
      setPassword(value);
    }
  } 

  const submitHandler = () => {
    
    const emailHint = validateEmail(email) 
    setEmailHint(!emailHint ? "Invalid email address":"");

    const passwordHint = validatePassword(password);
    setPasswordHint(passwordHint? passwordHint : "" );

    setpass
    if(emailhint === "" && passwordHint === ""){
      alert("Sign up successful!")
    }

  }

  const clearFields = () => {
    console.log("Cleared all fields")
    setEmail("");
    setPassword("");
  }

  
    
    return (
      <div className="App">
        <h1>React Lab 4</h1>
        <h1>Sign Up</h1>
        <div className="Container">
          <Field 
            label="email" 
            type="text"
            value={email} 
            onChange={changeHandler} 
            hint={emailHint}
          />
          <Field 
            label="password"
            type="text"
            value={password}
            onChange={changeHandler}
            hint={passwordHint}
          />

          <div className="Buttons">
            <Button label="Clear" onClick={clearFields} />
            <div className="Spacer" />
            <Button 
              label="Sign Up" 
              isDisabled={disableBtn} 
              onClick={submitHandler}
            />
          </div>
        </div>
      </div>
      
    );
  
}


export default App