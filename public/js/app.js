const app = angular.module('DrinksApp', []);

app.controller('MainController', ['$http', function($http){
const controller = this;
this.editFormShown = null;

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

//SIGNUP

//LOGIN

//LOGOUT

}]);
