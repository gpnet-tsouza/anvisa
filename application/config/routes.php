<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/

$route['default_controller'] = 'login';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

/*
|
|-----------------------------------------------------
|			ROTAS LOGIN
|-----------------------------------------------------
|
*/

$route['login']['get'] = 'login/index';
$route['login']['post'] = 'login/autentica';
$route['login/logout']['get'] = 'login/logout';
$route['login/bloqueia-tela']['get'] = 'login/bloqueia_tela';

/*
|
|-----------------------------------------------------
|			ROTAS PAINEL ADMINISTRADOR
|-----------------------------------------------------
|
*/

$route['admin/painel'] = 'painel/index';
$route['admin/me'] = 'admin_perfil/index';
$route['admin/me/editar/(:num)'] = 'admin_perfil/editar';
$route['admin/me/password/(:num)'] = 'admin_perfil/editar_senha';
$route['admin/me/avatar/(:num)']['post'] = 'admin_perfil/editar_avatar';

/*
|
|
|-------------------------------------------------------
|					ROTAS ORDEM SERVIÇOS ( OS )
|-------------------------------------------------------
|
|
*/

$route['admin/os']['get'] = 'os/index';
$route['admin/os/cadastrar']['get'] = 'os/cadastrar';
$route['admin/os/cadastrar']['post'] = 'os/salvar';
$route['admin/os/cadastrar-servico']['post'] = 'os/salvar_servico';
$route['admin/os/remover-servico/(:num)']['post'] = 'os/remover_servico';
$route['admin/os/atualizar-servico/(:num)']['get'] = 'os/atualizar_servico';
$route['admin/os/get-dados-servicos']['post'] = 'os/getDadosServicos';
$route['admin/os/get-servicos-os']['get'] = 'os/getServicoOrdemServico';
$route['admin/os/visualizar/(:num)']['get'] = 'os/visualizar';
$route['admin/os/editar/(:num)']['get'] = 'os/editar';
$route['admin/os/editar/(:num)']['post'] = 'os/atualizar';
$route['admin/os/deletar/(:num)']['get'] = 'os/deletar';
$route['admin/os/deletar-servicos/(:num)']['get'] = 'os/deletar_servico';
// Pesquisa ordem de serviço por data
$route['admin/os/de/(:any)/ate/(:any)']['get'] = 'os/pesquisar_ordem_servico';
$route['admin/os/get-id-os']['post'] = 'os/getLastId';

/*
|
|
|-------------------------------------------------------
|					ROTAS CATALOGO
|-------------------------------------------------------
|
|
*/

$route['admin/catalogo']['get'] = 'catalogo/index';
$route['admin/catalogo/de/(:any)/ate/(:any)']['get'] = 'catalogo/pesquisar_catalogo';
$route['admin/catalogo/(:num)']['get'] = 'catalogo/visualizar_catalogo';

$route['admin/catalogo/cadastrar']['get'] = 'catalogo/cadastrar';
$route['admin/catalogo/deletar/(:num)']['get'] = 'catalogo/deletar';
$route['admin/catalogo/visualizar/(:num)']['get'] = 'catalogo/visualizar';
$route['admin/catalogo/cadastrar-servico']['get'] = 'catalogo/cadastrar_servico';
$route['admin/catalogo/editar/(:num)']['get'] = 'servico/editar';
//$route['admin/catalogo/editar/(:num)']['post'] = 'servico/atualizar';
$route['admin/catalogo/cadastrar']['post'] = 'catalogo/salvar';
$route['admin/catalogo/cadastrar-servico']['post'] = 'servico/salvar';
$route['admin/catalogo/cadastrar-catalogo-servico']['post'] = 'catalogo/cadastrar_catalogo_servico';
$route['admin/catalogo/get-id-catalogo']['post'] = 'catalogo/get_ultimo_id';

/*
|
|
|-------------------------------------------------------
|					ROTAS UNIDADE
|-------------------------------------------------------
|
|
*/

$route['admin/unidade']['get'] = 'unidade/index';
$route['admin/unidade']['post'] = 'unidade/salvar';
$route['admin/unidade/editar/(:num)']['get'] = 'unidade/editar';
$route['admin/unidade/editar/(:num)']['post'] = 'unidade/atualizar';
$route['admin/unidade/visualizar/(:num)']['get'] = 'unidade/visualizar';
$route['admin/unidade/deletar/(:num)']['get'] = 'unidade/deletar';

/*
|
|
|-------------------------------------------------------
|					ROTAS CONTRATO
|-------------------------------------------------------
|
|
*/

