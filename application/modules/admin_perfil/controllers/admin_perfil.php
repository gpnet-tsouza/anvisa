<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_Perfil extends MX_Controller {
	
	
	public function __construct(){
		parent::__construct();
		$this->load->model('ContratoModel');
		$this->load->model('CatalogoModel');
		$this->load->model('UsuarioModel');
	}
	
	public function index(){
		//$ordem_servico = $this->OrdemServicoModel->all();
		$usuario = $this->session->userdata("usuario");
		$id_usuario = 0;
		$id_unidade = 0;
		$dados = [];
		foreach($usuario as $user){
			$id_usuario = $user->id_usuario;
			$id_unidade = $user->id_unidade;
			$dados['nome'] = $user->nome;
		}
		
		
		$dados = $this->ContratoModel->getContratoUsuario($id_usuario)->result();
		$catalogos = $this->CatalogoModel->getAllCatalogoUsuario($id_unidade)->result();
		// pega os dados pessoais do usuario logado
		$dados_usuario = $this->UsuarioModel->getInfoUsuarioById($id_usuario)->result();
		$this->template->load('templates/painel/admin/layout', 'index', compact('dados', 'catalogos', 'dados_usuario', 'teste'));
	}
	
	public function editar(){
		$id = $this->uri->segment(4);
		
		$dados = $this->input->get(null, true);
		
		if($this->UsuarioModel->update($id, $dados)){
			response_error(200, "Success");
		}else{
			response_error(400, "Error");
		}
		
	}
	
	public function editar_senha(){
		$id = $this->uri->segment(4);
		$dados = $this->input->get("nova_senha");
		if($this->UsuarioModel->updateSenha($id, $dados)){
			response_error(200, "Success");
		}else{
			response_error(400, "Error");
		}
		
		
	}
		
	public function editar_avatar(){
		$id = $this->uri->segment(4);
		$configuracao = array(
			'upload_path'   => './upload/',
			'allowed_types' => 'jpeg|png',
			'file_name'     => $id.'.jpeg',
			'max_size'      => '500',
			'overwrite' => TRUE
		);
		$nome_imagem = $id.'.jpeg';
		$this->load->library('upload');
		$this->upload->initialize($configuracao);
		$this->upload->do_upload('avatar');
		$this->UsuarioModel->updateAvatar($id, $nome_imagem);
		redirect("/admin/me");
		
	}
			
}