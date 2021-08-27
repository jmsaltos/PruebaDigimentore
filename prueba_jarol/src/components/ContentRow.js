import React from "react";
import { Row, Divider, Pagination } from "antd";
import ContentCol from "./ContentCol";

export default function ContentRow({nm}) {
  return (
    <div>
      <h2 className="containerCentrado">Bienvenido de nuevo, {nm}</h2>
      <Row  className="RowStyle">
        <ContentCol />
        <ContentCol />
        <ContentCol />
        <ContentCol />
        <ContentCol />
      </Row>
      <p>
      <Divider orientation = 'center' style={{fontSize:20}}>
        Más imágenes 
        </Divider> </p>
      <Row  className="RowStyle">
        <ContentCol />
        <ContentCol />
        <ContentCol />
        <ContentCol />
        <ContentCol />
      </Row>
    </div>
  );
}
