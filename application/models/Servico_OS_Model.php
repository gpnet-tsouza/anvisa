<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Servico_OS_Model extends CI_Model {
	
	private $tabela = 'servico_os';
	
	private $resultado;
	
	public function __construct(){
		parent::__construct();
	}
	
	public function insert($dados = []){
		$this->db->insert($this->tabela, $dados);
	}
	
	
	public function getInfoServico(){
		$this->resultado = $this->db->query('SELECT * FROM `os` INNER JOIN `servico_os` ON `servico_os`.id_os = `os`.id INNER JOIN `servico` ON `servico_os`.id_servico = `servico`.id; ');
		return $this->resultado->result();
	}
	
	public function JoinWhere(){	
		$a = $this->db->query("SELECT * FROM servico_os INNER JOIN servico ON servico_os.id_servico = servico.id INNER JOIN os ON os.id = servico_os.id_os ;");
		
		return $a;
	}
	
	public function all(){
		$this->resultado = $this->db->get($this->tabela);
		return $this->resultado;
	}
	
	
	
}