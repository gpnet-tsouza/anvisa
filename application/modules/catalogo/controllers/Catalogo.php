<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Catalogo extends MX_Controller {

    private $error;

	public function __construct(){
		parent::__construct();		
        $this->load->model("UnidadeModel");
        $this->load->model("ContratoModel");
		$this->load->model("CatalogoModel");
        $this->load->model("CatalogoServicoModel");        
	}
	
	public function index()
	{
		$de = $this->uri->segment(4);
		$ate = $this->uri->segment(5);
		$dados = $this->CatalogoModel->all()->result();

		$this->template->load('templates/painel/admin/layout', 'index', compact('dados'));
	}
	
	public function cadastrar(){
		$dados['unidade'] = $this->UnidadeModel->all()->result();
        $dados['contrato'] = $this->ContratoModel->all()->result();
                  
		// pega o id do ultimo catalogo ( vigigente )
		$id = $this->CatalogoModel->getLastIdCatalogo()->result();
        
        $dados['catalogo'] = $this->CatalogoModel->find($id[0]->id_catalogo)->result();                        		
		$dados['catalogo_servicos'] = $this->CatalogoServicoModel->getAllById($id[0]->id_catalogo)->result();        		
        
		$this->template->load('templates/painel/admin/layout', 'cadastro', compact('dados'));
	}
	
	public function salvar(){
				
		$dados = array(
			"id_catalogo" => null,
			"id_unidade" => $this->input->post("id_unidade"),
			"nome" => $this->input->post("nome"),
		);
		if($this->CatalogoModel->insert($dados)){
			response_error(200, "Success");
		}else{
			response_error(400, "Erro");
		}		
	}
	
	public function visualizar(){
		$id = $this->uri->segment(4);
		$dados = $this->CatalogoModel->find_view($id)->result();
		echo json_encode($dados);
	}
	
	public function deletar(){
		$id = $this->uri->segment(4);
		$this->CatalogoModel->remove($id);
	}	
	
	public function cadastrar_servico(){
		$dados['complexidade'] = $this->ComplexidadeModel->all()->result();
		$this->template->load('templates/painel/admin/layout', 'cadastro-catalogo-servico', compact('dados'));
	}
		
	public function visualizar_catalogo(){
		$id = $this->uri->segment(3);
		$dados = $this->CatalogoServicoModel->getServicoByCatalogo($id)->result();
		$this->template->load('templates/painel/admin/layout', 'visualizar', compact("dados"));
	}
		
	public function cadastrar_catalogo_servico(){
		$dados = array(
			"id_servico" => $this->input->post("id_servico"),
			"id_catalogo" => $this->input->post("id_catalogo")
		);
		$this->CatalogoServicoModel->insert($dados);
	}
	
	// Retorna o ultimo id inserido no banco na tabela catalogos
	public function get_ultimo_id(){
		$id = $this->CatalogoModel->getLastIdCatalogo()->result();
		echo json_encode($id);
	}

	public function pesquisar_catalogo(){
		$de = $this->uri->segment(4);
		$ate = $this->uri->segment(6);

		$dados = $this->CatalogoModel ->getCatalogoByDate($de, $ate)->result();				
		$this->template->load('templates/painel/admin/layout', 'pesquisa', compact('dados'));
	}

}
