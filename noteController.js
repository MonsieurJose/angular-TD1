/**
 * Created by cleme on 24/01/2017.
 */

NoteApp.controller('noteController',function(){
    var self = this;
    this.caractere = 100;
    this.messageNote ="";
    this.count = function () {
        self.caractere = 100 - self.messageNote.length;
    };
    this.clear = function() {
        self.messageNote = "";
        self.caractere = 100;
    };
});