import React, { Fragment } from 'react'
import spinner from './PotableEmbarrassedFrenchbulldog-small.gif'
export default function Spinner() {
    return (
        <Fragment>
            <img src={spinner} alt="Loading..." style={{width: '200px', margin:'auto', display: 'block'  }} />
        </Fragment>
    )
}
