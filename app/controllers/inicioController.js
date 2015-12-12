var techdencias;
(function (techdencias) {
    var controllers;
    (function (controllers) {
        var inicioController = (function () {
            function inicioController() {
                this.titulo = "hola techdencias";
                this.activo = false;
                var ch = new techdencias.models.Charla("Typescript y Angular", "Google y Microsoft.");
                this.charla = ch;
            }
            inicioController.prototype.init = function () {
                this.activo = true;
                console.log("Typescript y la madre de los tomates");
            };
            return inicioController;
        })();
        angular.module("app").controller("inicioController", inicioController);
    })(controllers = techdencias.controllers || (techdencias.controllers = {}));
})(techdencias || (techdencias = {}));
