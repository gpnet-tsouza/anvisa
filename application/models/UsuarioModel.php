<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class UsuarioModel extends CI_Model {
	
	private $tabela = 'usuarios';
	
	private $resultado;
	
	public function __construct(){
		parent::__construct();
		
	}
	
	public function all(){
		$this->db->select("user.id_usuario, user.nome, user.id_perfil, user.id_unidade, p.id_perfil, p.descricao");
		$this->db->from("usuarios AS user");
		$this->db->join('perfil AS p', 'p.id_perfil = user.id_perfil', 'left');
		$this->resultado = $this->db->get();
		return $this->resultado;
	}
	
	public function login($email, $senha){
		$this->resultado = $this->db->where("usuario", $email)->where("senha", $senha)->get('usuarios');
		return $this->resultado;
	}
	
	public function insert($dados = []){
		return $this->db->insert($this->tabela, $dados);
	}
	
	public function find($id){
		$this->db->select ("u.id_usuario  , u.nome, u.senha, u.usuario , u.id_unidade, p.id_perfil , p.descricao ");
		$this->db->join("perfil AS p" , "p.id_perfil = u.id_perfil", "left");
		$this->db->where("u.id_usuario", $id);
		$this->resultado = $this->db->get("{$this->tabela} AS u");
		return $this->resultado;
	}
	
	public function remove($id){
		return $this->db->delete($this->tabela, array("id_usuario" => $id));
	}
	
	public function update($id, $dados = []){
		return $this->db->update($this->tabela, $dados, array("id_usuario" => $id));
	}
	
	public function verificaLoginExistente($usuario){
		$this->resultado = $this->db->query("SELECT * FROM {$this->tabela} WHERE `usuario` = '{$usuario}'");
		return $this->resultado;
	}
	
	// Pega as informções pessoais do usuario logado
	public function getInfoUsuarioById($id){
		$this->resultado = $this->db->get_where($this->tabela, array("id_usuario" => $id));
		return $this->resultado;
	}
	
	public function updateSenha($id, $dados){
		return $this->db->query("UPDATE {$this->tabela} SET senha = {$dados} WHERE id_usuario = {$id}");
	}
	
	public function updateAvatar($id, $img){
		return $this->db->query("UPDATE {$this->tabela} SET avatar = '{$img}' WHERE id_usuario = {$id}");
	}
	
}