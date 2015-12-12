var techdencias;
(function (techdencias) {
    var models;
    (function (models) {
        var Charla = (function () {
            function Charla(titulo, description) {
                this.titulo = titulo;
                this.descripcion = description;
            }
            return Charla;
        })();
        models.Charla = Charla;
    })(models = techdencias.models || (techdencias.models = {}));
})(techdencias || (techdencias = {}));
