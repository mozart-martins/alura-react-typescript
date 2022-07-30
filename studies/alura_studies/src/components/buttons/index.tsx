import React from 'react'
import style from './Button.module.scss'

class Button extends React.Component<{ 
        type: string, 
        content: string,
        onClick?: () => void
    }> {
    render() {
        const { content, type = "button", onClick } = this.props
        return( 
            <button onClick={onClick} className={style.botao}>
                { content }
            </button>
        )
    }
}

export default Button