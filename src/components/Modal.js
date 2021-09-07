import React from 'react'

const Modal = (show) => {
    if(show == true){
        console.log(show);
        return (
            <div>
                this is popup message
            </div>
        );
    }
    else return null
}

export default Modal
