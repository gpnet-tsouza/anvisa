
                <!-- Start content -->
<div class="content">
    <div class="container">

        <!-- Page-Title -->
        <div class="row">
            <div class="col-sm-12">

                <h4 class="page-title">Contratos</h4>
                <p class="text-muted page-title-alt">Listagem de Contratos</p>
            </div>
        </div>

            <div class="row p-t-10 m-b-20">
				<form id="FormularioPesquisaContrato">
					<div class="col-sm-12">
						<div class="card-box">
							<div class="row">
								<div class="col-sm-12 col-xs-12 col-md-12">
									<p class="p-10"><strong>Filtros</strong></p>
									<div class="form-group">

										<div class="col-xs-12 col-sm-12 col-md-4" id="filter_col3" data-column="2">
											<label for="descricaoPerfil" class="control-label">Data Início:</label>
											<input type='text' class="form-control column_filter2 data" id="datainicio_pesquisar" name="data_final" placeholder="__/__/____" />
						                    <span class="input-group-addon">
						                        <span class="glyphicon glyphicon-calendar"></span>
						                    </span>
						                </div>
										
										 <div class="col-xs-12 col-sm-12 col-md-4" id="filter_col4" data-column="3">
										 	<label for="descricaoPerfil" class="control-label">Data Início:</label>
						                    <input type='text' class="form-control column_filter2 data" id="datafinal_pesquisar" name="data_final" placeholder="__/__/____"/>
						                    <span class="input-group-addon">
						                        <span class="glyphicon glyphicon-calendar"></span>
						                    </span>
						                </div>

										<div class="col-xs-12 col-sm-12 col-md-4 text-right p-t-27">
											<a href="#" class="btn waves-effect waves-light btn-primary m-r-10 pesquisaUST" id="pesquisar_contrato"><span class="glyphicon glyphicon-search"></span> Pesquisar</a>
											<a href="#"; data-toggle="modal" data-load-url="" data-target="#modalCriarContrato" class="btn waves-effect waves-light btn-warning"><span class="glyphicon glyphicon-plus"></span> Cadastrar</a>
										</div>

									</div>
								</div>

							</div>
						</div>
					</div>
				</form>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <div class="card-box table-responsive">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <p class="p-10"><strong>Todos os Contratos</strong></p>
                            </div>
                        </div>
                        <div class="">
                            <table id="dataTableContrato" class="table table-striped table-bordered table-responsive">
                                <thead>
									<tr>
										<th>ID</th>
										<th>Nome Catalogo</th>
										<th>Valor Ust</th>
										<th>Data Início</th>
										<th>Data Término</th>
										<th>Status</th>
										<th></th>
									</tr>
                                </thead>
                                <tbody>
								<?php foreach($data as $contrato) { ?>
									<?php if($contrato->status == 1) { ?>
										<tr>
											<td><span class="label label-success"><?= $contrato->id_contrato ?></span></td>
											<td><?= $contrato->descricao?></td>
											<td><?= formata_numero($contrato->valorUst);?></td>
											<td><?= formata_data($contrato->DataInicio); ?></td>
											<td><?= formata_data($contrato->DataFim); ?></td>
											<td><?php if ( $contrato->status == 1) { echo 'Ativo'; } else { echo 'Inativo'; } ?></td>
											<td class="text-right">
												<a href="" data-toggle="modal" data-load-url="" data-target="#modalContratoRead" class="btn btn-primary btn-xs-responsive contrato" title="Visualizar" data-id="<?= $contrato->id_contrato;?>">Visualizar</a>
                <?php if($contrato->status == 1) { ?>
												                  <a href="" data-toggle="modal" data-load-url="" data-target="#modalContratoEditar" data-id="<?= $contrato->id_contrato; ?>" class="btn btn-success btn-xs-responsive contrato" title="Editar">Editar</a>
												                  <a href="" data-toggle="modal" data-load-url="" data-target="#modalContratoDeletar" data-id="<?= $contrato->id_contrato; ?>" class="btn btn-danger btn-xs-responsive contrato" title="Remover">Remover</a>
                <?php } ?>
											</td>
										</tr>
									<?php } else { ?>
										<tr class="warning">
											<td><span class="label label-success"><?= $contrato->id_contrato ?></span></td>
											<td><?= formata_numero($contrato->valorUst);?> </td>
											<td><?= formata_data($contrato->DataInicio); ?></td>
											<td><?= formata_data($contrato->DataFim); ?></td>
											<td><?php if ( $contrato->status == 1) { echo 'Ativo'; } else { echo 'Inativo'; } ?></td>
											<td class="text-right">
												<a href="" data-toggle="modal" data-load-url="" data-target="#modalContratoRead" class="btn btn-primary btn-xs-responsive contrato disabled " title="Visualizar" data-id="<?= $contrato->id_contrato;?>">Visualizar</a>
												<a href="" data-toggle="modal" data-load-url="" data-target="#modalContratoEditar" data-id="<?= $contrato->id_contrato; ?>" class="btn btn-success btn-xs-responsive contrato disabled " title="Editar">Editar</a>
												<a href="" data-toggle="modal" data-load-url="" data-target="#modalContratoDeletar" data-id="<?= $contrato->id_contrato; ?>" class="btn btn-danger btn-xs-responsive contrato disabled " title="Remover">Remover</a>
											</td>
										</tr>
									<?php } ?>

								<?php } ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>



    </div> <!-- container -->

</div> <!-- content -->
</div> <!-- content -->