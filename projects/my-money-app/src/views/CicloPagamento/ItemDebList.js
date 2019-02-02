import React, { Component } from 'react';
import { Table } from 'reactstrap';

function ItemRow(props) {
    const item = props.item

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
                <Button size="lg" className="btn btn-success btn-brand icon mr-1 mb-1"><i className="fa fa-plus"></i></Button>
                <Button size="lg" className="btn btn-danger btn-brand icon mr-1 mb-1"><i className="fa fa-trash-o"></i></Button>
            </td>
        </tr>
    )
}

class ItemDebList extends Component {

    render() {

        //const userList = usersData.filter((user) => user.id < 10)

        return (
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

                </tbody>
            </Table>
        )
    }
}

export default ItemDebList;