angular.module("myApp",['myService'])
    .controller("myController", function($scope, $http, ToDo) {
    	$scope.item = "";

        ToDo.get().success(function(data){ console.log(data); $scope.todos = data; }).error(function(){ console.log(error); });

        $scope.AddItem = function(){

            if ($scope.item) {

            
            ToDo.post({"text": $scope.item }).success(function(data){ console.log("It worked"); $scope.todos.push(data); }).error(function(){ console.log("Error"+error) });
                
             
           }


        }


        $scope.DeleteIt = function(id){
              
              ToDo.delete(id).success(function(data){  ToDo.get().success(function(data){ console.log(data); $scope.todos = data; }).error(function(){ console.log(error); }); console.log(data); }).error(function(error){ console.log(error); });
            
        }



    	/* $http.get('/items')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });*/

        /*$scope.AddItem = function(){
            
              $http.post('/items', {"text": $scope.item})
              .success(function(data) {

                   console.log(data);
                   $scope.todos.push(data);
                  
        })
        .error(function(data) {
        console.log('Error: ' + data);
        });

              



        }*/

            
      
        
   
   /* $scope.DeleteIt = function(id){
                    
                    $http.delete('/items/'+ id).success(function(data){
                    	console.log("Deleted It");
                    	$http.get('/items')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

                    })
                    .error(function(data){
                       console.log('Error:'+data);   
                    });

                  

        }*/



      

    })

         



   
 

