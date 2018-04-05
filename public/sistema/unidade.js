/*
*
* -----------------------------------------------
*		VISUALIZAR UNIDADE 
* -----------------------------------------------
*
* pega o id do botão visualizar, e manda uma
* requisição para o a rota /admin/unidade via "GET" 
* que retorna os dados para o preenchimento do modal 
*
*/

function getUnidade(id){
	$.ajax({
		url: "http://localhost:8000/admin/unidade/visualizar/" + id,
		type: "GET",
		dataType: "json",
	}).then(function(data){
		console.log(data);
		$("#idUnidade").html("ID: " + data[0].id_unidade);
		$("#nomeUnidade").html("Nome: " + data[0].nome);
		$("#descricaoUnidade").html("Descrição: " + data[0].descricao);
	}).catch(function(err){
		console.log(err);
	});
}

/*
*
* -----------------------------------------------
*		EDITAR UNIDADE ( VISUALIZAÇÃO )
* -----------------------------------------------
*
* pega o id do botão editar, e manda uma
* requisição para o a rota /admin/unidade/editar 
* que retorna os dados para o preenchimento do modal 
* via GET
*
*/

function getEditUnidade(id){
	$.ajax({
		url: "http://localhost:8000/admin/unidade/editar/" + id,
		type: "GET",
		dataType: "json"
	}).then(function(data){
		console.log(data);
		$("#idUnidadeEdit").val(data[0].id_unidade);
		$("#nomeUnidadeEdit").val(data[0].nome);
		$("#descricaoUnidadeEdit").val(data[0].descricao);
	}).catch(function(err){
		console.log(err);
	});
}

/*
*
* -----------------------------------------------
*		ATUALIZAR UNIDADE
* -----------------------------------------------
*
* pega o id do botão editar, junto com os campos:
* nome e descricao e manda uma requisição para a 
* rota /admin/unidade/atualizar via GET
*
*/

function updateUnidade(id, nome, descricao){
	$.ajax({
		url: "http://localhost:8000/admin/unidade/editar/" + id,
		type: "POST",
		data: { "id_unidade": id, "nome": nome, "descricao": descricao }
	}).then(function(data){
		console.log(data);
		$.Notification.autoHideNotify('success','top right','Unidade atualizada com sucesso!');
		window.setTimeout('location.reload()', 500);
	}).fail(function(err){
		console.log(err);
		$.Notification.autoHideNotify('danger','top right','Houve um erro ao atualizar a unidade');
	});
}

/*
*
* -----------------------------------------------
*		REMOVER UNIDADE 
* -----------------------------------------------
*
* pega o id do botão remover, e manda uma
* requisição para a rota /admin/unidade/deletar 
* que retorna os dados para o preenchimento do modal 
* via GET
*
*/

function removeUnidade(id){
	$.ajax({
		url: window.location.origin + "/admin/unidade/deletar/" + id,
		type: "GET"
	}).then(function(data){
		$.Notification.autoHideNotify('success','top right','Unidade removida com sucesso!');
		window.setTimeout('location.reload()', 500);
	}).fail(function(err){
		$.Notification.autoHideNotify('danger','top right','Houve um erro ao remover a unidade');
	});
}

/*
*
* -----------------------------------------------
*		CRIAR UNIDADE 
* -----------------------------------------------
*
* pega os dados dos campos: nome e descrição
* e manda para a rota /admin/unidade via "POST"
* 
*
*/

function createUnidade(nome, descricao){
	$.ajax({
		url: window.location.origin + "/admin/unidade/",
		type: "POST",
		dataType: "json",
		data: { "nome": nome, "descricao": descricao } 
	}).then(function(data){
		$.Notification.autoHideNotify('success','top right','Unidade cadastrada com sucesso!');
		window.setTimeout('location.reload()', 500);
	}).fail(function(err){
		console.log(err);
		$.Notification.autoHideNotify('danger','top right','Unidade cadastrada com sucesso!');
	});
}

$(document).ready(function(){
	
	// Validação do Formulario de criar Unidade
	$("#FormularioCriarUnidade").validate({
		rules: {     
			nome_unidade: {
				required: true,
			}
		},
		messages: {
			nome_unidade: "O campo nome é obrigatório",
		}
	});
	
	// Validação do Formulario editar Unidade
	$("#FormularioEditarUnidade").validate({
		rules: {     
			nome_unidade_editar: {
				required: true,
			}
		},
		messages: {
			nome_unidade_editar: "O campo nome é obrigatório",
		}
	});
	

	// Botão editar ( visualizar )
	$('.btn.btn-success.btn-xs-responsive.unidade').on("click",function(){
		var id =  $(this).data("id");
		getEditUnidade(id);
	});
	
	// Botão editar ( atualizar )
	$('#atualizar_unidade').on("click",function(){	
		var id = $("#idUnidadeEdit").val();
		var nome = $("#nomeUnidadeEdit").val();
		var descricao = $("#descricaoUnidadeEdit").val();
		if($("#FormularioEditarUnidade").valid() == true){
			updateUnidade(id, nome, descricao);
		} else{
			return false;
		}
	});
	
	// Botão visualizar 
	$('.btn.btn-primary.btn-xs-responsive.unidade').on("click",function(){
		var id =  $(this).data("id");
		getUnidade(id);
	});
	
	// Botão remover
	$('.btn.btn-danger.btn-xs-responsive.unidade').on("click",function(){
		var id = $(this).data("id");
		$("#remover").click(function(){
			removeUnidade(id);
		});
	});
	
	// Botão criar
	$('#salvar_unidade').on("click",function(){
		var nome = $("#nomeUnidadeCreate").val();
		var descricao = $("#descricaoUnidadeCreate").val();
		if($("#FormularioCriarUnidade").valid() == true){
			createUnidade(nome, descricao);
		} else {
			return false
		}
	});
	
});