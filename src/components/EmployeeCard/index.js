import React, { Component } from "react";
import "./style.css";

class EmployeeCard extends Component {

state = {
    first: this.props.first,
    last: this.props.last,
    city: this.props.city,
    state: this.props.state,
    email: this.props.email
};

render() {
    return (
        <div className="card">
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {this.state.first} {this.state.last}
            </li>
            <li>
              <strong>Location:</strong> {this.state.city} {this.state.state}
            </li>
            <li>
              <strong>Email:</strong> {this.state.email}
            </li>
          </ul>
        </div>
      </div>
    )
}

}

// function FriendCard(props) {
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Name:</strong> {props.name}
//           </li>
//           <li>
//             <strong>Occupation:</strong> {props.occupation}
//           </li>
//           <li>
//             <strong>Location:</strong> {props.location}
//           </li>
//         </ul>
//       </div>
//       <span onClick={() => props.removeFriend(props.id)} className="remove">
//         𝘅
//       </span>
//     </div>
//   );
// }

export default EmployeeCard;
