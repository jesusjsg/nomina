<?php

    error_reporting(E_ALL);
    ini_set('ignore_repeated_errors', false);
    ini_set('display_errors', true); // Cambiar a false en producción
    ini_set('log_errors', true);
    ini_set('error_log', './opt/lampp/htdocs/gestion-transporte/php-errors.log'); //Para el xampp instalado en linux
    error_log('Inicio del sistema de gestión de transporte');

    require_once './autoload.php';
    require_once './vendor/autoload.php';
    require_once './config/app.php';
    require_once './src/helpers/session_start.php';

    use src\controllers\viewsController;
    use src\controllers\loginController;

    $login = new loginController();
    $viewsController = new viewsController();

    if (isset($_GET['views'])) {
        $url = explode("/", $_GET['views']);
        $folder = $url[0] ?? 'home';
        $view = $url[1] ?? 'index'; //Cammbiar al formulario de forma manual
    } else {
        $folder = 'auth';
        $view = 'login'; 
    }
    
    $viewPath = $viewsController->getViewsController($folder, $view);
    
    if ($viewPath != "./src/views/auth/login.php" && $viewPath != "./src/views/errors/404.php") {
        require_once "./src/helpers/includes/header.php";
        require_once "./src/helpers/includes/nav.php";
    }
    
    require_once $viewPath;
    
    if ($viewPath != "./src/views/auth/login.php" && $viewPath != "./src/views/errors/404.php") {
        require_once "./src/helpers/includes/script.php";
    }