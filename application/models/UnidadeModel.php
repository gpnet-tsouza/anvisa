<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class UnidadeModel extends CI_Model {
	
	private $tabela = 'unidades';
	
	private $resultado;
	
	
	public function __construct(){
		parent::__construct();
	}
	
	public function all(){
		$this->resultado = $this->db->query("SELECT * FROM {$this->tabela} WHERE status = 1");
		return $this->resultado;
	}
	
	
	public function insert($dados = []){
		return $this->db->insert($this->tabela, $dados);
	}
	
	
	public function row_count(){
		$this->resultado = $this->db->count_all_results($this->tabela);
		return $this->resultado;
	}
	
	public function find($id){
		$this->resultado = $this->db->get_where($this->tabela, array('id_unidade' => $id));
		return $this->resultado;
	}
	
	
	public function remove($id){
		return $this->resultado = $this->db->query("UPDATE {$this->tabela} SET status = 0 WHERE id_unidade = {$id}");
	}
	
	public function update($id, $dados = []){
		return $this->db->update($this->tabela, $dados, array("id_unidade" => $id));
	}
	
	
}