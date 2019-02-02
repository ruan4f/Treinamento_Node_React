import React, { Component } from 'react';
import { 
    Table, 
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    FormGroup,
    Input,
    Label,
    Row,
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
                <Button size="lg" className="btn btn-success btn-brand icon mr-1 mb-1"><i className="fa fa-plus"></i></Button>
                <Button size="lg" className="btn btn-danger btn-brand icon mr-1 mb-1"><i className="fa fa-trash-o"></i></Button>
            </td>
        </tr>
    )
}

class ItemDebList extends Component {

    render() {
        const credsList = [{id:0,name:"",value:0}];

        return (
            <Card>
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
                        </Card>
        )
    }
}

export default ItemDebList;