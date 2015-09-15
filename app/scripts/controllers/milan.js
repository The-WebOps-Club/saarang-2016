'use strict';

angular.module('saarang2016App')
  .controller('MilanCtrl', function ($scope) {
        $scope.chform=false;
 		var form=document.getElementById("myform");
        $scope.showfields=function() {
        	console.log($scope.chform);
        	$scope.chform=true;
          	console.log($scope.chform);
        }
        $scope.changebool=function() {
	       
	        $scope.chfirst=false;
	        if(typeof $scope.first==='undefined')
	         {
	          $scope.chfirst=true;         
	          document.getElementById("errorfirst").innerHTML="Band Name cannot be empty";
	          console.log("Band Name cannot be empty");
	         }
	         else
	         {
	          $scope.chfirst=false;
	         }     

		    $scope.chgenre=false;
		        if(typeof $scope.genre==='undefined')
		         {
		          $scope.chgenre=true;         
		          document.getElementById("errorgenre").innerHTML="Genre Name cannot be empty";
		          console.log("Genre Name cannot be empty");
		         }
		         else
		         {
		          $scope.chfirst=false;
		         }

		     $scope.chcity=false;
		        if(typeof $scope.city==='undefined')
		         {
		          $scope.chcity=true;         
		          document.getElementById("errorcity").innerHTML="City Name cannot be empty";
		          console.log("City Name cannot be empty");
		         }
		         else
		         {
		          $scope.chcity=false;
		         }    
			$scope.chstrength=false;
		       if(typeof $scope.strength==='undefined')
		         {
		          $scope.chstrength=true;         
		          document.getElementById("errorstrength").innerHTML="Specify strength";
		          console.log("strength cannot be empty");
		         }
			
		        if($scope.strength<2)
		         {
		          $scope.chstrength=true;         
		          document.getElementById("errorstrength").innerHTML="Minimum strength of two members required";
		          console.log("Minimum strength of two members required");
		         }
		         else
		         {
		          $scope.chstrength=false;
		         }
            if(typeof $scope.emailband==='undefined')
          {
            console.log(5);
            document.getElementById("erroremailband").innerHTML="Email cannot be empty";
            $scope.chemailband=true; 
          }
            else
		         {
		          $scope.chemailband=false;
		         }
        
         $scope.chleader=false;
	        if(typeof $scope.leader==='undefined')
	         {
	          $scope.chleader=true;         
	          document.getElementById("errorleader").innerHTML="Leader Name cannot be empty";
	          console.log("Leader Name cannot be empty");
	         }
	         else
	         {
	          $scope.chleader=false;
	         }     
        
        $scope.chnumber1=false;
         if(typeof $scope.number1==='undefined')
        {
          $scope.chnumber1=true;
          console.log(6);
          document.getElementById("errornumber1").innerHTML="Phone Number cannot be empty";
        }       
        else
	         {
	          $scope.chleader=false;
	         }     
        $scope.chemailleader=false;
        if(typeof $scope.emailleader==='undefined')
          {
            console.log(5);
            document.getElementById("erroremailleader").innerHTML="Email cannot be empty";
            $scope.chemailleader=true; 
          }
            else
		         {
		          $scope.chemailleader=false;
		         }
        $scope.chmember2=false;
	        if(typeof $scope.member2==='undefined')
	         {
	          $scope.chmember2=true;         
	          document.getElementById("errormember2").innerHTML="Member Name cannot be empty";
	          console.log("Member Name cannot be empty");
	         }
	         else
	         {
	          $scope.chmember2=false;
	         }     
        
        $scope.chnumber2=false;
         if(typeof $scope.number2==='undefined')
        {
          $scope.chnumber2=true;
          console.log(6);
          document.getElementById("errornumber2").innerHTML="Phone Number cannot be empty";
        }       
        else
	         {
	          $scope.chnumber2=false;
	         }     
        $scope.chemailmember=false;
        if(typeof $scope.emailmember==='undefined')
          {
            console.log(5);
            document.getElementById("erroremailmember").innerHTML="Email cannot be empty";
            $scope.chemailmember=true; 
          }
            else
		         {
		          $scope.chemailmember=false;
		         }
        
		$scope.chlinker=false;
	        if(typeof $scope.linker==='undefined')
	         {
	          $scope.chlinker=true;         
	          document.getElementById("errorlinker").innerHTML="Link cannot be empty";
	          console.log("Link Name cannot be empty");
	         }
	         else
	         {
	          $scope.chlinker=false;
	         }     

	    }   
 	});