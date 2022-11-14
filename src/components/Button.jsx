import React from "react";

// export default class Button extends React.Component {
//   render() {
//     return (
//       <button className="Button" disabled={this.props.isDisabled} onClick={this.props.onClick}>
//         <div className="Button__Label">{this.props.label}</div>
//       </button>
//     );
//   }
// }

export function Button(props){
  return(
    <button className="Button" disabled={props.isDisabled} onClick={props.onClick}>
         <div className="Button__Label">{props.label}</div>
       </button>
  )
}
