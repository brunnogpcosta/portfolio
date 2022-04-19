import MenuLateral from '../../components/MenuLateral'
import Menu from '../../components/Menu'
import Conteudo from '../../components/Conteudo'
import { useState } from 'react'




export default function Inicio() {
    const [item, setItem] = useState(null)
    const [menu, setMenu] = useState(["Sobre Mim", "Item B", "Item C", "Item D", "Item E", "Item F"])

    return (
        <>
            <Menu />
            <div className='separa' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <MenuLateral menu={menu} handleClick={setItem} />
                <Conteudo titulo={item || "Bem-Vindo"} />
            </div>


        </>

    )
}