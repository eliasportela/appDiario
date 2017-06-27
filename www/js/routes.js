angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

  .state('boasVindas', {
    url: '/boas-vindas',
    templateUrl: 'templates/boasVindas.html',
    controller: 'boasVindasCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.diRioDeBordo', {
    url: '/diario-de-bordo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/diRioDeBordo.html',
        controller: 'diarioDeBordoCtrl'
      }
    }
  })

  .state('menu.jornadas', {
    url: '/jornadas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/jornadas.html',
        controller: 'jornadasCtrl'
      }
    }
  })

  .state('menu.ocorrencias', {
    url: '/ocorrencias',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ocorrencias.html',
        controller: 'ocorrenciasCtrl'
      }
    }
  })

  
  .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('boas-vindas')


});