import React from 'react'
import style from './Button.module.scss'

class Button extends React.Component<{ type: string, content: string }> {
    render() {
        const { content, type = "button" } = this.props
        return( 
            <button className={style.botao}>
                { content }
            </button>
        )
    }
}

export default Button