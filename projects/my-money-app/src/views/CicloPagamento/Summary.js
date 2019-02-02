import React from 'react'
import {
    Row,
    Col
} from 'reactstrap';
import { Widget02 } from '../../containers';

export default ({ credit, debt }) => (
    <Row cols='12'>
        <Col xs="12" sm="6" lg="3">
            <Widget02 header={`R$ ${credit}`} mainText="Total de Créditos" icon="fa fa-laptop" color="green" />
        </Col>
        <Col xs="12" sm="6" lg="3">
            <Widget02 header={`R$ ${debt}`} mainText="Total de Débitos" icon="fa fa-laptop" color="red" />
        </Col>
        <Col xs="12" sm="6" lg="3">
            <Widget02 header={`R$ ${credit - debt}`} mainText="Valor Consolidado" icon="fa fa-laptop" color="blue" />
        </Col>
    </Row>
)