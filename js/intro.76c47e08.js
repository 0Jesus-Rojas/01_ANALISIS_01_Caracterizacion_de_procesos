(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["intro"], 
  {
    // Módulo de estilos
    "0b16": function(t, e, a) {
      "use strict";
      a("8b10");
    },

    // Módulo principal del componente
    5167: function(t, e, a) {
      "use strict";
      a.r(e);

      // Función de renderizado de Vue (Estructura principal)
      var i = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div", 
          { staticClass: "curso-main-container introduccion" }, 
          [a("BannerInterno"), t._m(0)], 
          1
        );
      };

      // Funciones estáticas de renderizado (Contenido HTML)
      var n = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div", 
            { staticClass: "container tarjeta tarjeta--blanca p-4 p-md-5 mb-5" }, 
            [
              // Sección del Título
              a("div", { staticClass: "titulo-principal", attrs: { "data-aos": "flip-up" } }, [
                a("div", { staticClass: "titulo-principal__numero" }, [
                  a("span", [a("i", { staticClass: "fas fa-info" })])
                ]),
                a("h1", [t._v("Introducción")])
              ]),
              // Párrafo descriptivo
              a("p", { staticClass: "mb-5" }, [
                t._v("A continuación, se presentará el video que hará una breve introducción del presente componente formativo:")
              ]),
              // Contenedor del Video (Iframe de YouTube)
              a("figure", [
                a("div", { staticClass: "video" }, [
                  a("iframe", {
                    attrs: {
                      width: "560",
                      height: "315",
                      src: "https://www.youtube.com/embed/h5U98IQxP4E",
                      title: "YouTube video player",
                      frameborder: "0",
                      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                      allowfullscreen: ""
                    }
                  })
                ])
              ])
            ]
          );
        }
      ];

      // Configuración del objeto Vue
      var r = {
          name: "Introduccion",
          data: function() {
            return {};
          }
        },
        c = r,
        o = (a("0b16"), a("2877")), // Importación de utilidades de Vue Loader
        s = Object(o["a"])(c, i, n, !1, null, "14b78173", null);

      e["default"] = s.exports;
    },

    // Módulo de estilos vacío (o dependencias de CSS)
    "8b10": function(t, e, a) {}
  }
]);
//# sourceMappingURL=intro.76c47e08.js.map
