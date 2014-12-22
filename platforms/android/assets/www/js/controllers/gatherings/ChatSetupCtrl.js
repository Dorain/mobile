/**
 * Minds::mobile
 * Chat controller
 * 
 * @author Mark Harding
 */

define(function () {
    'use strict';

    function ctrl($scope, $state, Client, storage) {
    
    	$scope.unlock = function(password){
    		console.log($scope.password);

    		Client.get('api/v1/keys', { password: $scope.password, new_password: 'abc123' }, 
    			function(data){
    		
	    			storage.set('private-key', data.key);
	    			$state.go('tab.chat');
	
	    		}, 
	    		function(error){ 
	    			alert('error'); 
	    		});
    	
    	};
    	
		
    }

    ctrl.$inject = ['$scope', '$state', 'Client', 'storage'];
    return ctrl;
    
});