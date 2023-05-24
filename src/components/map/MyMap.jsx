// import React from 'react'
import { useState, useCallback, memo } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';

const containerStyle = {
    width: 'calc(100vw - 460px)',
    height: '100vh'
};

const WrapperStyle = {

}

const myStyles = [
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
    },
];

function MyMap({ props: { list, setAttractionDetail, getAttractionDetail, center, setCenter, zoom } }) {
    console.log(list);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
    });

    const [map, setMap] = useState(null);
    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }

        setActiveMarker(marker);
    };

    const onLoad = useCallback(function callback(map) {
        map.setZoom(zoom);
        setMap(map);
    }, [list])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [list])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                // disableDefaultUI: true,
                styles: myStyles
            }}
        >
            {
                list ? list.map(data =>
                    <MarkerF
                        key={data.contentid}
                        position={{
                            lat: Number(data.mapy),
                            lng: Number(data.mapx)
                        }}
                        onClick={async () => {
                            const rst = await getAttractionDetail(data.contentid);

                            setCenter({ lat: Number(data.mapy), lng: Number(data.mapx) });
                            setAttractionDetail(rst);
                        }}
                        onMouseOver={() => handleActiveMarker(data.contentid)}
                        onMouseOut={() => setActiveMarker(null)}
                    >
                        {activeMarker === data.contentid ? (
                            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                                <div>{data.title}</div>
                            </InfoWindowF>
                        ) : null}
                    </MarkerF>
                ) : <></>
            }
        </GoogleMap>
    ) : <></>
}

export default memo(MyMap)