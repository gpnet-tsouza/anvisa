$(function(){
	
	var Table_Contrato = $("#dataTableOrdemServico").DataTable({
		"pagingType": "full_numbers",
		"bFilter": true,
		"bPaginate": true,
		"processing": true,
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
            }
		},
		"aoColumns": [ 
						{"bSearchable": false}, 
						{"bSearchable": true}, 
						{"bSearchable": false}, 
						{"bSearchable": false},
						{"bSearchable": false},
						{"bSearchable": false},
						{"bSearchable": false}
		]
	});
	

	
	
	
});