'use strict';

angular.module('clientApp')
  .service('NotesService', function NotesService($http) {
    return {
         getNotes: function() {
            return $http.get('/api/notes');
         }
    }
  });
