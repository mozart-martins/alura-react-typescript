import React from "react";
import style from './Relogio.module.scss'

interface Props {
    time: number | undefined
}

export default function Relogio({ time = 0 } : Props) {
    const minuts = Math.floor(time / 60)
    const minutsString = String(minuts).padStart(2, "0")
    const seconds = time % 60
    const secondsString = String(seconds).padStart(2, "0")

    return (
        <React.Fragment>
            <span className={style.relogioNumero}>{ minutsString.substring(0,1) }</span>
            <span className={style.relogioNumero}>{ minutsString.substring(1,2) }</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{ secondsString.substring(0,1) }</span>
            <span className={style.relogioNumero}>{ secondsString.substring(1,2) }</span>
        </React.Fragment>
    )
}