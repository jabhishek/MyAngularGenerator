'use strict';

angular.module('clientApp')
  .controller('NotesCtrl', function ($scope, NotesService) {
    $scope.data = {
        categories: []
    };

    init();

    function init() {
        NotesService.getNotes().then(function(result) {
            $scope.data.categories = result.data.categories;
            console.log($scope.data.notes);
        });
    }
  });
