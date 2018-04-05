<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class OrdemServicoModel extends CI_Model {
	
	private $tabela = 'ordens_servicos';
	
	private $resultado;
	
	public function __construct(){
		parent::__construct();
	}
	
	public function all($id_usuario){
		$this->resultado = $this->db->query("SELECT *, `{$this->tabela}`.`DataInicio` AS `DtInicio`, `{$this->tabela}`.`DataFim` AS `DtFim` FROM `{$this->tabela}` INNER JOIN `catalogos` ON `catalogos`.`id_catalogo` = `{$this->tabela}`.`catalogo_servicos_id` INNER JOIN `contratos` ON `contratos`.`id_contrato` = `catalogos`.`contrato_id_contrato` WHERE `{$this->tabela}`.`Status` = 1");
		return $this->resultado;
	}
	
	public function insert($dados = []){
		$this->db->insert($this->tabela, $dados);
		$this->resultado = $this->db->insert_id();
		return $this->resultado;
	}
	
	public function find($id){
		$this->resultado = $this->db->query("SELECT * FROM `{$this->tabela}` WHERE `id_os` = {$id}");
		return $this->resultado;
	}
	
	public function find_view($id){
		$this->resultado = $this->db->query("SELECT * FROM `{$this->tabela}` INNER JOIN `catalogos` ON `catalogos`.`id_catalogo` = `{$this->tabela}`.`id_catalogo` INNER JOIN `contratos` ON `contratos`.`id_contrato` = `catalogos`.`contrato_id_contrato` WHERE `ordens_servicos`.`id_os` = {$id}");
		return $this->resultado;
	}
	
	public function update($id, $dados = []){
		return $this->db->update($this->tabela, $dados, array("id_os" => $id));
	}
	
	public function row_count(){
		$this->resultado = $this->db->count_all_results($this->tabela);
		return $this->resultado;
	}
	
	public function remove($id){
		return $this->db->query("UPDATE `{$this->tabela}` SET `Status` = 0 WHERE `id_os` = {$id}");
	}
	
	public function teste($id){
		$this->resultado = $this->db->query("select * from catalogos inner join contratos on catalogos.id_catalogo = contratos.id_catalogo WHERE catalogos.id_catalogo = ".$id);
		return $this->resultado;
	}
	
	public function remove_servico($id){
		return $this->db->query("UPDATE `{$this->tabela}` SET `id_servico` = null WHERE id_os = ".$id);
	}
	
	
	public function getOrdemServicoByData($de, $ate){
		$this->resultado = $this->db->query("SELECT *, `{$this->tabela}`.`DataInicio` AS `DtInicio`, `{$this->tabela}`.`DataFim` AS `DtFim` FROM `{$this->tabela}` INNER JOIN `catalogos` ON `catalogos`.`id_catalogo` = `{$this->tabela}`.`catalogo_servicos_id` INNER JOIN `contratos` ON `contratos`.`id_contrato` = `catalogos`.`contrato_id_contrato` WHERE `{$this->tabela}`.`DataInicio` >= '{$de}' AND `{$this->tabela}`.`DataFim` <= '{$ate}'");
		return $this->resultado;
	}
	
	// Função responsável por listar o numero de Ordens de Serviço de acordo com a unidade do usuário logado.
	public function row_count_user($id_unidade){
		$this->db->select('id_os');
		$this->db->from($this->tabela);
		$this->db->where("id_unidade", $id_unidade);
		$this->resultado = $this->db->count_all_results();
		return $this->resultado;
	}
	
	
	public function getLastId(){
		$this->resultado = $this->db->query("SELECT id_os FROM {$this->tabela} ORDER BY id_os DESC");
		return $this->resultado;
	}
	
	/*
	* Pega todas as Orderns de Serviço relacionado 
	* ao usuário logado
	*/
	public function getAllOrdemServicoUsuario($id){
		$this->resultado = $this->db->query("select *,  ordens_servicos.DataInicio as Dt_Inicio, ordens_servicos.DataFim as Dt_Fim from ordens_servicos join contratos on contratos.id_contrato = ordens_servicos.id_contrato where ordens_servicos.id_usuario =".$id);
		return $this->resultado;
	}
	
	
}