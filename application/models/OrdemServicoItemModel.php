<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class OrdemServicoItemModel extends CI_Model {
	
	private $tabela = 'ordens_servicos_item';
	
	private $resultado;
	
	public function __construct(){
		parent::__construct();
	}
	
	public function insert($dados = []){
		return $this->db->insert($this->tabela, $dados);
	}
	
	
	// remove um serviço da tabela
	public function removeServicoOrdemServico($id){
		$this->db->query("SET foreign_key_checks = 0");
		return $this->db->query("DELETE FROM {$this->tabela} WHERE id = {$id}");
	}
	
	public function getServicoOrdemServicoById($id){
		$this->resultado = $this->db->query("select * from ordens_servicos_item join catalogos on catalogos.id_catalogo = ordens_servicos_item.id_catalogo join servicos on servicos.id_servicos = ordens_servicos_item.id_servico where id_os = {$id}");
		return $this->resultado;
	}
	
	
	
	
}