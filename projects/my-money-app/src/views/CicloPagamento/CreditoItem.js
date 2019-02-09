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

  state = {
    nome: '',
    valor: 0
  }

  add = () => {
    this.props.add(this.state);
  }

  update = () => {
    this.props.update(this.props.index, this.state);
  }

  remove = (index) => {
    this.props.remove(index);
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {

    return (
      <tr>
        <td>
          <FormGroup>
            <Input type="text" id="nome" value={this.state.nome} placeholder="Informe o nome" />
          </FormGroup>
        </td>
        <td>
          <FormGroup>
            <Input type="text" id="valor" value={this.state.valor} placeholder="Informe o valor" />
          </FormGroup>
        </td>
        <td>
          <Button className="btn btn-success btn-brand icon mr-1 mb-1"
            onClick={() => this.add()}>
            <i className="fa fa-plus"></i>
          </Button>
          <Button className="btn btn-danger btn-brand icon mr-1 mb-1"
            onClick={() => this.remove(index)}>
            <i className="fa fa-trash-o"></i>
          </Button>
        </td>
      </tr>
    )
  }
};