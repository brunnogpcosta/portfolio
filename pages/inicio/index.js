import MenuLateral from '../../components/MenuLateral'
import Menu from '../../components/Menu'
import Conteudo from '../../components/Conteudo'


export default function Inicio() {
    return (
        <>
            <Menu />

            <div className='separa' style={{display:'flex', justifyContent: 'space-between', backgroundColor: '#f3f3f3'}}>
            <MenuLateral />
            <Conteudo/>

            </div>
            

        </>

    )
}