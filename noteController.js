/**
 * Created by cleme on 24/01/2017.
 */

angular.module("NoteApp").controller("noteController",['$cookies',function($cookies){
    var self = this;
    this.messageNote =$cookies.get('msg');
    var status = false;
    var info = false;
    var information = -1;
    this.count = function () {
        self.caractere = 100 - self.messageNote.length;
        self.status = true;
        self.info = false;
        if (self.caractere>50){ self.information = 50; }
        else if (self.caractere>20){ self.information = 20; }
        else if (self.caractere>0){ self.information = 0; }
        return self.caractere;
    };

    this.clear = function() {
        self.messageNote = "";
        self.caractere = 100;
        self.status = false;
        self.info = false;
    };
    this.save = function() {
        $cookies.put('msg',self.messageNote);
        self.info = true;
        self.status = false;
        self.information = 50;
    };
    this.caractere = this.count();
}]);