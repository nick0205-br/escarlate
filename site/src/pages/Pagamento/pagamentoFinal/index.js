import { Navigate, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ToastContainer } from "react-toastify"
import BotaoADM from "../../Components/Adm/Button"
import './index.scss'

export default function FinalPagamento(){

    return (
        <main className="finalizacao">
            <ToastContainer />

            <header className='header'>
                <div className='sub-header-1'>
                    <Link to='/Feed'>
                        <motion.img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'
                            whileHover={{ scale: 1.1 }}
                            onHoverStart={e => { }}
                            onHoverEnd={e => { }}
                        />
                    </Link>
                </div>
                <div>

                </div>
                <p>Finalização do pagamento</p>
            </header>
        <div className="ass">
            <h1>Pagamento finalizado com sucesso!</h1>
            <Link to='/Feed'>
            <BotaoADM nome='Continuar comprando'/>
            </Link>
            
            </div>
        </main>
    )
        
    
}