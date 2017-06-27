angular.module('app.controllers', [])
  
.controller('boasVindasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('diarioDeBordoCtrl', ['$scope', '$stateParams', '$ionicModal','HttpService','$timeout', '$ionicLoading', '$filter', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicModal, HttpService, $timeout, $ionicLoading, $filter) {

	//loading da pagina

	function processar(){
		$ionicLoading.show({
	      content: 'Loading',
	      animation: 'fade-in',
	      showBackdrop: true,
	      maxWidth: 200,
	      showDelay: 0
	    });
	  };

    function fecharProcessamento(){    
    	$ionicLoading.hide();
	}
/*
    $timeout(function () {
      $ionicLoading.hide();
    }, 10000);
*/

	//variaveis vazias
	$scope.novoDiario = {};

	function atualiza(){
	//Veridica se tem diario em aberto
	if (typeof localStorage.db != 'undefined'){
     
	var diario = HttpService.consultaDiarioLocal();

	if (diario[0].concluido === '') {
		$scope.diarios = false;
	} else {
		$scope.diarios = diario[0];

		HttpService.consultaDiario()
	   .then(function(response) {
	       	$scope.diario = response[0];
	       	console.log(response);
	    });
	}
	
	}

}

	atualiza();

	console.log($scope.diarios);
	 
	

	 //buscar Frota
	 HttpService.getFrotas()
	   .then(function(response) {
	       	$scope.frotas = response;
	    });
	 //Buscar coordenada
	 HttpService.getCoordenadas()
	   .then(function(response) {
	       $scope.coordenadas = response;
	    });
	//Modal de selecionar Automovel
	$ionicModal.fromTemplateUrl('templates/cadastro/selAutomovel.html', {
	    scope: $scope
	  }).then(function(modal) {
	    $scope.modal = modal;
	  });
	  
	  $scope.openModal = function() {
	    $scope.modal.show();
	  };
	  $scope.closeModal = function() {
	    $scope.modal.hide();
	  };

	 //Modal de selecionar coordenada inicio
	$ionicModal.fromTemplateUrl('templates/cadastro/selCoordInicio.html', {
	    scope: $scope
	  }).then(function(modal) {
	    $scope.inicio = modal;
	  });
	  $scope.openCoordInicio = function(automovel) {
	  	$scope.novoDiario.aut = automovel;
	  	$scope.closeModal();
	  	$scope.inicio.show();
	  };
	  $scope.closeCoordInicio = function() {
	    $scope.inicio.hide();
	  };

	//Modal de selecionar coordenada fim
	$ionicModal.fromTemplateUrl('templates/cadastro/selCoordFim.html', {
	    scope: $scope
	  }).then(function(modal) {
	    $scope.fim = modal;
	  });
	  $scope.openCoordFim = function(ci) {
	  	$scope.novoDiario.ci = ci;
	  	$scope.closeCoordInicio();
	    $scope.fim.show();
	  };
	  $scope.closeCoordFim = function() {
	    $scope.fim.hide();
	  };

	    //Inserir Diario
	  $scope.insereDiarioLocal = function(cf){
	   	$scope.novoDiario.cf = cf;
	   	$scope.novoDiario.data = $filter('date')(new Date(), 'yyyy-MM-dd');
	   	$scope.novoDiario.concluido = 0;
	   	$scope.closeCoordFim();
		//processar();
		var novoDiario = $scope.novoDiario;
	    HttpService.insereDiarioLocal(novoDiario);
	    atualiza();
	   	//Processa a pagina
		
	  };
	
}])
      
.controller('ocorrenciasCtrl', ['$scope', '$stateParams', '$ionicModal', 'HttpService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicModal, HttpService) {

	 HttpService.getOcorrencias()
	   .then(function(response) {
	       	$scope.item = response;
	    });

	function atualizaOcorrencia(){
	//Veridica se tem diario em aberto
	if (typeof localStorage.ocorrencia != 'undefined'){
     
	var ocorrencia = HttpService.getOcorrenciasLocal();

		$scope.ocorrencias = JSON.parse(ocorrencia);
	}
}

	atualizaOcorrencia();
	console.log($scope.ocorrencias);

	$ionicModal.fromTemplateUrl('templates/cadastro/selOcorrencias.html', {
	    scope: $scope
	  }).then(function(modal) {
	    $scope.modOcorrencias = modal;
	  });
	  $scope.openOcorrencias = function() {
	  	$scope.modOcorrencias.show();
	  };
	  $scope.closeOcorrencias = function() {
	    $scope.modOcorrencias.hide();
	  };

	  //d
	  $scope.insereOcorrenciaLocal = function(item) {
	  	 HttpService.insereOcorrenciaLocal(item);
	  	 $scope.closeOcorrencias();
	  	 atualizaOcorrencia();
	  }

}])
   
.controller('jornadasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('registroDeJornadaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('registroDeJornada2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 