System.register([], function (exports_1, context_1) {
    "use strict";
    var PI;
    var __moduleName = context_1 && context_1.id;
    function areaCircunferencia(raio) {
        return Math.pow(raio, 2) * PI;
    }
    exports_1("areaCircunferencia", areaCircunferencia);
    return {
        setters: [],
        execute: function () {
            exports_1("PI", PI = 3.14);
        }
    };
});
//# sourceMappingURL=circunferencia.js.map