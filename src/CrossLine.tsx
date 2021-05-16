import React from 'react'
import { useStyle } from './hooks'
import withContext from './withContext'
interface CrossLineProps {
    w : number, 
    h : number, 
    scale : number, 
    onClick : Function
}

const CrossLine : React.FC<CrossLineProps> = (props : CrossLineProps) => {
    const {crossStyle, buttonStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <div>
            <button style = {buttonStyle()} onClick = {() => props.onClick()}>
                Cross me
            </button>
            {[0, 1].map((i : number) => (<div style = {crossStyle(i)}></div>))}
        </div>
    )
}

export default withContext(CrossLine)