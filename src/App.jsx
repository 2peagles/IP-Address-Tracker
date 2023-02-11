import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css'

function App() {

  return (
    <div className="app">
      <div className='form_container'>
          <h1>ip address tracker</h1>
          <form className='input_intro'>
          <input />
          <button><img src='/images/icon-arrow.svg' alt='right arrow'/></button>
      </form>
      </div>


      <div className='ip_container'>
        <div className='ip_info'>
        <div>
          <p>ip address</p>
          <span>efr</span>
        </div>
         <div>
          <p>location</p>
          <span>philly</span>
        </div>
         <div>
          <p>timezone</p>
          <span>utc</span>
        </div>
         <div>
          <p>isp</p>
          <span>spacex</span>
        </div>
      </div>
    </div>

      {/* <div id='map'>
         
      </div> */}
      <div id='map'>
      <MapContainer center={[51,505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[51.505, -0.09]}>
            <Popup>a pretty css53 popup.</Popup>
          </Marker>
      </MapContainer>
      </div>
    </div>
  )
}

export default App
