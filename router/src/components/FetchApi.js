import React, { useState } from 'react'

const FetchApi = () => {
    const [data,FetchData] = useState([]);

     const GetApi = () => {
         fetch('https://randomuser.me/api/?results=200')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                FetchData(json.results)
            })
            .catch(error => {
                console.log(error)
            })
    }
  return (
    <div>
        <button onClick={GetApi}>Get API</button>
        <div className='main'>
        {
                data.map(data => {
                   return <div className='users'>
                       <img src={data.picture.large} alt="" />
                       <p>{data.email}</p>
                       <p>{data.phone}</p>
                   </div>
                })
            }
        </div>
    </div>
  )
}

export default FetchApi