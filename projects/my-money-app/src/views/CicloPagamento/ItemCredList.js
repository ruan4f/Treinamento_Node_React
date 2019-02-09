import React, { Component } from 'react';
import {
  Table,
  Button,
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Input,
} from 'reactstrap';

export default class ItemDebList extends Component {

  add = (index, item = {}) => {
    this.props.add(index, item);
  }

  remove = (index) => {
    if (this.props.list.length > 1) {
      this.props.remove(index);
    }
  }

  renderRows = () => {
    const list = this.props.list || [];

    return list.map((item, index) => (
      <tr key={index}>
        <td>
          <FormGroup>
            <Input type="text" id="nome" placeholder="Informe o nome" required />
          </FormGroup>
        </td>
        <td>
          <FormGroup>
            <Input type="text" id="valor" placeholder="Informe o valor" required />
          </FormGroup>
        </td>
        <td>
          <Button className="btn btn-success btn-brand icon mr-1 mb-1"
            onClick={() => this.add(index + 1, item)}>
            <i className="fa fa-plus"></i>
          </Button>
          <Button className="btn btn-danger btn-brand icon mr-1 mb-1"
            onClick={() => this.remove(index)}>
            <i className="fa fa-trash-o"></i>
          </Button>
        </td>
      </tr>
    ))
  }

  render() {

    return (
      <Card>
        <CardHeader>
          <strong>Créditos</strong>
        </CardHeader>
        <CardBody>
          <Table responsive hover>
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Valor</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    )
  }
};