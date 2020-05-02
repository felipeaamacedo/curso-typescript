"use strict";
var GeometriaMultArq;
(function (GeometriaMultArq) {
    var Areas;
    (function (Areas) {
        var PI = 3.14;
        function circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Areas.circunferencia = circunferencia;
    })(Areas = GeometriaMultArq.Areas || (GeometriaMultArq.Areas = {}));
})(GeometriaMultArq || (GeometriaMultArq = {}));
