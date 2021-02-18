import './App.css';
import React, { useState, useEffect } from 'react'
import Datatable from './datatable'
import Chart from './Components/Chart'
import Temp from './Components/temp'

function App() {

  const [data, setData] = useState([]);
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
      <div><input type='text' value={q} onChange={(e) => setQ(e.target.value)}></input></div>
      <div>

        <Datatable data={search(data)} />
        <Temp data={map}></Temp>
      </div>


    </div>
  );
}

export default App;
