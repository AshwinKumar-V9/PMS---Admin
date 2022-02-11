

var abc = angular.module("tasks", ['ngRoute'])

//router config
abc.config(($routeProvider)=>{
    $routeProvider
    .when("/", {
        templateUrl: './taskPages/today.html',
        controller: "todayCtrl"
    })
    .when("/employee", {
        templateUrl: './taskPages/employee.html',
        controller:'empCtrl'
    })
    .when("/search", {
        templateUrl: './taskPages/search.html',
        controller: "searchCtrl"
    })
})

//controllers
abc.controller("tasksCtrl", ()=>{
})

abc.controller("todayCtrl", function($scope, $rootScope){
    $rootScope.var = "Todays tasks"
    $scope.message = "There are no tasks for today!"
})
abc.controller("empCtrl",function($rootScope, $http)
{
    $rootScope.var = "Employee Details"
    //retrieve JSON file
    $http.get("https://ashwinkumar-v9.github.io/PMS-Admin/frontend/employee.json")
    .success(function(response){
        $rootScope.employees = response
        console.log("empJSON retrieved.")
    })
})
abc.controller("searchCtrl", function($scope,$rootScope, $http){
    $rootScope.var = "Search Employees"
    $scope.message = "Search employees in tasks by name:"

    //retrieve JSON file
    $http.get("https://ashwinkumar-v9.github.io/PMS-Admin/frontend/employee.json")
    .success(function(response){
        $rootScope.employees = response
        console.log("empJSON retrieved.")
    })

    search_name = document.getElementById("search_name")
    search_name.addEventListener('keyup', ()=>{
        if(search_name.value.trim() == "")
        {
            document.getElementById("search_table").style.display = "none"
        }
        else
        {
            document.getElementById("search_table").style.display = "table"
        }
    })
})