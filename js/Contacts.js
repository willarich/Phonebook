(function(){

  var app = angular.module('phonebook', []);

  app.controller('PhonebookCtrl', ['$scope','$http','$sce',function($scope,$http,$sce) {
    

  		$scope.name = '';
		$scope.phone = '';
		$scope.email = '';
		$scope.birthday = '';
		$scope.avatar = '';

		$scope.singleContactViewId = -1;
		$scope.editContactViewId = -1;
		$scope.listContacts = true;

		$scope.headingHeight = 40; // height of content before contacts in px

		// $http.get('phonebook_data.json').then(function(phonebookData){
		// 	$scope.contacts = phonebookData.data;
		// 	$scope.numberOfContacts = $scope.contacts.length
		// });

		$scope.contacts = [
			{
				"id": 1,
				"name": "Erin Eyeball",
				"phone": "(123) 456-7890",
				"email": "one.eye.open@ilumin.com",
				"birthday": "01/01/1980",
				"avatar": "http://lorempixel.com/300/300/people/1"
			},
			{
				"id": 2,
				"name": "Johnathan Homebody",
				"phone": "(123) 456-7890",
				"email": "stayathomedad@wheresmom.com",
				"birthday": "01/01/1980",
				"avatar": "http://lorempixel.com/300/300/people/2"
			},
			{
				"id": 3,
				"name": "Cletus Weatherly",
				"phone": "(123) 456-7890",
				"email": "cletus@netscape.com",
				"birthday": "01/01/1980",
				"avatar": "http://lorempixel.com/300/300/people/3"
			},
			{
				"id": 4,
				"name": "Shirley Travels",
				"phone": "(123) 456-7890",
				"email": "shirley.travels@cityscape.com",
				"birthday": "01/01/1980",
				"avatar": "http://lorempixel.com/300/300/people/4"
			},
			{
				"id": 5,
				"name": "John Watcher",
				"phone": "(123) 456-7890",
				"email": "train.photo.junkie@photonow.net",
				"birthday": "01/01/1980",
				"avatar": "http://lorempixel.com/300/300/people/5"
			},
			{
				"id": 6,
				"name": "Curly Jenny",
				"phone": "(123) 456-7890",
				"email": "littlewhitebows@aol.com",
				"birthday": "01/01/1980",
				"avatar": "http://lorempixel.com/300/300/people/6"
			},
			{
				"id": 8,
				"name": "Old Man Jenkins",
				"phone": "(123) 456-7890",
				"email": "wiseman@hotmail.com",
				"birthday": "01/01/1980",
				"avatar": "http://lorempixel.com/300/300/people/8"
			},
			{
				"id": 9,
				"name": "Becky",
				"phone": "(123) 456-7890",
				"email": "whatsoverthere@myspace.com",
				"birthday": "09/21/1993",
				"avatar": "http://lorempixel.com/300/300/people/9"
			}

		];
		$scope.numberOfContacts = $scope.contacts.length



		$scope.getSingleContactViewHtml = function(index){
			
			var singleName = $scope.contacts[index].name;
			var singlePhone = $scope.contacts[index].phone;
			var singleEmail = $scope.contacts[index].email;
			var singleBirthday = $scope.contacts[index].birthday;
			var singleAvatar = $scope.contacts[index].avatar;
			//html injection isn't necessay here but I did it anyways to test it out and show that I can
			var contact = '<p>Name: '+singleName+'</p><p>Phone Number: '+singlePhone+'</p><p>Email: '+singleEmail+'</p><p>Birthday: '+singleBirthday+'</p><div class="image"><img src="'+singleAvatar+'" alt="Avatar Image" style="width:200px;height:200px;"></div>';
			singleContactView = index;

			return $sce.trustAsHtml(contact);
		}


		$scope.showListContacts = function(){
			
			$scope.editContactViewId = -1; 
			$scope.singleContactViewId = -1; 
			$scope.listContacts = true;

			$scope.clearInputData();
		}


		$scope.showSingleContact = function(index){
			$scope.editContactViewId = -1; 
			$scope.singleContactViewId = index; 
			$scope.listContacts = false;
			
			window.scrollTo(0,$scope.headingHeight);
		}


		$scope.showEditContact = function(index){
			$scope.editContactViewId = index; 
			$scope.singleContactViewId = -1; 
			$scope.listContacts = false;
			
			$scope.name = $scope.contacts[index].name;
			$scope.phone = $scope.contacts[index].phone;
			$scope.email = $scope.contacts[index].email;
			$scope.birthday = $scope.contacts[index].birthday;
			$scope.avatar = $scope.contacts[index].avatar;

			window.scrollTo(0,$scope.headingHeight);
		}

		$scope.addContact = function(){
			$scope.contacts.push({
				"id": $scope.numberOfContacts + 1,
				"name": $scope.name, 
				"phone": $scope.phone, 
				"email": $scope.email, 
				"birthday": $scope.birthday,
				"avatar": $scope.avatar
			}); 

			$scope.clearInputData();
		}


		$scope.editContact = function(index){
			$scope.contacts[index] = {
				"id": index,
				"name": $scope.name, 
				"phone": $scope.phone, 
				"email": $scope.email, 
				"birthday": $scope.birthday,
				"avatar": $scope.avatar
			}; 

			$scope.showListContacts();
		};


		$scope.clearInputData = function(){
			$scope.name = '';
			$scope.phone = '';
			$scope.email = '';
			$scope.birthday = '';
			$scope.avatar = '';
		}

  }]);

})();
