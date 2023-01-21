import {
    Button,
    ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";



const Item = ({ el, i ,deleteItem}) => {

    return (
        <>

            <tr>
                <td>{++i} </td>
                <td ><Button variant="link" as={Link} to={`post/${el.id}`}>{el.title}</Button>  </td>
                <td>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="success" as={Link} to={`post/${el.id}/edit`} >Edit</Button>
                        <Button variant="danger" onClick={() => window.confirm(`do you really want to delete ${el.title}`) ?  deleteItem(el.id): null} >Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>

        </>
    )
}

export default Item