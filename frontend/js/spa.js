

var tasks = angular.module("tasks", ['ngRoute'])
//router config
tasks.config(($routeProvider)=>{
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
    .when("/addEmp", {
        templateUrl: './taskPages/addEmployeeForm.html',
        controller: 'addCtrl'
    })
})

//controllers
tasks.controller("tasksCtrl", ()=>{
})

tasks.controller("todayCtrl", function($scope, $rootScope){
    $rootScope.var = "Todays tasks"
    $scope.message = "There are no tasks for today!"
})
tasks.controller("empCtrl",function($rootScope, $scope, $http, $location)
{
    $rootScope.var = "Employee Details"
    //retrieve JSON file
    $http.get("http://127.0.0.1:9000/Employee")
    .success(function(response){
        $rootScope.employees = response
        console.log("empJSON retrieved.")
    })
    //POST request to remove employee
    $scope.removeEmp = function(id, name) {
        $http.post('/RemoveEmployee', {"id": id, "name": name})
        .success(() => {
            $location.path('/')
        })
    }
})
tasks.controller("searchCtrl", function($scope,$rootScope, $http){
    $rootScope.var = "Search Employees"
    $scope.message = "Search employees in tasks by name:"

    //retrieve JSON file
    $http.get("http://127.0.0.1:9000/Employee")
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
tasks.controller("addCtrl", function($rootScope){
    $rootScope.var = "Add Employee"
})
