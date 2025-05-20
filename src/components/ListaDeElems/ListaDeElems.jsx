export default function ListaDeElems({ elementos }){
    return (
        <div>
            <ol>
                {/* Esto hace que todos los elementos en "el", llamados "idx",
                sean pasados a un item de lista <li>, que forma parte de la
                lista ordenada <ol>*/}
                {/* {elementos.map((el, idx) => {
                    return (
                        <li key={idx}>
                            <div>
                                {el}
                            </div>
                        </li>
                    )
                })} */}
                {elementos.map((el, idx)=>(<li key={idx}><div>{el}</div></li>))}
            </ol>
        </div>
    )
}