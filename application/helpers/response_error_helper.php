<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('response_error'))
{
    function response_error($tipo, $msg)
    {
		$ci =& get_instance();
		$ci->output
            ->set_content_type("application/json")
            ->set_status_header($tipo)->set_output(json_encode(array(
                'text' => $tipo,
                'type' => $msg
			)));
    }   
}