<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class PerfilModel extends CI_Model {
	
	private $tabela = 'perfil';
	
	private $resultado;
	
	
	public function all(){
		$this->resultado =  $this->db->get($this->tabela);
		return $this->resultado;
	}
	
	public function save($dados = []){
		return $this->db->insert($this->tabela, $dados);
	}
	
	public function remove($id){
		return $this->db->delete($this->tabela, array('id_perfil' => $id));
	}
	
	public function find($id){
		$this->resultado = $this->db->get_where($this->tabela, array('id_perfil' => $id));
		return $this->resultado;
	}
	
	public function update($id, $dados = []){
		return $this->db->update($this->tabela, $dados, array("id_perfil" => $id));
	}
	
	public function row_count(){
		$this->resultado = $this->db->count_all_results($this->tabela);
		return $this->resultado;
	}
}