<div class="content-page">
                <!-- Start content -->
                <div class="content">
                    <div class="container">

                        <!-- Page-Title -->
                        <div class="row">
                            <div class="col-sm-12">

                                <h4 class="page-title">Cadastrar Serviço</h4>
                                <p class="text-muted page-title-alt">Cadastrar um novo serviço</p>
                            </div>
                        </div>

                            <div class="row">
                                <div class="col-sm-12">
                                    <form id="FormularioCriarCatalogoServico">
                                        
										<?php
											$this->load->view('shared/formularios/servicos/form', $dados);
										?>

                                        <div class="form-group text-right m-b-0">
                                            <a href="javascript:history.back()" class="btn btn-danger waves-effect waves-light m-l-5">
                                                Cancelar
                                            </a>
                                            <button class="btn btn-success waves-effect waves-light servico-catalogo" type="button">
                                                Salvar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                    </div> <!-- container -->

                </div> <!-- content -->

              



            <!-- ============================================================== -->
            <!-- End Right content here -->
            <!-- ============================================================== -->
            </div>
