import MenuLateral from '../../components/MenuLateral'
import Menu from '../../components/Menu'
import Conteudo from '../../components/Conteudo'
import { useState } from 'react'




export default function Inicio() {
    const [item, setItem] = useState(null)
    const [menu, setMenu] = useState(["Objetivo", "Formação", "Cursos", "Conhecimentos", "Experiência", "Sobre Mim"])

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