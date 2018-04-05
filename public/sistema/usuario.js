/*
*
* -----------------------------------------------
*		VISUALIZAR USUARIO 
* -----------------------------------------------
*
* pega o id do botão visualizar, e manda uma
* requisição para o a rota /admin/usuario via "GET" 
* que retorna os dados para o preenchimento do modal 
*
*/


function getUsuario(id){
	$.ajax({
		url: window.location.origin + "/admin/usuario/visualizar/" + id,
		type: "GET",
		dataType: "json"
	}).then(function(data){
		console.log(data);
		$("#IdUsuarioRead").html(data[0].id_usuario);
		$("#UsuarioNomeRead").html(data[0].nome);
		$("#UsuarioPerfilRead").html(data[0].descricao);
	}).fail(function(err){
		
	});
}

/*
*
* -----------------------------------------------
*		EDITAR USUARIO
* -----------------------------------------------
*
* pega o id do botão visualizar, e manda uma
* requisição para o a rota /admin/usuario/editar via "GET" 
* que retorna os dados para o preenchimento do modal 
*
*/


function getEditUsuario(id){
	$.ajax({
		url: window.location.origin + "/admin/usuario/editar/" + id,
		type: "GET",
		dataType: "json"
	}).then(function(data){
		console.log(data);
		$("#UsuarioNomeEdit").val(data[0].nome);
		$("#UnidadeUsuarioEdit").val(data[0].id_unidade);
		$("#UsuarioLoginEdit").val(data[0].usuario);
		$("#UsuarioSenhaEdit").val(data[0].senha);
		$('#UsuarioPerfilEdit').val(data[0].id_perfil);
	}).fail(function(err){
		
	});
}

function updateUsuario(id, nome, usuario, senha, id_unidade, id_perfil){
	$.ajax({
		url: window.location.origin = "/admin/usuario/editar/" + id,
		type: "POST",
		dataType: "json",
		data: { "id_unidade": id_unidade, "id_perfil": id_perfil, "nome": nome, "usuario": usuario, "senha": senha, "id_usuario": id  }
	}).then(function(data){
		console.log(data);
		$.Notification.autoHideNotify('success','top right','Usuário atualizado sucesso!');
	}).fail(function(err){
		console.log(err);
		$.Notification.autoHideNotify('danger','top right','Houve um erro ao cadastrar o usuario');
	});
}

/*
*
* -----------------------------------------------
*		DELETAR USUARIO 
* -----------------------------------------------
*
* pega o id do botão visualizar, e manda uma
* requisição para o a rota /admin/usuario/deletar via "GET" 
* que retorna os dados para o preenchimento do modal 
*
*/


function removeUsuario(id){
	$.ajax({
		url: window.location.origin + "/admin/usuario/deletar/" + id,
		type: "GET"
	}).then(function(data){
		$.Notification.autoHideNotify('success', 'top right', 'Sucesso!', 'Usuário removido com Sucesso!');
	}).fail(function(err){
		console.log(err);
		$.Notification.autoHideNotify('success', 'top right', 'Sucesso!', 'Houve um erro ao remover o usuário');
	});
}

/*
*
* -----------------------------------------------
*		CRIAR UNIDADE 
* -----------------------------------------------
*
* pega o id do botão visualizar, e manda uma
* requisição para o a rota /admin/usuario via "POST" 
* que retorna os dados para o preenchimento do modal 
*
*/


function createUsuario(nome, usuario, senha, id_unidade, id_perfil){
	$.ajax({
		url: window.location.origin = "/admin/usuario/cadastrar",
		type: "POST",
		dataType: "json",
		data: { "id_unidade": id_unidade, "id_perfil": id_perfil, "nome": nome, "usuario": usuario, "senha": senha  }
	}).then(function(data){
		console.log(data);
		$.Notification.autoHideNotify('success','top right','Usuário cadastrado sucesso!');
	}).fail(function(err){
		console.log(err);
		$.Notification.autoHideNotify('danger','top right','Houve um erro ao cadastrar o usuario');
	});
}

