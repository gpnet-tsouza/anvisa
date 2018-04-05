var id_contrato;
var id_unidade;

// Formata o valor do input para o banco
function formataValorForBanco(valor){
	var valorF = valor.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
	return parseInt(valorF);
}


function getLastIdOrdemServico(){
	$.ajax({
		url: window.location.origin + "/admin/os/get-id-os",
		type: "POST",
		dataType: "json"
	}).then(function(data){
		console.log(data);
		localStorage.setItem("id_os", data[0].id_os);
	}).fail(function(err){
		console.log(err);
	});
}


function createOrdemServicoItem(id_os, id_catalogo, id_servico, qtd, valor){
	$.ajax({
		url: window.location.origin + "/admin/os/cadastrar-servico",
		type: "POST",
		dataType: "json",
		data: { "id_os": id_os, "id_catalogo": id_catalogo, "id_servico": id_servico, "qtd": qtd, "valor": valor } 
	}).then(function(data){
		console.log(data);
	}).fail(function(err){
		console.log(err);
	});
}




function createOrdemServico(id_unidade, id_contrato, ca,  dataFim, dataInicio, descricao, id_usuario, id_catalogo){
	$.ajax({
		url: window.location.origin + "/admin/os/cadastrar",
		type: "POST",
		dataType: "json",
		data: { "id_unidade": id_unidade, "ca": ca, "id_contrato": id_contrato, "DataFim": dataFim, "DataInicio": dataInicio, "descricao": descricao, "id_usuario": id_usuario, "id_catalogo": id_catalogo }
	}).then(function(data){
		console.log(data);
		//$.Notification.autoHideNotify('success','top right','Ordem de Serviço cadastrado com sucesso!');
	}).fail(function(err){
		console.log(err);
	});
}

function updateOrdemServico(id, dataFim, dataInicio, descricao){
	$.ajax({
		url: window.location.origin + "/admin/os/editar/" + id,
		type: "POST",
		dataType: "json",
		data: { "DataFim": dataFim, "DataInicio": dataInicio, "descricao": descricao }
	}).then(function(data){
		$.Notification.autoHideNotify('success','top right','Ordem de Serviço atualizada com sucesso!');
	}).fail(function(err){
		$.Notification.autoHideNotify('danger','top right','Houve um erro ao atualiza a Ordem de Serviço!');
		console.log(err);
	});
}


function getOrdemServico(id){
	$.ajax({
		url: window.location.origin + "/admin/os/visualizar/" + id,
		type: "GET",
		dataType: "json"
	}).then(function(data){
		console.log(data[0].CA)
		$("#OSCARead").html(data[0].CA);
		$("#OSValorRead").html(data[0].Valor);
		$("#OSDataInicioRead").html($.formatDateByInput(data[0].DataInicio));
		$("#OSDataFimRead").html($.formatDateByInput(data[0].DataFim));
		if(data[0].Status == 1){
			$("#OSStatusRead").html("Ativo");
		}else{
			$("#OSStatusRead").html("Inativo");
		}
	}).fail(function(err){
		console.log(err);
	});
}

function getServicoForTable(id){
	$.ajax({
		url: window.location.origin + "/admin/os/get-servicos-os",
		type: "GET",
		dataType: "json",
		data: { "id_os": id }
	}).then(function(data){
		console.log(data);
	}).fail(function(err){
		console.log(err);
	});

}


// Remove um serviço associado a uma ordem de serviço
function removeServico(id){
	$.ajax({
		url: window.location.origin + "/admin/os/remover-servico/" + id,
		type: "POST",
		dataType: "json"
	}).then(function(data){
		console.log(data)
	}).fail(function(err){
		console.log(err);
	});
}

// Envia o id do serviço e recebe como resposta o id_contrato e id_unidade
function sendIdServico(id){
	$.ajax({
		url: window.location.origin + "/admin/os/get-dados-servicos",
		type: "POST",
		dataType: "json",
		data: { "id_catalogo": id }
	}).then(function(data){
		id_contrato = data[0].id_contrato;
		id_unidade = data[0].id_unidade;
		console.log("SERVIÇO: " + data);
	}).fail(function(err){
		$.Notification.autoHideNotify('warning','top right','Você não pode cadastrar uma Ordem de Serviço sem ter nenhum contrato ou catalgo de serviço vinculado!');
		console.log(err);
	});
}


function removeOrdemServico(id){
	$.ajax({
		url: window.location.origin + "/admin/os/deletar/" + id,
		type: "GET",
		dataType: "json"
	}).then(function(data){
		console.log(data);
	}).fail(function(err){
		console.log(err);
	});
}


