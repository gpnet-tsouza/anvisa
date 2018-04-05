<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('atualizacao'))
{
    function atualizacao($tipo, $usuario, $data)
    {
		$ci =& get_instance();
		$ci->load->model("AtualizacaoModel");
		$ci->AtualizacaoModel->all();
		
		$dados = array(
			'usuario' => $usuario,
			'tipo_atualizacao' => $tipo,
			'data_atualizacao' => $data
		);
		
		$ci->AtualizacaoModel->insert($dados);
		
    }   
}