
create database Escarlate;
use Escarlate;

create table tb_artista_categoria(
id_artista_categoria int primary key auto_increment,
ds_categoria varchar(250) 
);

insert into tb_admin_login
        values (1, '54420003880', '1234');
        insert into tb_categoria(nm_categoria)
values ('cv cisto vivve');

insert into tb_produto(id_artista, id_categoria, nm_produto, ds_tam, bt_disponivel, vl_preco, qtd_produto, img_produto) 
        values ( 1, 1, 'Metallica poster Master of Puppets', '20cm x 29,7cm', true, 2, 1, 'storage/produtos/0c65c809b847132080db0d06f7ed532f');

create table tb_artista_categoria_musical (
id_artista_categoria_musical int primary key auto_increment,
ds_categoria_musical varchar(150)
);

select * from tb_produto;

create table tb_artista(
id_artista int primary key auto_increment,
id_artista_categoria_musical int,
id_artista_categoria int,
nm_artista varchar(150) ,
ds_artista varchar(850) ,
img_artista varchar(700),

foreign key (id_artista_categoria_musical) references tb_artista_categoria_musical(id_artista_categoria_musical),
foreign key (id_artista_categoria) references tb_artista_categoria(id_artista_categoria)
);

create table tb_musica(
id_musica int primary key auto_increment,
id_artista int,
nm_musica varchar(250),
li_musica varchar(800),
img_musica varchar(700),

foreign key (id_artista) references tb_artista(id_artista) ON DELETE CASCADE
);


create table tb_admin_login(
id_login_admin int primary key auto_increment,
nr_cpf varchar(50) not null,
ds_senha varchar(50) not null
);

create table tb_categoria(
id_categoria int primary key auto_increment,
nm_categoria varchar(150)
);

create table tb_produto(
id_produto int primary key auto_increment,
id_artista int,
id_categoria int,
nm_produto varchar(150) ,
ds_tam varchar(20) ,
bt_disponivel bool ,  
vl_preco double ,
qtd_produto int,
img_produto varchar(700),
foreign key (id_artista) references tb_artista(id_artista) ON DELETE CASCADE,
foreign key (id_categoria) references tb_categoria(id_categoria)
);

create table tb_usuario(
id_usuario int primary key auto_increment,
nm_usuario varchar(150) ,
ds_email varchar(150) ,
ds_senha varchar(25) ,
ds_cpf_usuario varchar(50),
ds_telefone varchar(50),
img_usuario varchar(750)
);

alter table tb_usuario
modify column ds_cpf_usuario varchar(50);

select * from tb_artista_categoria_musical;

select nm_artista, img_artista from tb_artista where nm_artista = 'qq';

create table tb_usuario_endereco(
id_usuario_end int primary key auto_increment,
id_usuario int,
nm_remetente varchar(250),
ds_estado varchar(250),
ds_cidade varchar(250), 
ds_bairro varchar(250),
ds_logradouro varchar(150),
ds_complemento varchar(150),  
ds_blocoapt varchar(150),
nr_endereco int ,
nr_cep int ,
foreign key (id_usuario) references tb_usuario(id_usuario)
);

select * from tb_usuario_endereco;

create table tb_pedido(
id_pedido int primary key auto_increment,
id_usuario int,
id_usuario_end int,
tp_pagamento varchar(150),
tp_frete varchar(150),
vl_frete decimal(15,2),
cod_notafiscal varchar(200),
dt_pedido datetime,
ds_status varchar(30),

foreign key (id_usuario) references tb_usuario(id_usuario),
foreign key (id_usuario_end) references tb_usuario_endereco(id_usuario_end)
);

create table tb_pedido_item(
id_pedido_item int primary key auto_increment,
id_pedido int,
id_produto int,
qtd_produto int,
vl_produto decimal(15,2),

foreign key (id_pedido) references tb_pedido(id_pedido),
foreign key (id_produto) references tb_produto(id_produto) ON DELETE cascade
);


create table tb_pag_cartao(
id_pag_cartao int primary key auto_increment,
id_pedido int,
id_usuario int,
nm_cartao varchar(150) ,
nr_cartao varchar(16) ,
cvv_cartao varchar(3) ,
dt_vencimento varchar(5),
foreign key (id_usuario) references tb_usuario(id_usuario),
foreign key (id_pedido) references tb_pedido(id_pedido)
);