$(document).ready(function(){
	
	//getServicoForTable(49);
	
	// Botão cadastrar ordem de serviço	
	//$("#salvar_os").on("click", function(){
		/*var descricao = formataDataForBanco($("#descricao-os").val());
		var dataInicio = formataDataForBanco($("#datainicio").val());
		var id_usuario = $("#id_usuario").val();
		var dataFim = $("#datafim").val();
		var ca = $("#ca").val();
		var id_catalogo = $("#descricao").val();
		var id_contrato = dados.id_contrato;
		var id_unidade = dados.id_unidade;
		createOrdemServico(id_unidade, id_catalogo, ca,  dataFim, dataInicio, descricao, id_usuario);
		var id_catalogo = $("#id_catalogo").val();
		var id_os = localStorage.getItem("id_os");
		createOrdemServicoItem(id_os, id_catalogo);*/
	//});
	
	
	/*$("#salvar_os").on("click", function(){
		var descricao = $("#descricao-os").val();
		var dataInicio = formataDataForBanco($("#datainicio").val());
		var id_usuario = $("#id_usuario").val();
		var dataFim = formataDataForBanco($("#datafim").val());
		var ca = $("#ca").val();
		var id_catalogo = $("#descricao").val();
		var id_contrato = id_contrato;
		var id_unidade = id_unidade;
		var id_catalogo = $("#id_catalogo").val();
		sendIdServico(id_catalogo);
		createOrdemServico(id_unidade, id_contrato, ca,  dataFim, dataInicio, descricao, id_usuario, id_catalogo);
		getLastIdOrdemServico();
		var id_catalogo = $("#id_catalogo").val();
		var id_os = localStorage.getItem("id_os");
		var id_servico = $("#descricao").val()
		createOrdemServicoItem(id_os, id_catalogo, id_servico);
	});*/
	
	$("#salvar_os").on("click", function(){
		$.Notification.autoHideNotify('success','top right','Ordem de Serviço cadastrado com sucesso!');
	})
	
	$("#descricao-os").on("blur", function(){
		var descricao = $("#descricao-os").val();
		var dataInicio = formataDataForBanco($("#datainicio").val());
		var id_usuario = $("#id_usuario").val();
		var dataFim = formataDataForBanco($("#datafim").val());
		var ca = $("#ca").val();
		var id_catalogo = $("#descricao").val();
		var id_contrato = id_contrato;
		var id_unidade = id_unidade;
		var id_catalogo = $("#id_catalogo").val();
		createOrdemServico(id_unidade, id_contrato, ca,  dataFim, dataInicio, descricao, id_usuario, id_catalogo);
	});
	
	
	// Botão visualizar ordem de serviço
	$(".btn.btn-primary.btn-xs-responsive.ordem-servico").on("click", function(){
		var id = $(this).data("id");
		getOrdemServico(id);
	});
	
	// Botão de remover ordem de serviço
	$(".btn.btn-danger.btn-xs-responsive.ordem-servico").on("click", function(){
		var id = $(this).data("id");
		$("#deletar_ordem_servico").on("click", function(){
			removeOrdemServico(id);
		});
	});
	
	
	$("#descricao").on("change", function(){
		var id_catalogo = $("#id_catalogo").val();
		sendIdServico(id_catalogo);
		console.log(id_catalogo);
	});
	
	// Botão adicionar serviço 
	$("#add_servico").on("click", function(){
		var id_catalogo = $("#id_catalogo").val();
		sendIdServico(id_catalogo);
		getLastIdOrdemServico();
		var id_catalogo = $("#id_catalogo").val();
		var id_os = localStorage.getItem("id_os");
		var id_servico = $("#descricao").val()
		var qtd = $("#qtd").val();
		var valor = $("#valor").val();
		createOrdemServicoItem(id_os, id_catalogo, id_servico, qtd, valor);
	});
	
	
	$("#add_servico_editar").on("click", function(){
		var id_catalogo = $("#id_catalogo").val();
		sendIdServico(id_catalogo);
		var id_catalogo = $("#id_catalogo").val();
		var id_os = $("#id_os").val();
		var id_servico = $("#descricao").val()
		var qtd = $("#qtd").val();
		var valor = $("#valor").val();
		createOrdemServicoItem(id_os, id_catalogo, id_servico, qtd, valor);
	});
	
	$("#salvar-edicao-ordem-servico").on("click", function(){
		var descricao = $("#descricao-os-editar").val();
		var dataInicio = $("#datainicio").val();
		var dataFim = $("#datafim").val();
		var id = $("#id_os").val();
		updateOrdemServico(id, dataFim, dataInicio, descricao);
	});
	
	
	$("#pesquisar_ordem_servico").on("click", function(){
		
		var datainicio = $.formatDateByDatabase($("#data_inicio").val())
		var datafim = $.formatDateByDatabase($("#datafim").val())
		
		window.location = "/admin/os/de/" + datainicio + "/ate/" + datafim;
		
	});
	
	
	$(".btn.btn-danger.remover-ordem-servico").on("click", function(){
		var id = $(this).data("id");
		removeServico(id);
	});

	
	
	
});