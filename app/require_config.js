require.config({
    baseUrl: '',
    paths: {
        'app.module': 'app.module',
        'jquery': './assets/libs/jquery/dist/jquery',
        'bootstrap': './assets/libs/bootstrap/bootstrap.min',
        '_': './assets/libs/lodash/lodash',
        'angular': './assets/libs/angular/angular',
        'owl-carousel': './assets/libs/owl-carousel/owl-carousel/owl.carousel',
        'ngRoute': './assets/libs/angular-route/angular-route',
        'text': './assets/libs/text/text',
        'ngAnimate': './assets/libs/angular-animate/angular-animate'
    },
    shim: {
        'angular': {'exports': 'angular'},
        'jquery': {'exports': 'jquery'},
        'owl-carousel': {'exports': 'owl-carousel', 'deps': ['jquery']},
        'ngRoute': {'deps': ['angular']},
        'ngAnimate': {'deps': ['angular']}
    },
    priority: ['angular'],
    deps: ['app.module']
});

require([
        'angular',
        './app.module'
    ], function (angular, appModule) {
        angular.bootstrap(document.querySelector('body'), [appModule]);
    }
);
