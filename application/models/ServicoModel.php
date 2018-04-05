<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ServicoModel extends CI_Model {

	private $tabela = 'servicos';

	private $resultado;

	public function __construct(){
		parent::__construct();
	}

	// Lista todos os serviços com o catalogo ATIVO -------- ARRUMAR

	/*
	* Lista todos os serviços ligados
	* ao catalogo
	*/
	public function all(){
		$this->resultado = $this->db->query(" select s.id_servicos, s.item, s.resumo, s.horas, c.descricao as complexidade,  s.status
            from servicos as s
            inner join complexidade as c
            on c.id_complexidade = s.complexidade_id
            where status = 1 order by s.id_servicos desc; "); //$id);
		return $this->resultado;
	}

	/*
	* Salva os dados do serviço
	*/
	public function insert($dados = []){
                
		return $this->db->insert($this->tabela, $dados);
	}

	/*
	* Pega um serviço pelo id
	*/
	public function find($id){
		$this->resultado = $this->db->get_where($this->tabela, array('id_servicos' => $id));
		return $this->resultado;
	}

	/*
	* Atualiza um serviço pelo id
	*/
	public function update($id, $dados = []){
		return $this->db->update($this->tabela, $dados, array("id_servicos" => $id));
	}


	/*
	* Desabilita um contrato colocando
	* seu STATUS em INATIVO ( 0 )
	*/
	public function remove($id){
		//return $this->db->delete($this->tabela, array('id_servicos' => $id));
		return $this->db->query("UPDATE {$this->tabela} SET `status`= '0' WHERE `id_servicos` =  ".$id);
	}

	public function ultimos_servicos(){
		$this->resultado = $this->db->get($this->tabela, 5);
		return $this->resultado;
	}

	/*
	* Pega o número de serviços cadastrados
	*/
	public function row_count(){
		$this->resultado = $this->db->count_all_results($this->tabela);
		return $this->resultado;
	}
	/*
	* Pega o contrato ligado
	* a um catalogo e mostra na modal
	*
	*/
	public function find_view($id){
		$this->db->select("s.id_servicos, s.nome AS nome_servico, s.id_catalogo, s.QtdUST, c.id_catalogo, c.id_unidade, c.nome AS nome_catalogo");
		$this->db->join("catalogos AS c", "s.id_catalogo = c.id_catalogo", "left");
		$this->db->where("s.id_servicos", $id);
		$this->resultado = $this->db->get("{$this->tabela} AS s");
		return $this->resultado;
	}

	// Pega o último id inserido da tabela servicos
	public function getLastId(){
		$this->resultado = $this->db->query("select id_servicos from {$this->tabela} order by id_servicos desc limit 1");
		return $this->resultado;
	}

	// lista todos os catalogos ligados a unidade do usuario logado
	public function getAllServicoUsuario($id){
		$this->resultado = $this->db->query("select * from servicos join catalogos_servicos on servicos.id_servicos = catalogos_servicos.id_servico join catalogos on catalogos.id_catalogo = catalogos_servicos.id_catalogo where catalogos.id_unidade = {$id} AND catalogos.status = 1");
		return $this->resultado;
	}

	public function getAllByCatalogo($id){
		$this->resultado = $this->db->query("select *, catalogos.id_catalogo as idcatalogo from catalogos_servicos join catalogos on catalogos.id_catalogo = catalogos_servicos.id_catalogo join servicos on servicos.id_servicos = catalogos_servicos.id_servico where catalogos.id_unidade = {$id} AND catalogos.status = 1;");
		return $this->resultado;
	}

}
