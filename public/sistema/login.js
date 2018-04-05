function logar(usuario, senha){
	var url =  window.location.origin;
	$.ajax({
		url: "http://localhost:8000/login",
		type: "POST",
		dataType: "json",
		data: { "usuario": usuario, "senha": senha }
	}).then(function(data){
		if(data[0].id_perfil == 1){
			$.Notification.autoHideNotify('success', 'top right', 'Sucesso!', 'Usuário autenticado com Sucesso!');
			localStorage.setItem('img-avatar', data[0].avatar);
			setInterval(function(){ window.location = url + "/admin/painel" }, 3000);
		}else{
			$.Notification.autoHideNotify('success', 'top right', 'Sucesso!', 'Usuário autenticado com Sucesso!');
			setInterval(function(){ window.location = url + "/me" }, 3000);
		}
	}).catch(function(err){
		localStorage.setItem('img-avatar', data[0].avatar);
		$.Notification.autoHideNotify('success', 'top right', 'Sucesso!', 'Seu login e/ou senha está errado!');
		console.log(err);
	});
}




$(document).ready(function(){
	
	// Botão de Login
	$("#logar").on("click", function(){
		var usuario = $("#usuario").val();
		var senha = $("#senha").val();
		logar(usuario, senha);
	});
	
	// Botão de desbloqueio de tela
	$("#relogar").on("click", function(){
		var usuario = $("#usuario").val();
		var senha = $("#senha").val();
		logar(usuario, senha);
	});
		
});