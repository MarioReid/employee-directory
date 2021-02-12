import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';

import EmployeeCard from './components/EmployeeCard'

import sampleEmployee from './data/sampleEmployee.json';

class App extends Component {
  state = {
    employeeList: [],
    first: sampleEmployee.results[0].name.first,
    last: sampleEmployee.results[0].name.last,
    city: sampleEmployee.results[0].location.city,
    state: sampleEmployee.results[0].location.state,
    email: sampleEmployee.results[0].email
  };



  render() {
    return (
      <div className="App">
        <EmployeeCard
          first={this.state.first}
          last={this.state.last}
          city={this.state.city}
          state={this.state.state}
          email={this.state.email}
        />
      </div>
    )
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
