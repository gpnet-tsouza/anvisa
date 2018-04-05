<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CatalogoServicoModel extends CI_Model {
	
	private $tabela = 'catalogos';
	
	private $resultado;
	
	public function __construct(){
		parent::__construct();
		$this->load->database();
	}
	
	public function insert($dados = []){
		return $this->db->insert($this->tabela, $dados);
	}
	
	public function getAllById($id){
        
		$this->resultado = $this->db->query(" select cat.id_catalogo, cat.nome, cat.datacriacao, 
        s.impacto, s.resumo, s.item, s.formulacaoDeValor, s.custoUnitario, s.horas, s.descricao, s.complexidade_id
        ,s.id_servicos ,u.descricao, c.descricao as complexidade from catalogos cat 
        inner join catalogos_servicos cs 
        on cat.id_catalogo = cs.id_catalogo 
        inner join servicos s
        on s.id_servicos = cs.id_servico
        inner join unidades u
        on cat.id_unidade = u.id_unidade
        inner join complexidade c
        on s.complexidade_id = ". $id);
        
		return $this->resultado;
	}
	
	// retorna o id do servico cadastrado
	public function getIdServicoSelecionado(){
		$this->resultado = $this->db->query(" select id from {$this->tabela} where id_catalogo = {$id_catalogo} AND id_servico = {$id_servico} ");
		return $this->resultado;
	}
	
	// retorna todos os serviços do catalogo selecionado
	public function getServicoByCatalogo($id){
		$this->resultado = $this->db->query("SELECT * FROM {$this->tabela} INNER JOIN catalogos ON catalogos.id_catalogo = catalogos_servicos.id_catalogo join servicos ON catalogos_servicos.id_servico = servicos.id_servicos WHERE catalogos_servicos.id_catalogo = {$id}");
		return $this->resultado;
	}
}