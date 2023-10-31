import { useEffect, useState } from "react";
import Storage from 'local-storage'
import BotaoADM from '../../../Components/Adm/Button/index';
import './index.scss'

export default function CarrinhoItem({item: {produto: {info},quantidade } , removerItem, carregarCarrinho}){
    const [qtdProduto, setQtdProduto]= useState(quantidade);

    function Remover(){
        removerItem(info.id);
    }

    function calcularTotal(){
        const subtotal = qtdProduto * info.preco;
        return subtotal;
    }
    

    function alterarQuantidade(novaQtd){
        setQtdProduto(novaQtd);

        let carrinho = Storage('carrinho');
        let itemStorage = carrinho.find(item => item.id === info.id);
        itemStorage.quantidade = novaQtd;

        Storage('carrinho', carrinho);
    }


    return(
     <main  className="prod-caixa">
    <section className="prod-caixa-2">
      
      <div className="align-itens-row">
        <div className="align-produto-nome">
        <img src={`http://localhost:5000/${info.imagem}`} width={140}/>
        <p style={{fontFamily:'Arya-Regular', color:"#ffff", fontWeight:"100"}}>{info.nome}</p>
      </div>

      <div className="align-itens-valor-qtd-apagar">
      <div className="align-itens-column-valor-qtd-apagar">
      <p style={{fontFamily:'Arya-Regular', color:"#ffff", fontWeight:"100"}}>Total</p>
      <p style={{fontFamily:'Arya-Regular', color:"#ffff", fontWeight:"100"}}>R${calcularTotal()}</p>
      </div>  

      <div className="align-itens-column-valor-qtd-apagar">
      <p style={{fontFamily:'Arya-Regular', color:"#ffff", fontWeight:"100"}}>Quantidade</p>
      <select onChange={e => alterarQuantidade(e.target.value)} value={qtdProduto}>
            <option >1</option>
            <option >2</option>
            <option >3</option>
            <option >4</option>
            <option >5</option>
            <option >6</option>
            <option >7</option>
            <option >8</option>
            <option >9</option>
            <option >10</option>
     </select> 
     </div>     

     <div className="align-itens-column-valor-qtd-apagar" style={{paddingTop:7}}>
      <p style={{fontFamily:'Arya-Regular', color:"#ffff", fontWeight:"100"}}>Apagar</p>
      <img src={'../assets/images/trash.png'} width={30} onClick={Remover}/>
     </div> 
      </div>  
      </div>  
    </section>
    
    </main>
    )
}

