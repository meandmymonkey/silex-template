<?php

use Silex\Application;
use Symfony\Component\Debug\Debug;

require_once __DIR__.'/../vendor/autoload.php';

Debug::enable();

$app = new Application(['debug' => true]);

require __DIR__ . '/../config/dev.php';
require __DIR__ . '/../src/app.php';
require __DIR__ . '/../src/controllers.php';

$app->run();
