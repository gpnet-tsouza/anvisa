<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Contrato extends MX_Controller {

	private $error;

	public function __construct(){
		parent::__construct();
		$this->load->model("ContratoModel");
		$this->load->model("CatalogoModel");
		$this->load->model("AtualizacaoModel");
		//login();
	}

	public function index()
	{		
		$de = $this->uri->segment(4);
		$ate = $this->uri->segment(5);
		$data = $this->ContratoModel->all()->result();

		$this->template->load('templates/painel/admin/layout', 'index', compact('data'));
	}

	public function salvar()
	{	

		$dados = $this->input->post(null, true);

		$usuario = $this->session->userdata("usuario");
		
		$update = array("usuario" => $usuario[0]->nome, "tipo_atualizacao" => "Novo Contrato", "data_atualizacao" => date("Y/m/d"), "id_usuario" => $usuario[0]->id_usuario);

		if($this->ContratoModel->insert($dados)){					
			response_error(201, "Succes");
		}else{
			response_error(500, "Error");
		}
	}

	public function visualizar(){
		$id = $this->uri->segment(4);
		$dados = $this->ContratoModel->GetById($id);
		echo json_encode($dados);
	}

	public function editar(){

		$id = $this->uri->segment(4);
		$dados = $this->ContratoModel->GetById($id);
		echo json_encode($dados);
	}

	public function atualizar(){
	
		$id = $this->input->post("id_contrato");
		$dados = $this->input->post(null, TRUE);

		$usuario = $this->session->userdata("usuario");	

		$update = array("usuario" => $usuario[0]->nome, "tipo_atualizacao" => "Novo Contrato", "data_atualizacao" => date("Y/m/d"), "id_usuario" => $usuario[0]->id_usuario);

		if($this->ContratoModel->update($id, $dados)){
			$this->AtualizacaoModel->insert($update);
			response_error(201, "Succes");
		}else{
			response_error(500, "Succes");
		}
	}

	public function deletar(){
		$id = $this->uri->segment(4);
		$usuario = $this->session->userdata("usuario");
		$update = array("usuario" => $usuario[0]->nome, "tipo_atualizacao" => "Remoção de Contrato", "data_atualizacao" => date("Y/m/d"), "id_usuario" => $usuario[0]->id_usuario);
		if($this->ContratoModel->remove($id)){
			$this->AtualizacaoModel->insert($update);
			response_error(201, "Succes");
		}else{
			response_error(500, "Error");
		}
	}

	public function pesquisar_contrato(){
		$de = $this->uri->segment(4);
		$ate = $this->uri->segment(6);

		$dados = $this->ContratoModel->getContratoByDate($de, $ate)->result();				
		$this->template->load('templates/painel/admin/layout', 'pesquisa', compact('dados'));
	}

}
