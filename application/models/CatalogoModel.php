<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CatalogoModel extends CI_Model {
	
	private $tabela = 'catalogos';
	
	private $resultado;
	
	public function __construct(){
		parent::__construct();
		$this->load->database();
	}
	
	public function all(){
		$this->resultado = $this->db->query("SELECT cat.id_catalogo, cat.id_unidade, cat.nome catalogo, 
			cat.status, cat.datacriacao, cat.contrato_id_contrato,cont.descricao contrato, uni.nome unidade
			FROM catalogos as cat
			left JOIN contratos as cont
			ON cat.contrato_id_contrato = cont.id_contrato
			left join unidades as uni
			on cat.id_unidade = uni.id_unidade
			WHERE cont.status = 1 
			ORDER BY cat.id_catalogo desc ");
		
		return $this->resultado;
	}
	
	public function insert($dados = []){
		$this->db->insert($this->tabela, $dados);
		$ultimo_id = $this->db->insert_id();
		
		return $this->updateCatalogoVigente($ultimo_id);
	}
	
	public function find($id){
		$this->resultado = $this->db->query("SELECT * FROM `{$this->tabela}` WHERE `id_catalogo` = {$id}");
		return $this->resultado;
	}
	
	public function find_view($id){
		$this->resultado = $this->db->query("select *, catalogos.nome AS catalogo_nome, unidades.descricao AS descricao_unidade, unidades.nome AS unidade_nome from catalogos inner join unidades on catalogos.id_unidade = unidades.id_unidade where id_catalogo = ".$id);
		return $this->resultado;
	}
	
	public function row_count(){
		$this->resultado = $this->db->count_all_results($this->tabela);
		return $this->resultado;
	}
		
	public function getLastIdCatalogo(){
		$this->resultado = $this->db->query("select id_catalogo from {$this->tabela} order by id_catalogo desc limit 1");
		return $this->resultado;
	}
	
	// Desativa todos os catalgos após a inserção de um novo
	private function updateCatalogoVigente($id){
		$this->db->query("");
		return $this->db->query("UPDATE `{$this->tabela}` SET `status` = 0 WHERE `id_catalogo` <> {$id}");
	}
	
	public function getServicosForInsert($id){
		$dados = [];
		$servicos = $this->db->query("SELECT id_servico FROM catalogos_servicos WHERE id_catalogo = {$id}");
		foreach($servicos->result() as $servico){
			$dados = $servico;
		}
		
		print_r($dados);
	}
	
	/*
	* Pega todos os catalogos
	* relacionados a Unidade do
	* usuário logado
	*/
	public function getAllCatalogoUsuario($id){
		$this->resultado = $this->db->query("SELECT * FROM `{$this->tabela}` WHERE id_unidade = ".$id);
		return $this->resultado;
	}

	public function getCatalogoByDate($de, $ate){

		if ((empty($de) and empty($ate)) ||  (trim($de) == '0000-00-00' and trim($ate) == '0000-00-00')  ) {			
			$this->resultado = $this->db->query("SELECT cat.id_catalogo, cat.id_unidade, cat.nome catalogo, 
			cat.status, cat.datacriacao, cat.contrato_id_contrato,cont.descricao contrato, uni.nome unidade
			FROM catalogos as cat
			left JOIN contratos as cont
			ON cat.contrato_id_contrato = cont.id_contrato
			left join unidades as uni
			on cat.id_unidade = uni.id_unidade
			WHERE cont.status = 1 
			ORDER BY cat.id_catalogo desc ");			
		}
		else{		
			$this->resultado = $this->db->query("SELECT cat.id_catalogo, cat.id_unidade, cat.nome catalogo, 
			cat.status, cat.datacriacao, cat.contrato_id_contrato,cont.descricao contrato, uni.nome unidade
			FROM catalogos as cat
			left JOIN contratos as cont
			ON cat.contrato_id_contrato = cont.id_contrato
			left join unidades as uni
			on cat.id_unidade = uni.id_unidade
			WHERE cont.status = 1 and cat.datacriacao >= '{$de}' and cat.datacriacao <= '{$ate}' 
			ORDER BY cat.id_catalogo desc ");
		}	

		return $this->resultado;
	}
	
}