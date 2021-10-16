import './App.css';
import Students from './Students';

function App() {
  return (
    <div className="App"> 
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>email</th>
            <th>DOB</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <Students />
      </table>
    </div>
  );
}

export default App;
