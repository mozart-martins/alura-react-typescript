import Button from "../buttons";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundo } from "../../common/utils/time";
import { ITask } from "../../types/ITask";
import { useState } from "react";


interface Props {
    selected: ITask | undefined
}


export default function Cronometro({ selected } : Props) {

    const [time, setTime] = useState<Number>()
    if(selected?.duration)
        setTime(tempoParaSegundo(selected.duration))

    return (
        <div className={style.Cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o Cronometro.</p>
            <p>
                <>
                    Tempo: {time}
                </>
            </p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Button type="button" content="Comecar!" />
        </div>
    )
}