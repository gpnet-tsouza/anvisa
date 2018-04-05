$(document).ready(function(){

	// Botão cadastra catalogo
	$("#cadastrar_catalogo").on("click", function(){
		var nome = $("#nomeCatalogo").val();
		var id_unidade = $("#nomeUnidade").val();
		createCatalogo(nome, id_unidade);
	});
	
	// Botão visualizar catalogo
	$(".btn.btn-primary.btn-xs-responsive.catalogo").on("click", function(){
		var id = $(this).data("id");
		getCatalogo(id);
	});

	$("#pesquisar_catalogo_servico").on("click", function(){

		var datainicio = $.formatDateByDatabase($("#datainicioPesquisar").val());
		var datafim = $.formatDateByDatabase($("#datafimPesquisar").val());

		// valida datas
		if( datainicio > datafim ){
			$.Notification.autoHideNotify('warning', 'top center', 'A data inicial não pode ser maior que a data final!');
			return false;
		}else if( datafim < datainicio ){
			
			$.Notification.autoHideNotify('warning', 'top center', 'A data final não pode ser menor que a data inicial!');
			return false;
		}
		else{
			// Monta a Url de pesquisar por data
			window.location  = "/admin/catalogo/de/" + datainicio + "/ate/" +  datafim;
		}
	});


 	$("#datainicioPesquisar").datepicker({
      format: 'dd/mm/yyyy',
      todayHighlight:'TRUE',
      autoclose: true,
      locale : 'pt-br'
    });

	$("#datafimPesquisar").datepicker({
      format: 'dd/mm/yyyy',
      todayHighlight:'TRUE',
      autoclose: true,
      locale : 'pt-br'
    });

		/*
	$("#datainicio_pesquisar").datepicker({
	  format: 'dd/mm/yyyy',
	  todayHighlight:'TRUE',
	  autoclose: true,
	  locale : 'pt-br'
    });

	$("#datafinal_pesquisar").datepicker({
      format: 'dd/mm/yyyy',
      todayHighlight:'TRUE',
      autoclose: true,
      locale : 'pt-br'
    });

	$("#dtInicioContratoEdit").datepicker({
	          format: 'dd/mm/yyyy',
	          todayHighlight:'TRUE',
	          autoclose: true,
	          locale : 'pt-br'
	        });

	$("#dtTerminoContratoEdit").datepicker({
	          format: 'dd/mm/yyyy',
	          todayHighlight:'TRUE',
	          autoclose: true,
	          locale : 'pt-br'
	        });
	        */

});


function createCatalogo(nome , id_unidade){
	$.ajax({
		url: window.location.origin + "/admin/catalogo/cadastrar",
		type: "POST",
		dataType: "json",
		data: { "nome": nome, "id_unidade": id_unidade }  
	}).then(function(data){
		$.Notification.autoHideNotify('success','top right','Catalogo de Serviço cadastrado com sucesso!');
		window.location.origin + "/admin/catalogo/cadastrar-servico";
	}).fail(function(err){
		console.log(err);
	});
}

function getCatalogo(id){
	$.ajax({
		url: window.location.origin + "/admin/catalogo/visualizar/" + id,
		type: "GET",
		dataType: "json"
	}).then(function(data){
		console.log(data);
		$("#catalogoIDRead").html(data[0].id_catalogo);
		$("#catalogoNomeAtualRead").html(data[0].catalogo_nome);
		$("#catalogoNomeUnidadeRead").html(data[0].unidade_nome);
		$("#catalogoDescricaoUnidadeRead").html(data[0].descricao_unidade);
		if(data[0].status == 1){
			$("#catalogoStatusRead").html("Ativo");
		}else{
			$("#catalogoStatusRead").html("Inativo");
		}
	}).fail(function(err){
		console.log(err);
	});
}