// Verifica se existe um login com o mesmo no do cadastrado
function verificaLogin(usuario){
	var teste;
	$.ajax({
		url: window.location.origin = "/admin/usuario/verifica-login-existente",
		type: "POST",
		dataType: "json",
		data: {"usuario": usuario}
	}).then(function(data){
		teste = data;
	}).fail(function(err){
		teste = err;
	});
	
	return teste;
}

$(document).ready(function(){
	
	
	// Validação do formulario criação de usuário
	$("#FormularioCriarUsuario").validate({
		rules: {     
			nome_usuario: {
				required: true,
				minlength: 3,
			},
			nome_departamento: {
				required: true
			},
			usuario: {
				required: true,
				minlength: 5,
				usuarioExistente: '#idUsuario'
			},
			senha: {
				required: true,
				minlength: 8
			},
			perfil_usuario: {
				required: true
			}
		},
		messages: {
			nome_usuario: {
				required: "O campo nome é obrigatório"
			},
			nome_departamento: {
				required: "O campo departamento é obrigatório"
			},
			usuario: {
				required: "O campo usuário é obrigatório"
			},
			senha: {
				required: "O campo senha é obrigatório"
			},
			perfil_usuario: {
				required: "O campo permissão é onrigatório"
			}
		}
	});
	
	
	// Validação formulario editar usuario
	$("#FormularioEditarUsuario").validate({
		rules: {
			usuario_nome_editar:{
				required: true
			},
			departamento_usuario_editar: {
				required: true
			},
			usuario_editar:{
				required: true
			},
			usuaro_senha_editar:{
				required: true
			},
			usuario_pefil_editar: {
				required: true
			}
			
		},
		messages: {
			usuario_nome_editar:{
				required: "O campo nome é obrigatório"
			},
			departamento_usuario_editar: {
				required: "O campo departamento é obrigatório"
			},
			usuario_editar:{
				required: "O campo usuário é obrigatório"
			},
			usuaro_senha_editar:{
				required: "O campo senha é obrigatório"
			},
			usuario_pefil_editar: {
				required: "O campo permissão é obrigatório"
			}
			
		}
	});
	
	
	
	// Botão cadastrar usuario
	$("#salvar_usuario").on("click", function(){
		var nome = $("#idNome").val();
		var usuario = $("#idUsuario").val();
		var senha = $("#idSenha").val();
		var id_unidade = $("#idDepto").val();
		var id_perfil = $("#idAdmin").val();
		if($("#FormularioCriarUsuario").valid() == true){
			createUsuario(nome, usuario, senha,  id_unidade, id_perfil);
		}else{
			return false;
		}
		
	
		
		
		
	});
	
	// Botão visualizar usuario
	$(".btn.btn-primary.btn-xs-responsive.usuario").on("click", function(){
		var id = $(this).data("id");
		getUsuario(id);
	});
	
		
	// Botão editar usuario ( visualização )
	$(".btn.btn-success.btn-xs-responsive.usuario").on("click", function(){
		var id = $(this).data("id");
		getEditUsuario(id);
		// Botão atualizar usuario
		$("#atualizar_usuario").click(function(){
			var nome = $("#UsuarioNomeEdit").val();
			var id_unidade = $("#UnidadeUsuarioEdit").val();
			var usuario = $("#UsuarioLoginEdit").val();
			var senha = $("#UsuarioSenhaEdit").val();
			var id_perfil = $("#UsuarioPerfilEdit").val();
			if($("#FormularioEditarUsuario").valid() == true){
				updateUsuario(id, nome, usuario, senha, id_unidade, id_perfil)
			}else{
				return false;
			}
		});
	});
	
	
	// Botão remover usuario
	$(".btn.btn-danger.btn-xs-responsive.usuario").on("click", function(){
		var id = $(this).data("id");
		$("#remover_usuario").click(function(){
			removeUsuario(id);
		});
	});
	
});