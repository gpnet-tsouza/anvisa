$(document).ready(function(){        
		
	$("#FormularioCriarCatalogoServico").validate({
			rules: {
				impacto: {
					required: true
				},
				item: {
					required: true
				},
				resumo: {
					required: true
				},
				complexidade: {
					required: true
				},
				ust: {
					required: true
				},
				precisaoMensalQta: {
					required: true
				},
				precisaoAnualQta: {
					required: true
				},
				precisaoMensalUst: {
					required: true
				}
				
			},
			messages: {
				impacto: {
					required: 'O campo impacto é obrigatorio'
				},
				item: {
					required: 'O campo item é obrigatório'
				},
				resumo: {
					required: 'O campo resumo é obrigatório'
				},
				complexidade: {
					required: 'O campo complexidade é obrigatório'
				},
				ust: {
					required: 'O campo valor ust é obrigatório'
				},
				precisaoMensalQta: {
					required: 'O campo previsão mensal é obrigatório'
				},
				precisaoAnualQta: {
					required: 'O campo previsão anual é obrigatório'
				},
				precisaoMensalUst: {
					required: 'O campo previsão mensal UST é obrigatório'
				}
			}
		});
	
    $("#FormularioEditarCatalogoServico").validate({
			rules: {
				impacto: {
					required: true
				},
				item: {
					required: true
				},
				resumo: {
					required: true
				},
				complexidade: {
					required: true
				},
				ust: {
					required: true
				},
				precisaoMensalQta: {
					required: true
				},
				precisaoAnualQta: {
					required: true
				},
				precisaoMensalUst: {
					required: true
				}
				
			},
			messages: {
				impacto: {
					required: 'O campo impacto é obrigatorio'
				},
				item: {
					required: 'O campo item é obrigatório'
				},
				resumo: {
					required: 'O campo resumo é obrigatório'
				},
				complexidade: {
					required: 'O campo complexidade é obrigatório'
				},
				ust: {
					required: 'O campo valor ust é obrigatório'
				},
				precisaoMensalQta: {
					required: 'O campo previsão mensal é obrigatório'
				},
				precisaoAnualQta: {
					required: 'O campo previsão anual é obrigatório'
				},
				precisaoMensalUst: {
					required: 'O campo previsão mensal UST é obrigatório'
				}
			}
		});		
		
    // Botão visualizar
	$(".btn.btn-primary.btn-xs-responsive.servico").on("click", function(){
		var id = $(this).data("id");
		getServico(id);
	});
    
});


/* Pesquisar */
$('#pesquisar_servico').on('click', function(){        
    window.location = "/admin/servico";
});

/* Pesquisar */

/* Remover */

function removeServico(id){
      $.ajax({
		url: window.location.origin + "/admin/servico/deletar/" + id,
		type: "GET"
	}).done(function(data){
		console.log(data);
		$.Notification.autoHideNotify('success', 'top right', 'Serviço removido com sucesso!');
	}).fail(function(err){
		console.log(err);
		$.Notification.autoHideNotify('danger', 'top right', 'Houve um erro ao remover o serviço!');
	});
}

$(".btn.btn-danger.btn-xs-responsive.servico").on("click", function(){
    var id = $(this).data("id");
    $("#deletar_servico").click(function(){
        removeServico(id);
        $("#modalCriarServicoClose").trigger('click');
            setTimeout(function(){
                $("#pesquisar_servico").trigger('click');
            },2000);        
    });
});	
/* Remover */

/* Visualizar */
$(".btn.btn-primary.btn-xs-responsive.servico").on("click", function(){
    var id = $(this).data("id");
    
    visualizarServico(id);
    
    $("#custoUnitarioIdVisualizar").prop('readonly', true);	
	$("#itemServicoitemIdVisualizar").prop('readonly', true);
	$("#resumoServicoIdVisualizar").prop('readonly', true);         
	$("#horasIdVisualizar").prop('readonly', true);
	$("#descricaoServicoIdVisualizar").prop('readonly', true);
	$("#custoUnitarioIdVisualizar").prop('readonly', true);       
	$("#idServicoVisualizar").prop('readonly', true);
	$("#statusServicoVisualizar").prop('readonly', true);     
    
	$("#impactoIdVisualizar").prop('disabled', true);
	$("#complexidadeServicoIdVisualizar").prop('disabled', true);
	    
    
});

function visualizarServico(id){
	$.ajax({
		url: window.location.origin + "/admin/servico/editar/" + id,
		type: "GET",
		dataType: "json"
	}).done(function(data){
		        
        populaImpacto(data.impactos, $('#impactoIdVisualizar'));
        populaComplexidade(data.complexidades, $('#complexidadeServicoIdVisualizar'));  
        
        $("#itemServicoitemIdVisualizar").val(data.servico[0].item);
        $("#resumoServicoIdVisualizar").val(data.servico[0].resumo);            
        $("#horasIdVisualizar").val(data.servico[0].horas);
        $("#descricaoServicoIdVisualizar").val(data.servico[0].descricao); 
        $("#custoUnitarioIdVisualizar").val(data.servico[0].custoUnitario);         
        $("#idServicoVisualizar").val(data.servico[0].id_servico);
        $("#statusServicoVisualizar").val(data.servico[0].status);                            
        $("#impactoIdVisualizar").val(parseInt(data.servico[0].impacto));
        $("#complexidadeServicoIdVisualizar").val(parseInt(data.servico[0].complexidade_id));
                
	}).fail(function(err){
		console.log(err);
	});
}

