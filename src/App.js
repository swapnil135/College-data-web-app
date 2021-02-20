import './App.css';
import React, { useState, useEffect } from 'react'
import Datatable from './datatable'
import Chart from './Components/Chart'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Student from './Components/Student'



function App() {

  const [data, setData] = useState([]);
  const [students, setStudents] = useState([]);
  const [isStudentLoaded, setStudentLoaded] = useState(false);
  const [map, setMap] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  const [q, setQ] = useState("");
  useEffect(() => {

    console.log('triggered')
    fetch('http://localhost:5000/getCollege').then(
      response =>
        response.json())
      .then(json => {
        setData(json)

        setLoaded(true)
        console.log(data)
      });
    fetch('http://localhost:5000/getStudent').then(
      response =>
        response.json())
      .then(json => {
        setStudents(json);
        setStudentLoaded(true);
        console.log(students)
      });
    const mp = {}
    data.forEach(element => {
      const state = element.state;
      if (mp[state]) mp[state]++;
      else mp[state] = 1;
    });
    console.log(mp);
    setMap(mp);




  }, [isLoaded])

  function search(rows) {
    return rows.filter((row) =>
      row.name.toLowerCase().indexOf(q) > -1 ||
      row.state.toLowerCase().indexOf(q) > -1 ||
      row.city.toLowerCase().indexOf(q) > -1)
  }
  return (
    <div>
      <div>Search : <input type='text' value={q} onChange={(e) => setQ(e.target.value)}></input></div>
      <div>

        <Router>
          <Route path='/student' exact render={() => <Datatable data={students} />}></Route>
          <Route path='/' exact render={() => <Datatable data={search(data)} />}></Route>
          <Route path='/' exact render={() => <Chart data={map} ></Chart>}></Route>



        </Router>
      </div>


    </div>
  );
}

export default App;
