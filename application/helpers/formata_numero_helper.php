<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('formata_numero'))
{
    function formata_numero($num = '')
    {
		return number_format($num, 2, ',', '.');;
    }   
}