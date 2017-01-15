angular.module('myService',[])
  .factory('ToDo', function($http) {
  	  return {
  	  	get: function(){
  	  		return $http.get('/items');
  	  	},
  	  	post: function(information){
  	  		return $http.post('/items', information);
  	  	},
  	  	delete:function(id){
             return $http.delete('/items/'+id);
  	  	}
  	  }
  });