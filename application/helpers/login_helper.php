<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('login'))
{
    function login()
    {
		$usuario = $_SESSION["usuario"];
		$permissao = null;
		if( isset( $usuario ) ){
			foreach($usuario as $user){
				$permissao = $user->id_perfil;
			}
			
		}else {
			header('Location: '.base_url().'login');
		}
    }   
}