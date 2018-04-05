    <div class="content-page">
        <!-- Start content -->
        <div class="content">
            <div class="container">

                <!-- Page-Title -->
                <div class="row">
                    <div class="col-sm-12">

                        <h4 class="page-title">Usuário</h4>
                        <ol class="breadcrumb">
                            <li><a href="painel.html">Painel</a></li>
                            <li class="active">Usuário</li>
                        </ol>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-12">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="active">
                                    <a class="active" id="home-tab" data-toggle="tab" href="#informacoes" role="tab" aria-controls="home" aria-expanded="true">Alterar Informações</a>
                                </li>
                                <li>
                                    <a id="profile-senha" data-toggle="tab" href="#alterarsenha" role="tab" aria-controls="profile" aria-expanded="false">Alterar Senha</a>
                                </li>
                                <li>
                                    <a id="profile-avatar" data-toggle="tab" href="#avatar" role="tab" aria-controls="profile" aria-expanded="false">Alterar Avatar</a>
                                </li>
                            </ul>

                            <div class="tab-content tab-fundo" id="myTabContent">
                                <div role="tabpanel" class="tab-pane fade m-b-20 active in" id="informacoes" aria-labelledby="home-tab" aria-expanded="true">
							<!--<?php foreach($dados_usuario as $usuario) { ?> -->

                                    <form role="form">
                                        <input type="hidden" id="id_usuario" name="id_usuario" value="<?= $usuario->id_usuario; ?>">
                                        <div class="row">
                                            <div class="col-sm-12 col-xs-12 col-md-6">
                                                <div class="form-group">
                                                    <label class="control-label" for="nome">Nome</label>
                                                    <div class="input-group"> <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                                        <input type="text" id="nome" name="nome" class="form-control" value="<?= $usuario->nome; ?>">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="control-label" for="nome">Sobrenome</label>
                                                    <div class="input-group"> <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                                        <input type="text" id="sobrenome" name="sobrenome" class="form-control" value="<?= $usuario->sobrenome; ?>">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="control-label" for="nome">E-mail</label>
                                                    <div class="input-group"> <span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
                                                        <input type="email" id="email" name="email" class="form-control" value="<?= $usuario->email; ?>">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="control-label" for="nome">Status</label>
                                                    <div class="input-group"> <span class="input-group-addon"><i class="fa fa-exclamation-circle"></i></span>
                                                        <fieldset disabled=""><select id="status" name="status" class="form-control" required="">
                                                            <option value="0">-- Selecione uma opção --</option>
                                                            <option value="1" selected="">Ativado</option>
                                                            <option value="2">Desativado</option>
                                                        </select></fieldset>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label class="control-label" for="nome">Nivel de Usuário</label>
                                                    <div class="input-group"> <span class="input-group-addon"><i class="fa fa-exclamation-circle"></i></span>
                                                        <fieldset disabled=""><select id="nivel" name="nivel" class="form-control" required="">
                                                            <option value="0">-- Selecione uma opção --</option>
                                                            <option value="1" selected="">Administrador</option>
                                                            <option value="2">Usuário</option>
                                                        </select></fieldset>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label class="control-label" for="nome">Cidade</label>
                                                    <div class="input-group"> <span class="input-group-addon"><i class="fa fa-exclamation-circle"></i></span>
                                                        <select id="cidade" name="cidade" class="form-control select2" required="">
                                                            <option value="0">-- Selecione uma opção --</option>
                                                            <option value="1">Acre</option>
                                                            <option value="2">
                                                                Alagoas                          </option>
                                                            <option value="3">
                                                                Amazonas                          </option>
                                                            <option value="4">
                                                                Amapá                          </option>
                                                            <option value="5">
                                                                Bahia                          </option>
                                                            <option value="6">
                                                                Ceará                          </option>
                                                            <option value="7">
                                                                Distrito Federal                          </option>
                                                            <option value="8">
                                                                Espírito Santo                          </option>
                                                            <option value="9">
                                                                Goiás                          </option>
                                                            <option value="10">
                                                                Maranhão                          </option>
                                                            <option value="11">
                                                                Minas Gerais                          </option>
                                                            <option value="12">
                                                                Mato Grosso do Sul                          </option>
                                                            <option value="13">
                                                                Mato Grosso                          </option>
                                                            <option value="14">
                                                                Pará                          </option>
                                                            <option value="15">
                                                                Paraíba                          </option>
                                                            <option value="16">
                                                                Pernambuco                          </option>
                                                            <option value="17">
                                                                Piauí                          </option>
                                                            <option value="18">
                                                                Paraná                          </option>
                                                            <option value="19">
                                                                Rio de Janeiro                          </option>
                                                            <option value="20">
                                                                Rio Grande do Norte                          </option>
                                                            <option value="21">
                                                                Rondônia                          </option>
                                                            <option value="22">
                                                                Roraima                          </option>
                                                            <option value="23">
                                                                Rio Grande do Sul                          </option>
                                                            <option value="24">
                                                                Santa Catarina                          </option>
                                                            <option value="25">
                                                                Sergipe                          </option>
                                                            <option value="26" selected="">
                                                                São Paulo                          </option>
                                                            <option value="27">
                                                                Tocantins                          </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Data de Nascimento</label>
                                                    <div>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="mm/dd/yyyy" id="datepicker-autoclose">
                                                            <span class="input-group-addon bg-custom b-0"><i class="icon-calender"></i></span>
                                                        </div><!-- input-group -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12 m-t-15">
                                                <div class="pull-right">
                                                    <a class="btn btn-success waves-effect waves-light" id="showtoast" href="#" >Atualizar Informações</a>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                                <div role="tabpanel" class="tab-pane fade m-b-20" id="alterarsenha" aria-labelledby="home-tab" aria-expanded="false">

                                    <form role="form" id="FormularioEditarSenhaAdmin">
                                        <div class="row">
                                            <input type="hidden" id="id_usuario2" name="id_usuario" value="<?= $usuario->id_usuario; ?>">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="control-label" for="nome">Senha Antiga</label>
                                                    <div class="input-group"> <span class="input-group-addon"><i class="fa fa-unlock-alt"></i></span>
                                                        <input type="password" id="senha_antiga" name="senha_antiga" class="form-control">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="control-label" for="nome">Senha</label>
                                                    <div class="input-group"> <span class="input-group-addon"><i class="fa fa-unlock-alt"></i></span>
                                                        <input type="password" id="senha_nova" name="senha_nova" class="form-control" required>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="control-label" for="nome">Confirmar Senha</label>
                                                    <div class="input-group"> <span class="input-group-addon"><i class="fa fa-unlock-alt"></i></span>
                                                        <input type="password" id="senha_confirmar" name="senha_confirmar" class="form-control" required>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <div id="divcheck"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="pull-right">
                                                    <button type="button" class="btn btn-success waves-effect waves-light" id="enviarsenha">Alterar Senha</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                                <div role="tabpanel" class="tab-pane fade m-b-20" id="avatar" aria-labelledby="home-tab" aria-expanded="false">
									<?php foreach($dados_usuario as $usuario) { ?>
										<form enctype="multipart/form-data" id="FormularioTrocarAvatar" method="POST" action="/admin/me/avatar/<?= $usuario->id_usuario; ?>" id="FormularioAlterarAvatarAdmin">
											<!--<input type="hidden" id="imagemantiga" name="imagemantiga" value="./arquivos/uploads/avatar/logo.png">-->
											<div class="row">
												<div class="col-md-2">
													<img src="<?= base_url().'upload/'.$usuario->avatar;?>" alt="Jucesp" class="img-circle col-md-12">
												</div>
												<div class="col-md-9">
													<div class="form-group m-b-20">
														<label class="control-label">Selecione uma Imagem</label>
														<div class="input-group"><input type="file" class="filestyle" name="avatar" id="avatar" data-iconname="fa fa-cloud-upload" accept=".jpeg"></div>
													</div>
													<div class="form-group m-b-10">
														<button type="submit" class="btn btn-success waves-effect waves-light" id="atualizar_avatar" >Alterar Avatar</button>
													</div>
												</div>
											</div>
										</form>
									<?php } ?>
                                </div>
							<!--<?php } ?>-->
                            </div>
                    </div>
                </div>

            </div> <!-- container -->

        </div> <!-- content -->