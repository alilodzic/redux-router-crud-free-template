import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = ({ loading, error, children }) => {

    const handloading = () => {
        const elementType = children.type?.render?.displayName


        if (elementType === "Button") {
            const buttonClone = React.cloneElement(children, { disabled: true }, "loading...")


            return (

                <>
                    {loading ?  buttonClone  :
                        error ? (
                            <>  {children} <p>  {error} </p></>)
                            : (
                                children
                            )}
                </>
            )
        }
        return (
            <>
                {loading ? <span  ><Spinner className="position-absolute top-50 start-50 translate-middle" animation="border" /></span> :
                    error ? <div style={{ textAlign: 'center' }} > {error} </div> :
                        children}
            </>
        )
    }
    return handloading()



}

export default Loading