//Por ejemplo, supongamos que tiene una estructura de elementos JSX algo más compleja:

function App() {
  return (
    <div>
    <h1>Hello there</h1>
    </div>
  )
}

// ... la sentencia return transpilada en JavaScript plano devuelve de nuevo dos funciones createElement :

"use strict";
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello there"));
}

// Si da formato a esta salida, elimina la línea "use strict", y elimina los comentarios __PURE__ , obtendrá una salida más legible:

function App() {
      return React.createElement(
        "div",
        null,
        React.createElement("h1", null, "Hello there")
      );
}

// Ahora el tercer argumento de la llamada React.createElement más externa es otra llamada React.createElement. Esto significa que una estructura JSX anidada no es más que un montón de React.createElement pasadas a otros React.createElement como su tercer argumento..

/*
El segundo argumento - null -
El segundo argumento de null puede -en este caso- sustituirse por un objeto vacío.

En ese caso, su código contendría un par de llaves en lugar de la palabra null:
*/

"use strict";

function App() {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello there")
  );
}

/*
Este objeto se denomina objeto props . Es el principal mecanismo de envío de datos de un componente padre a un componente hijo en React.

La forma en que esto funciona se describe en React docs utilizando el siguiente código:
*/

React.createElement(
    type,
    [props],
    [...children]
)

/*
Tercer argumento (...children)
El contenido interior que irá dentro del elemento envolvente. Es lo que hace posible anidar elementos dentro de otros elementos, imitando la forma en que funciona HTML.

En esta lectura aprendió a usar un transpilador para descomponer el código JSX en JavaScript plano, lo que hace que su propósito sea más comprensible.
*/