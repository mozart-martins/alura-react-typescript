import Button from "../buttons";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundo } from "../../common/utils/time";
import { ITask } from "../../types/ITask";
import { useEffect, useState } from "react";


interface Props {
    selected: ITask | undefined,
    finishTask: () => void
}


export default function Cronometro({ selected, finishTask } : Props) {

    const [time, setTime] = useState<number>()

    useEffect(() => {
        console.log("Entrou no useeffect")
        if(selected?.duration)
            setTime(tempoParaSegundo(selected.duration))
    }, [selected])

    function countDown(counter: number = 0) {
        setTimeout(() => {
            if(counter > 0) {
                setTime(counter - 1)
                countDown(counter - 1)
            }
            finishTask()
        }, 1000)
    }
    
    return (
        <div className={style.Cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o Cronometro.</p>
            <div className={style.relogioWrapper}>
                <Relogio time={time}/>
            </div>
            <Button onClick={() => countDown(time)} type="button" content="Comecar!" />
        </div>
    )
}