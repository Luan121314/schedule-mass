import React from 'react';
import './styles.css'

const Alert:React.FC =({children}) =>{
    return(
        <div className="container-alert">
            <div className="content" >
                {children}
            </div>
        </div>
    )
}


export default Alert;