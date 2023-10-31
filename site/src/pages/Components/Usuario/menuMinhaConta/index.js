import './index.scss'
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
//import Storage from 'local-storage';
export default function Menu(props){

    const [menuselecionado, setMenuselecionado] = useState('home');  
    const navigate = useNavigate();

    function selecionarMenu(menu){
        setMenuselecionado(menu);
    } 

    return(
        <div className='menu'>
            <Link to ='/MinhaConta' className='link-config-txt'>
                <div className='align-itens-menu'> 
                <div className='menu-itens'>
                <p className='txt-menu-adm' style={{marginRight:"0.5em"}}>Minha conta</p>  
                </div>
                </div>
            </Link>
            <Link to='/editarperfil' className='link-config-txt'>
            <div className='align-itens-menu'>
                <div className='menu-itens'>
                <p className='txt-menu-adm' style={{marginRight:"0.5em"}}>Editar perfil</p>  
                </div>
            </div>
            </Link>
            
            <Link to='/AlterarSenha' className='link-config-txt'>
                <div className='align-itens-menu'> 
                <div className='menu-itens'>
                <p className='txt-menu-adm' style={{marginRight:"0.5em"}}>Alterar senha</p>  
                </div>
                </div>
            </Link>
            <Link to='/MeusCartoes' className='link-config-txt'>
                <div className='align-itens-menu'> 
                <div className='menu-itens'>
                <p className='txt-menu-adm' style={{marginRight:"0.5em"}}>Meus cartões</p>  
                </div>
                </div>
            </Link>
            <Link to = '/MeusPedidos' className='link-config-txt'>
            <div className='align-itens-menu'> 
            <div className='menu-itens'>
            <p className='txt-menu-adm' style={{marginRight:"0.5em"}}>Meus pedidos</p>  
            </div>
            </div>
            </Link>
            <Link to ='/Feed'>
            <img src={'../../../../assets/images/Vector.png'} width={20} className='exit-icon' alt=''/>
            </Link>
            </div>
    
    )
}