/*

		$("#FormularioCriarContrato").validate({
			rules: {
				valor_contrato: {
					required: true
				},
				data_inicio: {
					required: true,
					date: true,
					maiorQue: '#dtTerminoUSTPerfil'

				},
				data_fim: {
					required: true,
					date: true,
					menorQue: '#dtInicioUSTPerfil'
				}
			},
			messages: {
				valor_contrato: {
					required: 'Campo Valor é obrigatorio'
				},
				data_inicio: {
					required: "Insira uma data válida"
				},
				data_fim: {
					required: "Insira uma data válida"
				}
			}
		});

		// Validação Formulario Edição Contrato
		$("#FormularioEditarContrato").validate({
			rules: {
				valor_contrato_editar: {
					required: true
				},
				data_inicio_contrato_editar: {
					required: true,
					date: true,
					maiorQue: '#dtTerminoContratoEdit'
				},
				data_fim_contrato_editar: {
					required: true,
					date: true,
					menorQue: '#dtInicioContratoEdit'
				}
			},
			messages: {
				valor_contrato_editar: {
					required: 'Campo Valor é obrigatorio'
				},
				data_inicio_contrato_editar: {
					required: "Insira uma data válida"
				},
				data_fim_contrato_editar: {
					required: "Insira uma data válida"
				}
			}
		});

		// Validação Formulario Pesquisa Contrato
		$("#FormularioPesquisaContrato").validate({
			rules: {
				data_inicio_pesquisa: {
					required: true,
					date: true
				},
				data_fim_pesquisa: {
					required: true,
					date: true
				}
			},
			messages: {
				data_inicio_pesquisa: {
					required: 'Insira uma data válida'
				},
				data_inicio_pesquisa: {
					required: 'Insira uma data válida'
				}
			}
		})

		// Botão de cadastrado de contrato
		$("#salvar_contrato").on("click", function(){

			var descricao = $("#descricaoCadastrar").val();
			var valor = $("#valorUST").val();
			var dataInicio = $.formatDateByDatabase($("#dtInicioUSTPerfil").val());
			var dataFim = $.formatDateByDatabase($("#dtTerminoUSTPerfil").val());			

			if($("#FormularioCriarContrato").valid() == true){
				createContrato(valor, dataInicio, dataFim, descricao);			

			 	$("#modalCriarContrato").trigger('click');
				setTimeout(function(){
					$("#pesquisar_contrato").trigger('click');
				},2000);
				
			}else{
				return false;
			} 
		});

		// Botão visualizar contrato
		$(".btn.btn-primary.btn-xs-responsive.contrato").on("click", function(){
			var id = $(this).data("id");
			getContrato(id);
		});

		// Botão editar contrato ( visualização )
		$(".btn.btn-success.btn-xs-responsive.contrato").on("click", function(){
			var id = $(this).data("id");
			getEditContrato(id);

			$('#atualizar_contrato').on("click",function(){				
				var descricao = $("#descricaoEditar").val();
				var valor = $("#valorContratoEdit").val();
				var data_inicial = $.formatDateByDatabase($("#dtInicioContratoEdit").val());
				var data_final = $.formatDateByDatabase($("#dtTerminoContratoEdit").val());
				var id_contrato = $("#idContratoEdit").val();
				var status = $("#statusEdit").val();

				if($("#FormularioEditarContrato").valid() == true){
					updateContrato(id, id_contrato, valor, data_inicial, data_final, status, descricao);
					$("#modalCriarEditar").trigger('click');
					setTimeout(function(){
						$("#pesquisar_contrato").trigger('click');
					},2000);
				}else{
					return false;
				}				
			});

		});

		// Botão remover contrato
		$(".btn.btn-danger.btn-xs-responsive.contrato").on("click", function(){
			var id = $(this).data("id");

				
			$("#remover_contrato").on("click", function(){		

				removeContrato(id);					
				$("#delete_contrato_Modal").trigger('click');

				setTimeout(function(){
					$("#pesquisar_contrato").trigger('click');
				},2000);			

			});					
		});

		// Botão Pesquisar contrato
		$("#pesquisar_contrato").on("click", function(){

			var datainicio = $.formatDateByDatabase($("#datainicio_pesquisar").val());
			var datafim = $.formatDateByDatabase($("#datafinal_pesquisar").val());

			// valida datas
			if( datainicio > datafim ){

				$.Notification.autoHideNotify('warning', 'top center', 'A data inicial não pode ser maior que a data final!');
				return false;
			}else if( datafim < datainicio ){
				
				$.Notification.autoHideNotify('warning', 'top center', 'A data final não pode ser menor que a data inicial!');
				return false;
			}
			else{
				// Monta a Url de pesquisar por data
				window.location  = "/admin/contrato/de/" + datainicio + "/ate/" +  datafim;
			}
		});
        
        
        





function getContrato(id){
	$.ajax({
		type: "get",
		url:window.location.origin + "/admin/contrato/visualizar/" + id,
		dataType: "json"})
		.done(function(data){

			//formata valor
			var valor = parseInt(data.valorUst);

			$("#catalogoNomeRead").html(data.descricao);
			$("#contratoValorRead").html(valor.toFixed(2));
			$("#contratoDt_InicioRead").html($.formatDateByInput(data.DataInicio));
			$("#contratoDt_FinalRead").html($.formatDateByInput(data.DataFim));

			if(data.status == 1){
				$("#contratoStatusRead").html("Ativo");
			}else{
				$("#contratoStatusRead").html("Inativo");
			}

		})
		.fail(function(err){
			$.Notification.autoHideNotify('danger', 'top right', 'Houve um erro ao requisitar o contrato!');
		})
		.always(function(){
			console.log("toujours");
		});

}


function getEditContrato(id){
	$.ajax({
		url: window.location.origin + "/admin/contrato/editar/" + id,
		type: "GET",
		dataType: "json"
		}).done(function(data){	
			$("#descricaoEditar").val(data.descricao);
			$("#idContratoEdit").val(data.id_contrato);
			$("#valorContratoEdit").val(formataValorEdicao(data.valorUst));
			$("#statusEdit").val(data.status);
			$("#dtInicioContratoEdit").val($.formatDateByInput(data.DataInicio));
			$("#dtTerminoContratoEdit").val($.formatDateByInput(data.DataFim));	
		}).fail(function(err){
			console.log(err);
		});
}


function updateContrato(id, id_contrato, valor, DataIncio, DataFim, Status, Descricao){
	$.ajax({
		type: "POST",
		url: window.location.origin + "/admin/contrato/atualizar/" + id,		
		data: { "id_contrato": id_contrato, "valorUst": formataValorGravacao(valor), "DataInicio": DataIncio, "DataFim": DataFim, "status": Status, "descricao": Descricao},
		dataType: "json"})
	.done(function(data){
		$.Notification.autoHideNotify('success', 'top right', 'Contrato atualizado com sucesso!');})
	.fail(function(err){		
		$.Notification.autoHideNotify('danger', 'top right', 'Não foi possível atualizar este contrato.');
	});
}


function removeContrato(id){
	$.ajax({
		url: window.location.origin + "/admin/contrato/deletar/" + id,
		type: "GET",
		dataType: "json"
	}).done(function(data){
		$.Notification.autoHideNotify('success', 'top right', 'Contrato removido com sucesso!');
	}).fail(function(err){
		$.Notification.autoHideNotify('danger', 'top right', 'Houve um erro ao remover contrato!');
	});
}


function createContrato(valor, dataInicio, dataFim, descricao){

	$.ajax({
		url: window.location.origin + "/admin/contrato",
		type: "POST",
		data: {"valorUst": formataValorGravacao(valor), "DataInicio": dataInicio, "DataFim": dataFim, "status": 1, "descricao": descricao },
		dataType: "json"
	}).done(function(data){		
		$.Notification.autoHideNotify('success', 'top right', 'Contrato cadastrado com sucesso!');
	}).fail(function(err){		
		$.Notification.autoHideNotify('danger', 'top right', 'Erro ao incluir um contrato!');
	});
}

function formataValor(valor){
    var valorF = valor.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    return parseInt(valorF);
}

function formataValorEdicao(valor){    
    return valor.replace(".",",");
}

function formataValorGravacao(valor){    
	var retorno = valor.replace(".","");
	retorno = retorno.replace(",",".");
    return retorno;
}
*/
