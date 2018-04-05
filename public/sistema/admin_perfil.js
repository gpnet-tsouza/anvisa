/*
*-------------------------------------
*	ATUALIZAR DADOS PESSOAIS 
*-------------------------------------
*
*/

function updateDadosPessoais(id, nome, sobrenome, dataNasc, cidade, email){
	$.ajax({
		url: window.origin + "/admin/me/editar/" + id,
		type: "GET",
		dataType: "json",
		data: { "id_usuario": id, "nome": nome, "sobrenome": sobrenome, "DataNascimento": dataNasc, "cidade": cidade, "email": email }
	}).then(function(data){
		console.log(data);
		$.Notification.autoHideNotify('success','top right','Dados atualizados com sucesso!');
	}).fail(function(err){
		$.Notification.autoHideNotify('danger','top right','Houve um erro ao atualizar seus dados!');
		console.log(err);
	});
}

function updateSenha(id, senha){
	$.ajax({
		url: window.location.origin + "/admin/me/password/" + id,
		type: "GET",
		dataType: "json",
		data: { "nova_senha": senha }
	}).then(function(data){
		$.Notification.autoHideNotify('success','top right','Senha atualiza com sucesso!');
		console.log(data);
	}).fail(function(err){
		$.Notification.autoHideNotify('danger','top right','Hove um erro ao atualizar sua senha!');
		console.log(err);
	});
}

function updateAvatar(foto){
	$.ajax({
		url: window.location.origin + "/admin/me/avatar/",
		type: "POST",
		async : false,
        cache : false,
        contentType : false,
        processData : false,
		data: foto 
	}).then(function(data){
		console.log(data);
	}).fail(function(err){
		console.log(err);
	});
}


$(document).ready(function(){
	
	
	$("#FormularioEditarSenhaAdmin").validate({
		rules: {
			senha_antiga: {
				required: true
			},
			senha_nova: {
				required: true,
			},
			senha_confirmar: {
				required: true,
				equalTo: '#senha_nova'
			}
		},
		messages: {
			senha_nova: {
				required: "O campo nova senha é obrigatório"
			},
			senha_confirmar: {
				required: "O campo confirmar senha é obrigatório",
				equalTo: "As senhas estão diferentes"
			},
			senha_antiga: {
				required: "O campo senha antiga é obrigatório"
			}
		}
	});
	
	
		
	$("#showtoast").on("click", function(){
		var id_usuario = $("#id_usuario").val();
		var nome = $("#nome").val();
		var sobrenome = $("#sobrenome").val();
		var dataNasc = $("#datepicker-autoclose").val();
		var email = $("#email").val();
		var cidade = $("#cidade").val();
		
		updateDadosPessoais(id_usuario, nome, sobrenome, dataNasc, cidade, email);
		
	});
	
	
	$("#enviarsenha").on("click", function(){
		var id_usuario = $("#id_usuario").val();
		var senha = $("#senha_nova").val();
		if($("#FormularioEditarSenhaAdmin").valid()){
			updateSenha(id_usuario, senha);
		}else{
			return false;
		}
	});
		
	
	
})