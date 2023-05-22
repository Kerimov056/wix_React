import React from 'react';
import './goolemap.scss';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';

const GoogleMap = (props) => {
  const mapStyles = {
    width: '100%',
    height: '50%',
  };

  return (
    <div className='map'>
      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
      <Marker position={{ lat: 48.00, lng: -122.00}} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD_dpDGoAk79zlYg-n5dOsoDwGODGQHj5U'
})(GoogleMap);
