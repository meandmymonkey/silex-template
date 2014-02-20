<?php

use Silex\Provider\TwigServiceProvider;
use Silex\Provider\UrlGeneratorServiceProvider;

// add UrlGeneratorServiceProvider so we can generate routes by name
$app->register(new UrlGeneratorServiceProvider());

// add Twig support
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

// add your own service providers here

// ...