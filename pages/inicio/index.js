import MenuLateral from '../../components/MenuLateral'
import Menu from '../../components/Menu'
import Conteudo from '../../components/Conteudo'
import { useState } from 'react'




export default function Inicio() {
    const [item, setItem] = useState(null)
    const [itemTheme, setItemTheme] = useState(null)
    const [menu, setMenu] = useState(["Objetivo", "Formação", "Cursos", "Conhecimentos", "Experiência", "Sobre Mim"])
    const [theme, setTheme] = useState([{
        "light": {
            "meuTop": "#fff",
            "menuLeft": "#fff"
        },
        "dark": {
            "meuTop": "#000",
            "menuLeft": "#000"
        }
    }])

console.log(itemTheme)

    return (
        <>
            <Menu handleTheme={setItemTheme}/>
            <div className='separa' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <MenuLateral menu={menu} theme={theme} handleClick={setItem} mytheme={itemTheme} />
                <Conteudo titulo={item || "Bem-Vindo"} theme={itemTheme}/>
            </div>


        </>

    )
}