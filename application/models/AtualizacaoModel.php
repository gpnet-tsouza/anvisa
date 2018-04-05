<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class AtualizacaoModel extends CI_Model {
	
	private $tabela = 'atualizacoes';
	
	private $resultado;
	
	public function __construct(){
		parent::__construct();
		
	}
	
	public function all(){
		$this->resultado = $this->db->query("SELECT * FROM atualizacoes AS at JOIN usuarios AS user ON at.id_usuario = user.id_usuario ORDER BY data_atualizacao DESC");
		return $this->resultado;
	}
	
	
	public function insert($dados = []){
		return $this->db->insert($this->tabela, $dados);
	}
	
	
}