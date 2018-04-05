<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ContratoModel extends CI_Model {

	private $tabela = 'contratos';

	private $resultado;

	public function __construct(){
		parent::__construct();
		$this->load->database();
	}

	// Lista apenas contratos com o catalogo ativo
	public function all(){
			
		$this->db->select(" id_contrato, descricao, valorUst, DataInicio, DataFim, status ");
		$this->db->from("contratos");		
		$this->db->where("status", 1);
		$this->db->order_by(" id_contrato desc");			
		$sql = $this->db->get_compiled_select();		 	
		$this->resultado = $this->db->query($sql);
		
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
		$this->resultado = $this->db->query("SELECT * FROM contratos WHERE contratos.id_contrato =  '{$id}' ");
		return $this->resultado;
	}

	// Desabilita o contrato
	public function remove($id){
		//return $this->db->delete($this->tabela, array("id_contrato" => $id));
		return $this->db->query("UPDATE {$this->tabela} SET `status` = 0 WHERE `id_contrato` = ".$id);
	}

	// Atualiza o contrato
	public function update($id, $dados = []){
			
		return $this->db->update($this->tabela, $dados, array("id_contrato" => $id));
	}

	// Pesquisa por contrato através da data
	public function getContratoByDate($de, $ate){

			if ((empty($de) and empty($ate)) ||  (trim($de) == '0000-00-00' and trim($ate) == '0000-00-00')  ) {			
				$this->db->from("contratos");
				$this->db->where("status", 1);
				$this->db->order_by("id_contrato", "desc");
				$sql = $this->db->get_compiled_select();		 	
				$this->resultado = $this->db->query($sql);				
			}
			else{		
				$this->db->from("contratos");
				$this->db->where("DataInicio >=", $de);
				$this->db->where("DataInicio <=", $ate);
				$this->db->where("status", 1);
				$this->db->order_by("id_contrato", "desc");
				$sql = $this->db->get_compiled_select();		 	
				$this->resultado = $this->db->query($sql);
			}	
	
		return $this->resultado;
	}

	public function getContratoUsuario($id){
		$this->resultado = $this->db->query("select *, contratos.Status as status_contrato from usuarios join catalogos on catalogos.id_unidade = usuarios.id_unidade join contratos on contratos.id_catalogo = catalogos.id_catalogo where usuarios.id_usuario = ".$id);
		return $this->resultado;
	}

	public function GetById($id){
		if(is_null($id))
			return false;

		$this->db->where('id_contrato',$id);
		$query = $this->db->get($this->tabela);

		if($query->num_rows() > 0){
			return $query->row_array();
		}
		else {
			return null;
		}
	}

}
