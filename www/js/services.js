angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('HttpService', ['$http', function($http) {
 return {
 	//Servicos Diario

 	//Inserir Diario
 	insereDiario: function(a) {
    var diario = a;
    console.log(diario);
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.post('http://localhost:3000/insereDiario' + diario)
       .then(function(response) {
         // In the response, resp.data contains the result. Check the console to see all of the data returned.
         console.log('Inseriu a cidade', response);
         return response.data;
      });
   },
   consultaDiario: function() {
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.get('http://localhost:3000/diario')
       .then(function(response) {
       	 // In the response, resp.data contains the result. Check the console to see all of the data returned.
       	 return response.data;
      });
   },
   getFrotas: function() {
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.get('http://localhost:3000/frotas')
       .then(function(response) {
       	 // In the response, resp.data contains the result. Check the console to see all of the data returned.
       	 return response.data;
      });
   },
   getCoordenadas: function() {
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.get('http://localhost:3000/coordenadas')
       .then(function(response) {
       	 // In the response, resp.data contains the result. Check the console to see all of the data returned.
       	 return response.data;
      });
   },

   getOcorrencias: function() {
     // $http returns a promise, which has a then function, which also returns a promise.
     return $http.get('http://localhost:3000/ocorrencias')
       .then(function(response) {
         // In the response, resp.data contains the result. Check the console to see all of the data returned.
         return response.data;
      });
   },

   //local
   insereDiarioLocal: function(novo) {
     // $http returns a promise, which has a then function, which also returns a promise.
     var db = [];

     //var teste = JSON.stringify(novo);
      // verifica se a chave existe
      if (typeof localStorage.db != 'undefined'){
          // recupera conteúdo da chave e transforma em JSON
          db = JSON.parse(localStorage.db);
      }
      // adiciona produto novo no veto
      db.push(novo);
      // converte JSON para String
      var paraString = JSON.stringify(db);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('db', paraString);
      return novo;
   },
  
   consultaDiarioLocal: function() {
     // retorna conteúdo da chave produtos
     if (localStorage.db != 'undefined'){
      var diario = JSON.parse(localStorage.db); 
     }
     return diario;
   },
   
   getOcorrenciasLocal: function() {
     // retorna conteúdo da chave produtos
     return localStorage.ocorrencia;
   },
   insereOcorrenciaLocal: function(novo) {
     var ocorrencia = [ ];
      // verifica se a chave existe
      if (typeof localStorage.ocorrencia != 'undefined'){
          // recupera conteúdo da chave e transforma em JSON
          ocorrencia = JSON.parse(localStorage.ocorrencia);
      }
      // adiciona produto novo no vetor
     ocorrencia.push(novo);
     // converte JSON para String
      var paraString = JSON.stringify(ocorrencia);
      // armazena conteúdo do vetor em localStorate
      localStorage.setItem('ocorrencia', paraString);
      
      return novo;
   }

   

};

}]);