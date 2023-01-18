import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = ({ loading, error, children }) => {
    return (
        <div>
            {loading ? <span  ><Spinner className="position-absolute top-50 start-50 translate-middle" animation="border" /></span> :
                error ? <div style={{textAlign : 'center'}} > {error} </div> :
                    children}
        </div>
    )
}

export default Loading