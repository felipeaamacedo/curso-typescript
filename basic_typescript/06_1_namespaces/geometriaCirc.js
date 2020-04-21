"use strict";
var GeometriaMultArq;
(function (GeometriaMultArq) {
    let Areas;
    (function (Areas) {
        const PI = 3.14;
        function circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Areas.circunferencia = circunferencia;
    })(Areas = GeometriaMultArq.Areas || (GeometriaMultArq.Areas = {}));
})(GeometriaMultArq || (GeometriaMultArq = {}));
//# sourceMappingURL=geometriaCirc.js.map