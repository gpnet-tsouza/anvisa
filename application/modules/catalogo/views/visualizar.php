<div class="content-page">
                <!-- Start content -->
<div class="content">
    <div class="container">

        <!-- Page-Title -->
        <div class="row">
            <div class="col-sm-12">

                <h4 class="page-title">Cadastrar Catálogo de Serviço</h4>
                <p class="text-muted page-title-alt">Cadastrar um novo catálogo de serviço</p>
            </div>
        </div>

            <div class="row">
                <div class="col-sm-12">
                    <!--<form action="catalogo-servicos.html?novo" method="post" data-parsley-validate novalidate >-->
                       
                           <?php
                                $this->load->view('shared/formularios/catalogo/form', $dados);
                           ?>
                           <div class="form-group text-right m-b-0">
                                <a href="catalogo-servicos.html" class="btn btn-default waves-effect waves-light">
                                    Voltar
                                </a>
                            </div>
                   <!-- </form> -->
                </div>
            </div>
    </div> <!-- container -->
</div> <!-- content -->