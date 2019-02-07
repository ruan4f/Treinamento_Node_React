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
                    <Input type="text"
                        value={item.nome}
                        placeholder="Informe o nome" />
                </FormGroup>
            </td>
            <td>
                <FormGroup>
                    <Input type="text"
                        value={item.valor}
                        placeholder="Informe o valor" />
                </FormGroup>
            </td>
            <td>
                <FormGroup>
                    <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Input>
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
        const debtsList = [{ _id: '', name: '', value: 0, status: '' }];

        return (
            <Card>
                <CardHeader>
                    <strong>Débitos</strong>
                </CardHeader>
                <CardBody>
                    <Table responsive hover>
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Status</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {debtsList.map(ItemRow)}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        )
    }
}

export default ItemDebList;