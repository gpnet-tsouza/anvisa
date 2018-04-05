<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ComplexidadeModel extends CI_Model {
	
	private $tabela = 'complexidade';
	
	private $resultado;
	
	public function __construct(){
		parent::__construct();
		
	}
	
	public function all(){
		$this->resultado = $this->db->query("SELECT * FROM `{$this->tabela}`");
		return $this->resultado;
	}			
}