<?php

use MonkeyCode\Silex\Provider\StaticPageControllerProvider;
use Symfony\Component\HttpFoundation\JsonResponse;

$app->mount(
    '/',
    new StaticPageControllerProvider(
        [
            'home' => ['path' => '/', 'template' => 'index.html.twig']
        ]
    )
);

$app->get(
    '/api/greetings',
    function() use ($app) {
        return new JsonResponse(['greeting' => 'hello world!']);
    }
)->bind('greetings');
