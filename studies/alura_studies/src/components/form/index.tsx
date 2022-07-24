import React from 'react'
import Button from '../buttons'
import style from './Form.module.scss'
import { ITask } from '../../types/ITask'

class Form extends React.Component<{ setTask: React.Dispatch<React.SetStateAction<Array<ITask>>> }>
{
    state = {
        name: "",
        duration: ""
    }
    addTask(event: React.FormEvent) {
        event.preventDefault()
        this.props.setTask(taskList => [...taskList, this.state])
    }
    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor='tarefa'>
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={this.state.name}
                        onChange={event => {
                            const target = event.target as HTMLInputElement
                            this.setState({
                                ...this.state,
                                name: target.value
                            })
                        }}
                        placeholder='O que voce quer estudar...'
                        required 
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='tempo'>
                        Tempo
                    </label>
                    <input 
                        type="time"
                        step='1'
                        name='tempo'
                        id='tempo'
                        value={this.state.duration}
                        onChange={event => {
                            const target = event.target as HTMLInputElement
                            this.setState({
                                ...this.state,
                                duration: target.value
                            })
                        }}
                        min='00:00:00'
                        max='01:30:00'
                        required
                    />
                </div>
                <Button type="submit" content="Adicionar" />
            </form>
        )
    }
}

export default Form