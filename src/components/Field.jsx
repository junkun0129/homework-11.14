import React from "react";



export function Field(props){
  return (
    <div className="Field">
      <div className="Field__Label">{props.label}</div>
      {/* ternary operator --> condition ? true : false */}
      {props.type === "password" ? (
        <input 
          className="Field__Input" 
          name={props.label} 
          onChange={props.onChange} 
          type="password" 
          value={props.value}
          />
      ) : (
        <input 
          className="Field__Input" 
          name={props.label} 
          onChange={props.onChange} 
          type="text" 
          value={props.value}
        />
      )}
      {!!props.hint && (<div className="Field__HelperMessage">{props.hint}</div>)}
    </div>
  );
}

// (5 > 0 && 4 < 3) ? 
//   2ndcondition ?
//     true
//     :
//     false 
//   : 
// false