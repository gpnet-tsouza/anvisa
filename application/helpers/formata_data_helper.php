<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('formata_data'))
{
    function formata_data($data = '')
    {
		return date('d/m/Y', strtotime($data));
    }   
}