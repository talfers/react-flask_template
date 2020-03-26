import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [ data, setData ] = useState();

  async function getData() {
    axios.get('/time')
      .then(function (response) {
        setData(response.data.time)
        console.log(response.data.time);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div>Home Page!!!</div>
      <p>Current time: {data}</p>
    </>
  )
};

export default HomePage;
