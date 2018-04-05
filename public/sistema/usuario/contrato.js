// Formata o valor do input para o banco
function formataValorForBanco(valor){
	var valorF = valor.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
	return parseInt(valorF);
}

// Formata a data do banco para o input
function formataDataByBanco(data){
	var dataF = data.split("-");
	return dataF[2] + "/"+ dataF[1] + "/" + dataF[0];
}

// Formata a data do input para o banco
function formataDataForBanco(data){
	var dataF = data.split("/");
	return dataF[2] + "-" + dataF[1] + "-" + dataF[0];
}

$(document).ready(function(){

	// Botão cadastro de contrato
	$("#cadastrar_contrato").on("click", function(){
		var id_catalogo = $("#IdCatalogoContrato").val();
		var valor = $("#valorUST").val();
		var dt_inicio = formataDataForBanco($("#DataInicioContratoCriar").val());
		var dt_fim = formataDataForBanco($("#DataFimContratoCriar").val());
		//var status = $("#StatusContratoCriar").val();
		createContrato(id_catalogo, valor, dt_inicio, dt_fim, status);
	});

	// Botão visualizar contrato
	$(".btn.btn-primary.btn-xs-responsive.contrato").on("click", function(){
		var id = $(this).data("id");
		getContrato(id);
	});

	// Botão atualiza contrato
	$(".btn.btn-success.btn-xs-responsive.contrato").on("click", function(){
		var id = $(this).data("id");
		getEditContrato(id);
		$("#atualizar_contrato").off().on('click', function(){
			var valor = $("#ContratoValorEdit").val();
			var dt_inicio = formataDataForBanco($("#DataInicioContratoEdit").val());
			var dt_fim = formataDataForBanco($("#DataFimContratoEdit").val());
			var status = $("#ContratoStatusEdit").val();
			updateContrato(id, valor, dt_inicio, dt_fim, status);
		});
	});

});
/*
-----------------------------
*	CRIA CONTRATO
-----------------------------
*/

function createContrato(id_catalogo, valor, dt_inicio, dt_fim){
	$.ajax({
		url: window.location.origin + "/usuario/contrato",
		type: "POST",
		dataType: "json",
		data: { "id_catalogo": id_catalogo , "valor": valor , "DataInicio": dt_inicio , "DataFim": dt_fim } //, "Status": status
	}).then(function(data){
		console.log(data)
		$.Notification.autoHideNotify('success', 'top right', 'Contrato cadastrado com sucesso!');
	}).fail(function(err){
		console.log(err);
		$.Notification.autoHideNotify('danger', 'top right', 'Houve um erro ao cadastrar o contrato!');
	});
}

/*
-----------------------------
*	VISUALIZA CONTRATO
-----------------------------
*/

function getContrato(id){
	$.ajax({
		url: window.location.origin + "/usuario/contrato/visualizar/" + id,
		type: "GET",
		dataType: "json"
	}).then(function(data){
		console.log(data)
		$("#catalogoNomeRead").html(data[0].nome);
		$("#contratoValorRead").html(data[0].valor);
		$("#contratoDt_InicioRead").html(formataDataByBanco(data[0].DataInicio));
		$("#contratoDt_FinalRead").html(formataDataByBanco(data[0].DataFim));
		if(data[0].Status == 1){
			$("#contratoStatusRead").html("Ativo");
		} else {
			$("#contratoStatusRead").html("Inativo");
		}
	}).fail(function(err){
		console.log(err);
	});
}

/*
-----------------------------
*	ATUALIZA CONTRATO
-----------------------------
*/

function getEditContrato(id){
	$.ajax({
		url: window.location.origin + "/usuario/contrato/editar/" + id,
		type: "GET",
		dataType: "json"
	}).then(function(data){
		console.log(data);
		$("#ContratoCatalogoEdit").val(data[0].nome);
		$("#ContratoValorEdit").val(data[0].valor);
		$("#DataInicioContratoEdit").val(formataDataByBanco(data[0].DataInicio));
		$("#DataFimContratoEdit").val(formataDataByBanco(data[0].DataFim));
		$("#ContratoStatusEdit").val(data[0].Status);
	}).fail(function(err){
		console.log(err);
	})
}

function updateContrato(id, valor, dt_inicio, dt_fim, status){
	$.ajax({
		type: "POST",
		url: window.location.origin + "/usuario/contrato/editar/" + id,
		
		dataType: "json",
		data: { "id_contrato": id , "valor": valor, "DataInicio": dt_inicio, "DataFim": dt_fim, "Status": status  }
	}).then(function(data){
		console.log(data);
		$.Notification.autoHideNotify('success', 'top right', 'Contrato atualizado com sucesso!');
	}).fail(function(err){
		$.Notification.autoHideNotify('danger', 'top right', 'Houve um erro ao atualizar o contrato!');
		console.log(err);
	});
}
