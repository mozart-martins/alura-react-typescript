import style from '../List.module.scss'

export default function Item({name, duration}: { name: string, duration: string }) {
    return (
        <li className={style.item}>
            <h3>
                {name}
            </h3>
            <span>
                {duration}
            </span>
        </li>
    )
}

// export default function Item(task: { name: string, duration: string }) {
    // const { name, duration } = task
//     return (
//         <li className={style.item}>
//             <h3>
//                 {name}
//             </h3>
//             <span>
//                 {duration}
//             </span>
//         </li>
//     )
// }