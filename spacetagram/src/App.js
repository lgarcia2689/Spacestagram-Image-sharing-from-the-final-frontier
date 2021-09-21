import React, { useEffect, useState } from 'react'
import "./App.css";
import axios from 'axios'
import Like from './Like'



function App() {
  const [data, setDate] = useState()

  useEffect(() => {
    const nasa = ()=>{
      axios
      .get('https://api.nasa.gov/planetary/apod?api_key=83hbZxJtKsXc02oyZgYgosDYFIeeuMcVaKwjo8As')
      .then
        (res => {
          console.log(res.data)
          setDate(res.data)
        })
      .catch
        (err => {
          console.log(err)
        })
    }
    nasa()
  })

  return (
    <div className = "global_c">
    <div className = "container">

      <h1>Spacestagram</h1>
      <h4>Brought to you by NASA's image API</h4>
      <img src = {data.url} alt= " from nasa api"/>
      <div className = "under">

          <h3 className="title">{data.title}</h3>
          <Like/>
          <h3 className = "date">{data.date}</h3>

      </div>
      <p>{data.explanation}</p> 
      <Like/>
    </div>
    </div>
  );
}

export default App;