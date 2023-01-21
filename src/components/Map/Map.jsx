import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutLinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';
import useStyles from './styles';


const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 600px)');

  const cordinates = { lat:0, lng:0 };
  return (
    <div className={classes.mapContainer}>
        <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyCGPnV7MDbwe0-Nn8LVhIu6c9jBzuQTxgE'}}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick = {''}
        >

        </GoogleMapReact>

    </div>
  )
}

export default Map;