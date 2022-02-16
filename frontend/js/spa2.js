

var meetings = angular.module("meetings", ['ngRoute'])
//router config
meetings.config(($routeProvider)=>{
    $routeProvider
    .when("/", {
        templateUrl: './taskPages/today.html',
        controller: "todayCtrl"
    })
    .when("/employee", {
        templateUrl: './meetingPages/meetingsEmployee.html',
        controller:'empCtrl'
    })
    .when("/addEmp", {
        templateUrl: './meetingPages/addMeetingsEmployeeForm.html',
        controller: 'addCtrl'
    })
})

//controllers
meetings.controller("meetingCtrl", ($rootScope)=>{
    $rootScope.emp = 0
})

meetings.controller("todayCtrl", function($scope, $rootScope){
    $rootScope.var = "Todays meetings"
    $rootScope.emp = 0
    $scope.message = "No meetings for today!"
})
meetings.controller("empCtrl",function($rootScope, $scope, $http, $location)
{
    $rootScope.var = "Employee Details"
    $rootScope.emp = 0
    //retrieve JSON file
    $http.get("http://127.0.0.1:9100/Employee")
    .success(function(response){
        $rootScope.employees = response
        console.log("PMS_AM Employee Table retrieved.")
    })
    //POST request to remove employee
    $scope.removeEmp = function(id, name) {
        $http.post('/RemoveEmployee', {"id": id, "name": name})
        .success(() => {
            $location.path('/')
        })
    }
    //POST request to update employee
    $scope.updateEmp = function(emp) {
        $rootScope.emp = emp
        $location.path('/addEmp')
    }
})
meetings.controller("addCtrl", function($rootScope, $scope){
    if ($rootScope.emp === 0) {
        $rootScope.var = "Add Employee"
        $scope.formAction = '/AddEmployee'
    }
    else {
        $rootScope.var = "Update Employee"
        $scope.formAction = '/UpdateEmployee'
    }
})