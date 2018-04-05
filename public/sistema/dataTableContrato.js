$(function(){
	
	var Table_Contrato = $("#dataTableContrato").DataTable({
		"pagingType": "full_numbers",
		"bFilter": true,
		"bPaginate": true,
		"processing": true,
		"ordering": false,
		"oLanguage": {
                "sEmptyTable": "Nenhum registro encontrado",
                "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                "sInfoPostFix": "",
                "sInfoThousands": ".",
                "sLengthMenu": "_MENU_ resultados por página",
                "sLoadingRecords": "Carregando...",
                "sProcessing": "Processando...",
                "sZeroRecords": "Nenhum registro encontrado",
                "sSearch": "Pesquisar",                
                "oPaginate": {
                    "sNext": "Próximo",
                    "sPrevious": "Anterior",
                    "sFirst": "Primeiro",
                    "sLast": "Último"
			}, 
			"oAria": {
                    "sSortAscending": ": Ordenar colunas de forma ascendente",
                    "sSortDescending": ": Ordenar colunas de forma descendente"
            },
		},
		"ajax:": {
				"url": "/admin/contrato/",
				"dataSrc": ""
		}
		
	});
	
	//pega o conteudo da caixa de pesquisa e traz o resultado ao clique do botão pesquisar
	var oTable = $('#dataTableContrato').DataTable();
	$("#pesquisar_contrato").on("click", function(){
					
	});
	
	
	
});