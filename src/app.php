<?php

use Silex\Provider\TwigServiceProvider;
use Silex\Provider\UrlGeneratorServiceProvider;

$app->register(new UrlGeneratorServiceProvider());

$app->register(
    new TwigServiceProvider(),
    array(
        'twig.path' => __DIR__ . '/../resources/views',
        'twig.options' => array(
            'debug'=> $app['debug'],
            'cache' => __DIR__ . '/../cache'
        )
    )
);