<!-- Start content -->
<div class="content">
    <div class="container">
        <!-- Page-Title -->
        <div class="row">
            <div class="col-sm-12">

                <h4 class="page-title">Catalogo</h4>
                <p class="text-muted page-title-alt">Listagem de Catalogos</p>
            </div>
        </div>

        <div class="row p-t-10 m-b-20">
            <div class="col-sm-12">
                <div class="card-box">
                    <div class="row">
                        <div class="col-sm-12 col-xs-12 col-md-12">
                            <p class="p-10"><strong>Filtros</strong></p>
                            <div class="form-group">
                                
                                <div class="col-xs-12 col-sm-12 col-md-4" id="filter_col3" data-column="2">
                                    <label for="descricaoDataInicio" class="control-label" >Data Inicio: </label>
                                    <input type="text" class="form-control column_filter2 data" id="datainicioPesquisar" name="datainicio" data-mask="99/99/9999" placeholder="__/__/____">
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>                                
                                
                                <div class="col-xs-12 col-sm-12 col-md-4" id="filter_col4" data-column="3">
                                    <label class="control-label" for="col3_filter">Data Fim: </label>
                                    <input type="text" class="form-control column_filter2 data" id="datafimPesquisar" name="datafim" data-mask="99/99/9999" placeholder="__/__/____">
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                                
                                <div class="col-xs-12 col-sm-12 col-md-4 text-right p-t-27">
                                    <button type="button" class="btn waves-effect waves-light btn-primary m-r-10 pesquisaUST" id="pesquisar_catalogo_servico" ><span class="glyphicon glyphicon-search"></span> Pesquisar</button>
                                    <a href="/admin/catalogo/cadastrar" class="btn waves-effect waves-light btn-warning"><span class="glyphicon glyphicon-plus"></span> Cadastrar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <div class="card-box table-responsive">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <p class="p-10"><strong>Resultados da Busca</strong></p>
                        </div>
                    </div>
                    <div class="">
                        <table id="dataTableOrdemServico" class="table table-striped table-bordered table-responsive">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Catalogo</th>
                                <th>Contrato</th>
                                <th>Unidade</th>                                                    
                                <th>Data Criação</th>  
                                <th>Status</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
								<?php foreach($dados as $catalogo) { ?>													
								<tr>
									<td><?= $catalogo->id_catalogo; ?></td>
									<td><?= $catalogo->catalogo; ?></td>

                                    <td><?= $catalogo->contrato; ?></td>
                                    <td><?= $catalogo->unidade; ?></td>
									
									<td><?= formata_data($catalogo->datacriacao); ?></td>													
									<td><?php if($catalogo->Status = 1) { echo 'Ativo'; } else { echo 'Inativo'; }?></td>
									<td class="text-right">
										<a href="javascript:void(0);" data-toggle="modal" data-load-url="" data-target="#modalReadOrdemServico" class="btn btn-primary btn-xs-responsive ordem-servico" title="Visualizar" data-id="<?= $catalogo->id_catalogo; ?>">Visualizar</a>
										<a href="/admin/os/editar/<?= $catalogo->id_catalogo; ?>" class="btn btn-success btn-xs-responsive" title="Editar">Editar</a>
										<a href="javascript:void(0);" data-toggle="modal" data-load-url="" data-target="#modalDeletarOrdemServico" class="btn btn-danger btn-xs-responsive ordem-servico" title="Remover" data-id="<?= $catalogo->id_catalogo; ?>" >Remover</a>
									</td>
								</tr>
								<?php } ?>
							</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
    </div> <!-- container -->
</div> <!-- content -->