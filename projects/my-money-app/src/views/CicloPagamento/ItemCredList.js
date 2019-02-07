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

const ItemRow = (item) => {
  return (
    <tr key={item._id}>
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
        <Button className="btn btn-success btn-brand icon mr-1 mb-1"><i className="fa fa-plus"></i></Button>
        <Button className="btn btn-danger btn-brand icon mr-1 mb-1"><i className="fa fa-trash-o"></i></Button>
      </td>
    </tr>
  )
}

class ItemDebList extends Component {

  render() {
    const credsList = [{ _id: '', name: '', value: 0 }];

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
              {credsList.map(ItemRow)}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    )
  }
}

export default ItemDebList;