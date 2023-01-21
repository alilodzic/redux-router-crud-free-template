import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = ({ loading, error, children }) => {
    const elementType = children.type.render?.displayName
console.log(elementType)

    const handloading = () => {

console.log('first')
        if (elementType === "Button") {
            const buttonClone = React.cloneElement(children, { disapled: true }, "loading...")
            return (

                <>
                    {loading ? { buttonClone } :
                        error ? <>  {children} <p>  {error} </p></> :
                            children}
                </>
            )
        }
    }
    


    return (
        <>
            {loading ? <span  ><Spinner className="position-absolute top-50 start-50 translate-middle" animation="border" /></span> :
                error ? <div style={{textAlign : 'center'}} > {error} </div> :
                    children}
        </>
    )
}

export default Loading