/* Visualizar */

/* Editar e Atualizar*/
$(".btn.btn-success.btn-xs-responsive.servico").on("click", function(){
    var id = $(this).data("id");
    
    $("#custoUnitarioIdEditar").prop('readonly', true);
    
    editarServico(id);
    
    $("#horasIdEditar").on('blur', function(){
        calculaCU($("#complexidadeServicoIdEditar"), $("#horasIdEditar"), $("#custoUnitarioIdEditar") );
    });

    $("#complexidadeServicoIdEditar").on('change', function(){
        calculaCU($("#complexidadeServicoIdEditar"), $("#horasIdEditar"), $("#custoUnitarioIdEditar") );
    }); 
    
    $("#atualizar_servico").click(function(){
        var item = $("#itemServicoitemIdEditar").val(); 
        var resumo = $("#resumoServicoIdEditar").val();     
        var impacto = $("#impactoIdEditar").val();     
        var complexidade = $("#complexidadeServicoIdEditar").val();     
        var horas = $("#horasIdEditar").val();     
        var custoUnitario =  $("#custoUnitarioIdEditar").val(); 
        var descricaoServico =  $("#descricaoServicoIdEditar").val();
        
        var id = $("#idServicoEditar").val();
        var status = $("#statusServicoEditar").val();

        if($("#FormularioCriarServico").valid() == true){
            atualizarServico(id,item, resumo, impacto, complexidade, horas, custoUnitario, descricaoServico, status);
                $("#modalCriarServicoClose").trigger('click');
                setTimeout(function(){
                    $("#pesquisar_servico").trigger('click');
                },2000);
        }
        else{
            return false;
        }    
    });

});

function atualizarServico(id, item, resumo, impacto, complexidade, horas, custoUnitario, descricaoServico, status){
	$.ajax({
		url: window.location.origin + "/admin/servico/atualizar/" + id,        		
        data: {"id_servicos":id, "item":item, "resumo":resumo, "impacto": impacto, "complexidade_id": complexidade, "horas":horas, "custoUnitario": custoUnitario, "descricao": descricaoServico, "status": status },
        type: "POST",
        datatype: "json"
    }).done(function(data){
        $.Notification.autoHideNotify('success', 'top right', 'Servico salvo com sucesso!');
    }).fail(function(err){
        $.Notification.autoHideNotify('danger', 'top right', 'Houve um erro ao carregar o formulario!');
    });
}

function editarServico(id){
	$.ajax({
		url: window.location.origin + "/admin/servico/editar/" + id,
		type: "GET",
		dataType: "json"
	}).done(function(data){
		        
        populaImpacto(data.impactos, $('#impactoIdEditar'));
        populaComplexidade(data.complexidades, $('#complexidadeServicoIdEditar'));  
        
        $("#itemServicoitemIdEditar").val(data.servico[0].item);
        $("#resumoServicoIdEditar").val(data.servico[0].resumo);            
        $("#horasIdEditar").val(data.servico[0].horas);
        $("#descricaoServicoIdEditar").val(data.servico[0].descricao); 
        $("#custoUnitarioIdEditar").val(data.servico[0].custoUnitario);         
        $("#idServicoEditar").val(data.servico[0].id_servicos);
        $("#statusServicoEditar").val(data.servico[0].status);                            
        $("#impactoIdEditar").val(parseInt(data.servico[0].impacto));
        $("#complexidadeServicoIdEditar").val(parseInt(data.servico[0].complexidade_id));
                
	}).fail(function(err){
		console.log(err);
	});
}
/* Editar e Atualizar*/

/* Criar e Salvar*/
$('#criarServico').on('click', function(){
    
    $("#horasId").on('blur', function (){
        calculaCU($("#complexidadeServicoId"), $("#horasId"), $("#custoUnitarioId") );
    });

    $("#complexidadeServicoId").on('change', function(){
        calculaCU($("#complexidadeServicoId"), $("#horasId"), $("#custoUnitarioId") );
    });   
    
    $("#custoUnitarioId").prop('readonly', true);

    criarServico();
    
    $('#salvar_servico').on('click', function(){
        var item = $("#itemServicoId").val(); 
        var resumo = $("#resumoServicoId").val();     
        var impacto = $("#impactoId").val();     
        var complexidade = $("#complexidadeServicoId").val();     
        var horas = $("#horasId").val();     
        var custoUnitario = $("#custoUnitarioId").val(); 
        var descricaoServico = $('#descricaoServicoId').val();
            
        if($("#FormularioCriarServico").valid() == true){
            salvarServico(item, resumo, impacto, complexidade, horas, custoUnitario, descricaoServico);
                $("#modalCriarServicoClose").trigger('click');
                setTimeout(function(){
                    $("#pesquisar_servico").trigger('click');
                },2000);
        }
        else{
            return false;
        }    
    });        
});

