<?php

use MonkeyCode\Silex\Provider\StaticPageControllerProvider;
use Symfony\Component\HttpFoundation\JsonResponse;

// shortcut to define static pages
$app->mount(
    '/',
    new StaticPageControllerProvider(
        [
            'home'  => ['path' => '/', 'template' => 'index.html.twig'],
            'page2' => ['path' => '/another/page', 'template' => 'page2.html.twig']
        ]
    )
);

// other controllers
$app->get(
    '/api/greetings',
    function() use ($app) {
        return new JsonResponse(['greeting' => 'hello world!']);
    }
)->bind('greetings');
