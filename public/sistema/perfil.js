/*
*
*-----------------------------
*	VISUALIZA PERFIL
*-----------------------------
*
*
*/

function getPerfil(id){
	$.ajax({
		url: window.location.origin + "/admin/perfil/visualizar/" + id,
		type: "GET",
		dataType: "json"
	}).then(function(data){
		$("#idPerfilRead").html("Id: " + data[0].id_perfil);
		$("#nomePerfilRead").html("Nome: " + data[0].nome);
		$("#descricaoPerfilRead").html("Descrição: " + data[0].descricao);
	}).catch(function(err){
		
	});
}

/*
*
*----------------------------------
*	EDITAR PERFIL ( VISUALIZAÇÃO )
*----------------------------------
*
*
*/

function getEditPerfil(id){
	$.ajax({
		url: window.location.origin + "/admin/perfil/editar/" + id,
		type: "GET",
		dataType: "json"
	}).then(function(data){
		$("#idPerfilEdit").val(data[0].id_perfil);
		$("#nomePerfilEdit").val(data[0].nome);
		$("#descricaoPerfilEdit").val(data[0].descricao);
	}).fail(function(err){
		console.log(err);
	});
}

function updatePerfil(id, nome, descricao){
	$.ajax({
		url: window.location.origin + "/admin/perfil/editar/" + id,
		type: "POST",
		dataType: "json",
		data: { "id_perfil": id, "nome": nome, "descricao": descricao }
	}).then(function(data){
		console.log(data);
		$.Notification.autoHideNotify('success','top right','Seu perfil foi cadastrado com sucesso!');
	}).fail(function(error) {
		//$.Notification.autoHideNotify('danger','top right','Houve um erro ao cadastrar seu perfil!');
		console.log(error);
	});
}

/*
*
*----------------------------------
*	REMOVER PERFIL 
*----------------------------------
*
*
*/

function removePerfil(id){
	$.ajax({
		url: window.location.origin + "/admin/perfil/deletar/" + id,
		type: "GET"
	}).then(function(data){
		$.Notification.autoHideNotify('success','top right','Seu perfil foi removido com sucesso!');
	}).catch(function(err){
		$.Notification.autoHideNotify('success','top right','Houve um erro ao remover seu perfil!');
	});
}


/*
*
*-----------------------------
*	CRIA PERFIL
*-----------------------------
*
*
*/

function createPerfil(nome, descricao){
	$.ajax({
		url: window.location.origin + "/admin/perfil",
		type: "POST",
		dataType: "json",
		data: { "nome": nome, "descricao": descricao }
	}).then(function(data){
		$.Notification.autoHideNotify('success','top right','Seu perfil foi cadastrado com sucesso!');
	}).catch(function(error) {
		$.Notification.autoHideNotify('danger','top right','Houve um erro ao cadastrar seu perfil!');
	});
}


$(document).ready(function(){
		
		
	
	// Validação Formulario criar perfil
	$("#FormularioCriarPerfil").validate({
		rules: {
			nome_perfil: {
				required: true
			}
		},
		messages:{
			nome_perfil: {
				required: "O campo nome é obrigatório"
			}
		}
	});
	
	
	// Validação Formulario editar perfil
	$("#FormularioEditarPerfil").validate({
		rules: {
			nome_perfil_editar: {
				required: true
			}
		},
		messages:{
			nome_perfil_editar: {
				required: "O campo nome é obrigatório"
			}
		}
	});
		
		
	// Botão cadastrar perfil
	$("#salvar_perfil").on('click', function(){
		var nome = $("#nomePerfilCriar").val();
		var descricao = $("#descricaoPerfilCriar").val();
		if($("#FormularioCriarPerfil").valid() == true){
			createPerfil(nome, descricao);		
		}else{
			return false;
		}
	});
	
	
	
	$(".btn.btn-primary.btn-xs-responsive.perfil").on('click', function(){
		var id = $(this).data("id");
		getPerfil(id);
	});
	
	// Botão visualizar perfil
	$(".btn.btn-success.btn-xs-responsive.perfil").on('click', function(){
		var id = $(this).data("id");
		getEditPerfil(id);
		// Botão editar perfil ( visualização )
		$("#atualizar_perfil").off().on('click', function(){
			var nome = $("#nomePerfilEdit").val();
			var descricao = $("#descricaoPerfilEdit").val();
			if($("#FormularioEditarPerfil").valid() == true){
				updatePerfil(id, nome, descricao);
			} else {
				return false;
			}
		});
		
	});
	
	

	
	
	// Botão deletar perfil
	$(".btn.btn-danger.btn-xs-responsive.perfil").on('click', function(){
		var id = $(this).data("id");
		$("#deletar_perfil").on('click', function(){
			removePerfil(id);
		});
	});
	
	
	
});