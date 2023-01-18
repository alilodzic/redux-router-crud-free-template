import { memo } from "react";
import {
    Row,
    Col,
    Table,
} from "react-bootstrap";
import Item from "./Item";
const ListItems = ({ data,deleteItem}) => {
    return (
        <Row>
            <Col xs={{ span: 8, offset: 2 }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th style={{ width: "70%" }}>Title</th>
                            <th style={{ width: "10%" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                              {data && data.map((el, i) => <Item key={el.id} el={el} i={i} deleteItem={deleteItem} />)}  
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default memo(ListItems)