<main class="app-content">
    <div class="app-title">
        <div>
            <h1 class="fw-light"><i class="bi bi-people-fill me-2"></i>Agregar conductor</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="bi bi-people-fill"></i></li>
            <li class="breadcrumb-item"><a class="text-decoration-none" href="<?= URL; ?>conductor/">Conductores</a></li>
        </ul>
    </div>
    <div class="tile">
        <div class="tile-body">
            <form class="row g-3" action="" method="post" autocomplete="off">
                <div class="d-grid gap-2 d-md-flex justify-content-end">
                    <button type="reset" class="btn btn-primary btn-sm">Limpiar<i class="bi bi-archive ms-1"></i></button>
                    <button type="submit" class="btn btn-success btn-sm">Guardar<i class="bi bi-floppy ms-1"></i></button>
                </div>
                <div class="tile-footer"></div>
                <div class="col-md-2">
                    <label for="ficha-conductor" class="form-label">Ficha</label>
                    <input type="text" class="form-control" name="ficha-conductor" />
                </div>
                <div class="col-md-3">
                    <label for="name-conductor" class="form-label">Nombre y apellido</label>
                    <input type="text" class="form-control" name="name-conductor" />
                </div>
                <div class="col-md-2">
                    <label for="cedula-conductor" class="form-label">Cédula</label>
                    <input type="text" class="form-control" name="cedula-conductor" />
                </div>
                <div class="col-md-2">
                    <label for="phone-conductor" class="form-label">Teléfono</label>
                    <input type="text" class="form-control" name="phone-conductor" />
                </div>
                <div class="col-md-2">
                    <label for="vehiculo-conductor" class="form-label">Placa</label>
                    <input type="text" class="form-control" name="vehiculo-conductor" />
                </div>
                <div class="col-md-2">
                    <label for="vencimiento-cedula" class="form-label">FV. Cédula</label>
                    <input type="date" class="form-control" name="vencimiento-cedula" />
                </div>
                <div class="col-md-2">
                    <label for="vencimiento-licencia" class="form-label">FV. Licencia</label>
                    <input type="date" class="form-control" name="vencimiento-licencia" />
                </div>
                <div class="col-md-2">
                    <label for="vencimiento-medico" class="form-label">FV. CM</label>
                    <input type="date" class="form-control" name="vencimiento-medico" />
                </div>
                <div class="col-md-2">
                    <label for="vencimiento-mppps" class="form-label">FV. MPPPS</label>
                    <input type="date" class="form-control" name="vencimiento-mppps" />
                </div>
                <div class="col-md-2">
                    <label for="vencimiento-saberes" class="form-label">FV. Saberes</label>
                    <input type="date" class="form-control" name="vencimiento-saberes" />
                </div>
                <div class="col-md-2">
                    <label for="vencimiento-seguro" class="form-label">FV. Manejo seguro</label>
                    <input type="date" class="form-control" name="vencimiento-seguro" />
                </div>
                <div class="col-md-2">
                    <label for="vencimiento-alimento" class="form-label">FV. Alimento</label>
                    <input type="date" class="form-control" name="vencimiento-alimento" />
                </div>
                <div class="col-md-2">
                    <label for="tipo-nomina" class="form-label">Nómina</label>
                    <select class="form-select" name="tipo-nomina">
                        <option selected disabled>Tipo de nómina</option>
                    </select>
                </div>
                <div class="tile-footer"></div>
            </form>
        </div>
    </div>
</main>