function salvarServico(item, resumo, impacto, complexidade, horas, custoUnitario, descricaoServico){
    $.ajax({
        url: window.location.origin + "/admin/servico/salvar",
        data: {"item":item, "resumo":resumo, "impacto": impacto, "complexidade_id": complexidade, "horas":horas, "custoUnitario": custoUnitario, "descricao": descricaoServico },
        type: "POST",
        datatype: "json"
    }).done(function(data){
        $.Notification.autoHideNotify('success', 'top right', 'Servico salvo com sucesso!');
    }).fail(function(err){
        $.Notification.autoHideNotify('danger', 'top right', 'Houve um erro ao carregar o formulario!');
    });
    
}    
    
function criarServico(){
    $.ajax({
        url: window.location.origin + "/admin/servico/cadastrar", 
        type: "GET",
        dataype: "json",        
    }).done(function(data){
        
        var ret = JSON.parse(data);
        populaImpacto(ret.impactos, $('#impactoId'));
        populaComplexidade(ret.complexidades, $('#complexidadeServicoId'));  
        
    }).fail(function(err){
       $.Notification.autoHideNotify('danger', 'top right', 'Houve um erro ao carregar o formulario!');
    });    
}
/* Criar e Salvar*/

/* Preencher Telas */
function populaImpacto(impact, comp){
    
    if(comp[0].length <= 1){
         $.each(impact, function(i, item){
           comp.append($('<option>',{
             value: item.id_impacto,
               text: item.descricao
           }));
        });                   
    }    
}

function populaComplexidade(complex, comp){
    
    if(comp[0].length <= 1){
         $.each(complex, function(i, item){
            comp.append($('<option>',{
                value: item.id_complexidade,
                text: item.descricao,
                title: item.valor 
            }));
        });   
    }    
}

function calculaCU(complexidade, hora, result){    
    
    if(complexidade.val() != 0 && hora.val() != ''){
        var horas = hora.val();
        var complex = complexidade[0].options[complexidade[0].options.selectedIndex].title
        var cU = parseFloat(horas) * parseFloat(complex);

        result.val(cU.toFixed(2));                                                  
    }
}
/* Preencher Telas */

/*
// Pega o últmo id da tabela servicos inserido
function getLastIdServico(){
	var id;
	$.ajax({
		url: window.location.origin + "/admin/servico/get-id-servico",
		type: "POST",
		dataType: "json"
	}).then(function(data){
		localStorage.setItem("id_servico", data[0].id_servicos);
	}).fail(function(err){
		console.log(err);
	});
}

// Cria o catalogo juto com os servicos
function createCatalogoServico(id_servico, id_catalogo){
	$.ajax({
		url: window.location.origin + "/admin/catalogo/cadastrar-catalogo-servico",
		type: "POST",
		dataType: "json",
		data: { "id_catalogo": id_catalogo, "id_servico": id_servico }
	}).then(function(data){
		console.log(data);
	}).fail(function(err){
		console.log(err);
	});
}

// Pega o últmo id inserido da tabela catalgos
function getLastIdCatalogo(){
	$.ajax({
		url: window.location.origin + "/admin/catalogo/get-id-catalogo",
		dataType: "json",
		type: "POST"
	}).then(function(data){
		localStorage.setItem("id_catalogo", data[0].id_catalogo);
	}).fail(function(err){
		console.log(err);
	});
}

function createServico(impacto, item, resumo, complexidade, ust, formulacaoDeValor, custoUnitario, precisaoMensalQta, precisaoAnualQta, precisaoMensalUst, precisaoAnualUst, descricao_ust){
	$.ajax({
		url: window.location.origin + "/admin/servico",
		type: "POST",
		dataType: "json",
		data: { "impacto": impacto, "item": item, "resumo": resumo, "complexidade": complexidade, "ust": ust, "formulacaoDeValor": formulacaoDeValor, "custoUnitario": custoUnitario, "precisaoMensalQta": precisaoMensalQta, "precisaoAnualQta": precisaoAnualQta, "precisaoMensalUst": precisaoMensalUst, "precisaoAnualUst": precisaoAnualUst, "descricao_ust": descricao_ust  }
	}).then(function(data){
		console.log(data);
		$.Notification.autoHideNotify('success', 'top right', 'Serviço cadastrado com sucesso!');
	}).fail(function(err){
		console.log(err);
		$.Notification.autoHideNotify('danger', 'top right', 'Houve um erro ao cadastrado o serviço!');
	});
}

function removeServico(id){
	
}*/