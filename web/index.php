<?php

use Silex\Application;
use Symfony\Component\Debug\Debug;

require_once __DIR__.'/../vendor/autoload.php';

$app = new Application();

require __DIR__ . '/../config/prod.php';
require __DIR__ . '/../src/app.php';
require __DIR__ . '/../src/controllers.php';

$app->run();
