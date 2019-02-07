import React, { Component } from 'react';
import {
    Table,
    Button,
    Card,
    FormGroup,
    Input,
} from 'reactstrap';

function ItemRow(item) {
    return (
        <tr key={item.id.toString()}>
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
        const debtsList = [{ id: 0, name: "", value: 0, status: "" }];

        return (
            <Card>
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
            </Card>
        )
    }
}

export default ItemDebList;