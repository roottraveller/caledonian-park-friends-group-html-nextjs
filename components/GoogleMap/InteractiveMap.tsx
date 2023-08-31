import React from 'react';
import GoogleMapReact from 'google-map-react';
import {GOOGLE_MAPS_API_KEY} from "@/config";

const InteractiveMap = () => {
    const mapCenter = {
        lat: 51.5465575,
        lng: -0.1239544,
    };

    return (
        <div style={{height: '100%', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: GOOGLE_MAPS_API_KEY}}
                defaultCenter={mapCenter}
                defaultZoom={17}
            >
                <Marker lat={51.5465575} lng={-0.1239544} text="Caledonian Park"/>
            </GoogleMapReact>
        </div>
    );
};

const Marker = ({lat, lng, text}) => (
    <div
        className="marker"
        style={{
            position: 'absolute',
            left: `${lng}%`,
            top: `${lat}%`,
        }}
    >
        {text}
    </div>
);

export default InteractiveMap;
