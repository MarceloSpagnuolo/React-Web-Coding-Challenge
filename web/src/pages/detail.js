import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
//import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FindCases } from "../Inputs/FindCases";

export const Detail = () => {
  const [query, setQuery] = useState(useLocation().search);
  const { cases } = useSelector((state) => state);
  const [caso, setCaso] = useState(
    cases.filter((cas) => cas.id === parseInt(query.split("=")[1]))
  );
  const classes = useStyles();
  const position = [
    caso[0].stolen_coordinates[0],
    caso[0].stolen_coordinates[1],
  ];

  function Back() {
    window.location.href = "/";
  }

  return (
    <div className={classes.Detalle}>
      <h1>
        {caso[0].title} ({Colores(caso[0].frame_colors)})
      </h1>
      <h2>{caso[0].stolen_location}</h2>
      <div className={classes.Map}>
        <MapContainer
          className={classes.MapContainer}
          center={position}
          zoom={17}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>{caso[0].title}</Popup>
          </Marker>
        </MapContainer>
      </div>
      <h2>Description of incident</h2>
      <p>{caso[0].description || "Whithout description"}</p>
      <img src={caso[0].large_img} alt="Large" className={classes.Image} />
      <div className={classes.Boton}>
        <FindCases label="Back" onClick={Back} />
      </div>
    </div>
  );
};

function Colores(color) {
  var res = "";
  for (var x = 0; x < color.length; x++) {
    res += color[x] + ",";
  }
  return res.slice(0, res.length - 1);
}

const useStyles = makeStyles((theme) => ({
  Map: {
    width: "100%",
    height: 400,
  },
  MapContainer: {
    width: "100%",
    height: "100%",
  },
  Detalle: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  Image: {
    width: "100%",
  },
  Boton: {
    display: "flex",
    justifyContent: "end",
    marginTop: 10,
    marginBottom: 20,
  },
}));
