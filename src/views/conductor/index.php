<main class="app-content">
    <div class="app-title">
        <div>
            <h1 class="fw-light mb-4"><i class="bi bi-people-fill me-2"></i>Mantenimiento de los conductores</h1>
            <a class="btn btn-success" href="<?= URL; ?>conductor/form/">Agregar conductor</a>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="bi bi-house-door-fill fs-6"></i></li>
            <li class="breadcrumb-item"><a class="text-decoration-none" href="<?= URL; ?>home">Inicio</a></li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="tile">
                <div class="tile-body">
                    <h6 class="fw-bold mb-4">Listado de los conductores registrados</h6>
                    <div class="tile-footer"></div>
                </div>
                <div class="table-responsive">
                    <table class="table table-striped table-hover" id="table-conductor" style="width: 100%;">
                        <thead>
                            <tr>
                                <th>Ficha</th>
                                <th>Nombre y apellido</th>
                                <th>Cédula</th>
                                <th>Teléfono</th>
                                <th>Placa vehículo</th>
                                <th>Nómina</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
</main>