/**
 * Created by cleme on 24/01/2017.
 */

angular.module("NoteApp").controller("noteController",['$cookies',function($cookies){
    var self = this;
    this.messageNote =$cookies.get('msg');

    this.count = function () {
        self.caractere = 100 - self.messageNote.length;
        return self.caractere;
    };

    this.clear = function() {
        self.messageNote = "";
        self.caractere = 100;
    };
    this.save = function() {
        $cookies.put('msg',self.messageNote);
    };
    this.caractere = this.count();  
}]);