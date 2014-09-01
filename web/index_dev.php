<?php

use Silex\Application;
use Symfony\Component\Debug\Debug;

if (isset($_SERVER['HTTP_CLIENT_IP'])
    || isset($_SERVER['HTTP_X_FORWARDED_FOR'])
    || !in_array(@$_SERVER['REMOTE_ADDR'], array('127.0.0.1', 'fe80::1', '::1'))
) {
    header('HTTP/1.0 403 Forbidden');
    exit('You are not allowed to access this file.');
}

require_once __DIR__.'/../vendor/php/autoload.php';

Debug::enable();

$app = new Application(['debug' => true]);

require __DIR__ . '/../config/dev.php';
require __DIR__ . '/../src/app.php';
require __DIR__ . '/../src/controllers.php';

$app->run();
