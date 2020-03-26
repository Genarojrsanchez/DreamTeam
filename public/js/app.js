const app = angular.module('DrinksApp', []);

app.controller('MainController', ['$http', function($http){
const controller = this;
this.editFormShown = null;
this.loggedIn = false;

//GET DRINKS
this.getDrinks = function(){
  $http({
    method:'GET',
    url:'/tipsy'
  }).then(function(response){
    controller.drinks = response.data;
  });
};

this.getDrinks();

//CREATE DRINK
this.createDrink = function(){
  $http({
    method:'POST',
    url:'/tipsy',
    data: {
      name:this.name,
      instructions:this.instructions,
      ingredients:this.ingredients
    }
  }).then(function(response){
    controller.getDrinks();
  },function(error){
    console.log(error);
  })
}

//EDIT DRINK
this.editDrinks = function(drink){
  $http({
    method:'PUT',
    url:'/tipsy/' + drink._id,
    data: {
      name:this.updatedName,
      instructions:this.updatedInstructions,
      ingredients:this.updatedIngredients
          }
    }).then(function(response){
      controller.getDrinks();
      controller.editFormShown = null;
  });
};

//DELETE DRINK
this.deleteDrinks = function(drink){
  $http({
    method:'DELETE',
    url:'/tipsy/' + drink._id
  }).then(function(response){
    controller.getDrinks();
  })
}

//SIGNUP
this.signup = function(){
  $http({
    url:'/tipsy',
    method:'POST',
    data: {
      username: this.signupUsername,
      password: this.signupPassword
    }
  }).then(function(response){
    controller.loggedIn = response.data;
  })
}

//LOGIN
this.login = function(){
  $http({
    url:'/session',
    method:'POST',
    data: {
      username: this.loginUsername,
      password: this.loginPassword
    }
  }).then(function(response){
    if(response.data.username){
      controller.loggedIn = response.data;
    } else {
      controller.loginUsername = null;
      controller.loginPassword = null;
    }
  })
}

$http({
  method:'GET',
  url:'/session'
}).then(function(response){
  if(response.data.username){
    controller.loggedIn = response.data;
  }
})

//LOGOUT

}]);
