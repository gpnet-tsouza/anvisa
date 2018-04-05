var dados = null;

function createOrdemServicoUsuario(id_servico, id_contrato, id_unidade, descricao, dt_Inicio, dt_Fim, ca){
	$.ajax({
		url: window.location.origin + "/usuario/os/cadastrar",
		type: "POST",
		dataType: "json",
		data: { "id_contrato": id_contrato, "id_unidade": id_unidade, "id_servicos": id_servico, "descricao": descricao, "DataInicio": dt_Inicio, "DataFim": dt_Fim, "ca": ca }
	}).then(function(data){
		console.log(data);
	}).fail(function(err){
		console.log(err);
	});
};

function getOrdemServico(id){
	$.ajax({
		url: window.location.origin + "/usuario/os/visualizar/" + id,
		type: "GET",
		dataType: "json"
	}).then(function(data){
		console.log(data);
		$("#OSCARead").html(data[0].ca);
		$("#OSValorRead").html(data[0].valor);
		$("#OSDataInicioRead").html(data[0].DataInicio);
		$("#OSDataFimRead").html(data[0].DataFim);
		if(data[0].Status == 1){
			$("#OSStatusRead").html("Ativo");
		}else{
			$("#OSStatusRead").html("Inativo");
		}
	}).fail(function(err){
		console.log(err);
	})
};


function sendInfoServicos(id){
	$.ajax({
		url: window.location.origin + "/usuario/os/dados-servicos/" + id,
		type: "GET",
		dataType: "json"
	}).then(function(data){
		dados = data;
		console.log(data);
	}).fail(function(err){
		console.log(err);
	});
};

function getEditOrdemServico(id){
	
};


function removeOrdemServico(id){
	$.ajax({
		url: window.location.origin + "/usuario/os/deletar/" + id
	})
};

$(document).ready(function(){
	
	// Botão visualizar ordem de serviço
	$(".btn.btn-primary.btn-xs-responsive.ordem-servico").on("click", function(){
		var id = $(this).data("id");
		getOrdemServico(id);
	});
	
	$(".btn.btn-danger.btn-xs-responsive.ordem-servico").on("click", function(){
		var id = $(this).data("id");
		$("deletat_ordem_servico").on("click", function(){
			
		});
	});
	
	$("#salvar_os_usuario").on("click", function(){
		var dt_Fim = $("#datafimusuario").val();
		var dt_Inicio = $("#datainicio").val();
		var descricao = $("#descricao-os").val();
		var ca = $("#ca").val();
		var id_servico = dados[0].id_servicos;
		var id_contrato = dados[0].id_contrato;
		var id_unidade = dados[0].id_unidade;
		createOrdemServicoUsuario(id_servico, id_contrato, id_unidade, descricao, dt_Inicio, dt_Fim, ca);
	});
	
	$("#descricao").on("change", function(){
		var id = $(this).val();
		console.log(id);
		sendInfoServicos(id);
	});
	
});