import './App.css';
import React, { useState, useEffect } from 'react'
import Datatable from './datatable'
function App() {

  const [data, setData] = useState([]);
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
      </div>
    </div>
  );
}

export default App;
