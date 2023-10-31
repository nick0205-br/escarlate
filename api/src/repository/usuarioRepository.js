import {con} from './connection.js'

export async function cadastrarUsuario(usuario){
    const c =
    `
    insert into tb_usuario(nm_usuario, ds_email, ds_senha)
    values(?,?,?)
    `
    const [resp] = await con.query(c, [usuario.nome, usuario.email, usuario.senha]);

    return resp.insertId;
}

export async function verificarEmail(email){
    const c =
    `
    select ds_email email
    from tb_usuario
    where ds_email = ? 
    `;
    const [resp] = await con.query(c, [email]);
    return resp[0];
}

export async function alterarSenha(id, usuario){
    const comando =
     `
    update tb_usuario
    set ds_senha = ?
    where id_usuario = ? 
    `
    const [resposta] = await con.query (comando, [usuario.senhaNova, id]);
    return resposta.affectedRows;
}

export async function verificarSenha(senha){
    const c =
    `
    select ds_senha senha
    from tb_usuario
    where ds_senha = ? 
    `;
    const [resp] = await con.query(c, [senha]);
    return resp[0];
}


export async function loginUsuario(email, senha) {
    const c =
    `
    select * 
    from tb_usuario
    where ds_email = ?
    and ds_senha = ?
    `;
    const [resp] = await con.query(c, [email, senha]);
    return resp[0];
}


export async function verPerfil (id){
    const resposta =
    `
    select 
    id_usuario  		 as id,
    nm_usuario         	 as nome,
    ds_email			 as email,
    ds_senha			 as senha,
    ds_cpf_usuario		as cpf,
    ds_telefone			as telefone,
    img_usuario			as imagem_usuario
    from tb_usuario
    where id_usuario = ?    
    `;
    const [c] = await con.query (resposta, [id])
    return c;
}


export async function TodosUsuarios(){
    const comando =
    `
    SELECT
    id_usuario  		 as id,
    nm_usuario         	 as nome,
    ds_email			 as email,
    ds_senha			 as senha,
    ds_cpf_usuario		as cpf,
    ds_telefone			as telefone,
    img_usuario			as imagem
FROM tb_usuario `
const [linhas] = await con.query(comando);
return linhas;
 }

export async function AdicionarImagem(id, imagem) {
    const comando = 
    `
    UPDATE tb_usuario 
    SET img_usuario      =  ?
    WHERE id_usuario     = ?
    `;
    const [resposta] = await con.query(comando, [ id, imagem]);
    return resposta.affectedRows;
}
   
export async function VerCartoesUsuario(idUsuario){
    const c = 
    `
    select 
    id_usuario idUsuario,
    id_pag_cartao id,
    nr_cartao   numero,
    nm_cartao  nomeCartao,
    cvv_cartao cvv,
    dt_vencimento vencimento	
    from tb_pag_cartao
    where id_usuario = ?
    `;
    const [resp] = await con.query(c,[idUsuario]);
    return resp;
}
export async function VerCartoes(id){
    const c = 
    `
    select 
    id_usuario idUsuario,
    id_pag_cartao id,
    nr_cartao   numero,
    nm_cartao  nomeCartao,
    cvv_cartao cvv,
    dt_vencimento vencimento	
    from tb_pag_cartao
    where id_pag_cartao = ?
    `;
    const [resp] = await con.query(c,[id]);
    return resp;
}

export async function ExcluirCartao(id){
    const comando= `
    delete from tb_pag_cartao
    where id_pag_cartao = ?
    `;
    const [resposta] = await con.query(comando, [id])

    return resposta.affectedRows;
}

export async function EditarCartao(id, cartao){
    const c =
    `
    update tb_pag_cartao
    set
    nm_cartao     = ?, 
    nr_cartao     = ?, 
    cvv_cartao    = ?, 
    dt_vencimento = ?
    where id_pag_cartao = ?
    `
    const [resp] = await con.query(c,[cartao.nomeCartao, cartao.numero, cartao.cvv, cartao.vencimento, id ]);
    return resp.affectedRows;
}

export async function alterarUsuario(id, usuario){
    const comando =
    `
    update tb_usuario
    set nm_usuario         	 = ?,
        ds_email			 = ?,
        ds_cpf_usuario		 =?,
        ds_telefone			 =?
        where id_usuario = ?
    `;
    const [resp] = await con.query(comando, [usuario.nome, usuario.email, usuario.cpf, usuario.telefone, id]);
    return resp.affectedRows;
}

export async function listarPedidosUsuario(id){
    const c =
    `
    select 
    id_pedido_item                      idPedidoItem,
    tb_pedido_item.id_pedido            idPedido,
    tb_pedido_item.id_produto           idProduto,
    nm_produto                          nomeProduto,
    img_produto                         imagem,
    cod_notafiscal                      notaFiscal,
    dt_pedido                           dataPedido,
    ds_status                           statusPedido
    from tb_pedido_item
    join tb_pedido on tb_pedido_item.id_pedido = tb_pedido.id_pedido 
    join tb_produto on tb_pedido_item.id_produto = tb_produto.id_produto
    where id_usuario = ? 
    `
    const [resp] = await con.query(c,[id]);
    return resp;
}

export async function compraCancelada(id) {
    const c =
        `
    update tb_pedido
    set ds_status = 'Compra cancelada!'
    where id_pedido = ? 
    `;

    const [resposta] = await con.query(c, [id])
    return resposta.affectedRows;
}
