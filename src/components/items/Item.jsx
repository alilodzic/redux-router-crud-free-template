import {
    Button,
    ButtonGroup,
} from "react-bootstrap";



const Item = ({ el, i ,deleteItem}) => {

    return (
        <>

            <tr>
                <td>{++i} </td>
                <td>{el.title} </td>
                <td>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="success" >Edit</Button>
                        <Button variant="danger" onClick={() => window.confirm(`do you really want to delete ${el.title}`) ?  deleteItem(el.id): null} >Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>

        </>
    )
}

export default Item