$route['admin/contrato/?(:num)?/?(:num)?']['get'] = 'contrato/index';
$route['admin/contrato']['post'] = 'contrato/salvar';
$route['admin/contrato/visualizar/(:num)']['get'] = 'contrato/visualizar';
$route['admin/contrato/editar/(:num)']['get'] = 'contrato/editar';
$route['admin/contrato/atualizar/(:num)']['post'] = 'contrato/atualizar';
$route['admin/contrato/deletar/(:num)']['get'] = 'contrato/deletar';
// Rota de pesquisa por Data
$route['admin/contrato/de/(:any)/ate/(:any)']['get'] = 'contrato/pesquisar_contrato';
$route['admin/contrato/']['get'] = 'contrato/pesquisar_contrato';

/*
|
|
|-------------------------------------------------------
|					ROTAS PERFIL
|-------------------------------------------------------
|
|
*/
$route['admin/perfil']['get'] = 'perfil/index';
$route['admin/perfil']['post'] = 'perfil/salvar';
$route['admin/perfil/visualizar/(:num)']['get'] = 'perfil/visualizar';
$route['admin/perfil/editar/(:num)']['get'] = 'perfil/editar';
$route['admin/perfil/editar/(:num)']['post'] = 'perfil/atualizar';
$route['admin/perfil/deletar/(:num)']['get'] = 'perfil/deletar';

/*
|
|
|-------------------------------------------------------
|					ROTAS USUÁRIO
|-------------------------------------------------------
|
|
*/
$route['admin/usuario']['get'] = 'usuario/index';
$route['admin/usuario/cadastrar']['get'] = 'usuario/cadastrar';
$route['admin/usuario/cadastrar']['post'] = 'usuario/salvar';
$route['admin/usuario/visualizar/(:num)']['get'] = 'usuario/visualizar';
$route['admin/usuario/editar/(:num)']['get'] = 'usuario/editar';
$route['admin/usuario/editar/(:num)']['post'] = 'usuario/atualizar';
$route['admin/usuario/deletar/(:num)']['get'] = 'usuario/deletar';
$route['admin/usuario/verifica-usuario']['post'] = 'usuario/verificaLogin';

/*
|
|
|-------------------------------------------------------
|					ROTAS SERVIÇOS
|-------------------------------------------------------
|
|
*/
$route['admin/servico']['get'] = 'servico/index';
$route['admin/servico']['post'] = 'servico/salvar';
$route['admin/servico/cadastrar']['get'] = 'servico/cadastrar';
$route['admin/servico/salvar']['post']  = 'servico/salvar';
$route['admin/servico/atualizar/(:num)']['post']  = 'servico/atualizar';

$route['admin/servico/visualizar/(:num)']['get'] = 'servico/visualizar';
$route['admin/servico/editar/(:num)']['get'] = 'servico/editar';
//$route['admin/servico/editar/(:num)']['post'] = 'servico/atualizar';
$route['admin/servico/deletar/(:num)']['get'] = 'servico/deletar';
$route['admin/servico/get-id-servico']['post'] = 'servico/get_ultimo_id';

/*
|
|
|-------------------------------------------------------
|					ROTAS USUÁRIO ( ME )
|-------------------------------------------------------
|
|
*/
$route['me']['get'] = 'me/index';

	/*
	*------------------------------------------------------------
	*				ROTAS ORDEM DE SERVIÇO ( USUÁRIO )
	*-----------------------------------------------------------
	*/

	$route['usuario/os']['get'] = 'usuario_ordem_servico/index';
	$route['usuario/os/visualizar/(:num)']['get'] = 'usuario_ordem_servico/visualizar';
	$route['usuario/os/editar/(:num)']['get'] = 'usuario_ordem_servico/editar';
	$route['usuario/os/cadastrar']['get'] = 'usuario_ordem_servico/cadastrar';
	$route['usuario/os/cadastrar']['post'] = 'usuario_ordem_servico/salvar';
	$route['usuario/os/dados-servicos/(:num)']['get'] = 'usuario_ordem_servico/getDadosServicos';

	/*
	*------------------------------------------------------------
	*				ROTAS CONTRATO ( USUÁRIO )
	*-----------------------------------------------------------
	*/

	$route['usuario/contrato']['get'] = 'usuario_contrato/index';
	$route['usuario/contrato']['post'] = 'usuario_contrato/salvar';
	$route['usuario/contrato/visualizar/(:num)']['get'] = 'usuario_contrato/visualizar';
	$route['usuario/contrato/editar/(:num)']['get'] = 'usuario_contrato/editar';
	$route['usuario/contrato/editar/(:num)']['post'] = 'usuario_contrato/atualizar';
