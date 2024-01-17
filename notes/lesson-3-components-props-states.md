# Tipos de componentes en React

## Componentes funcionales

Son básicamente funciones de JavaScript que retornan elementos de React. Son simples y se utilizan para componentes que no requieren manejar estado o ciclo de vida.

```jsx
function MiComponenteFuncional(props) {
  return <h1>{props.saludo}</h1>;
}
```

## Componentes de clase

Son clases de JavaScript que extienden React.Component. Pueden manejar estado y ciclo de vida, y son adecuados para componentes más complejos.

```jsx
class MiComponenteDeClase extends React.Component {
  render() {
    return <h1>{this.props.saludo}</h1>;
  }
}
```

## ¿Los componentes de clase ya no se usan?

Es cierto que en el desarrollo moderno con React, los **componentes funcionales** han ganado mayor popularidad y son más utilizados que los **componentes de clase**. Esto se debe a varias razones clave:

1. **Introducción de Hooks**: Con la introducción de Hooks en React 16.8, los componentes funcionales se volvieron mucho más poderosos. Los Hooks permiten a los componentes funcionales manejar su propio estado, efectos secundarios, contexto y otras características que anteriormente solo estaban disponibles en los componentes de clase.
2. **Simplicidad y Concisión**: Los componentes funcionales tienden a ser más simples y concisos que los componentes de clase. La sintaxis es más fácil de leer y escribir, lo que los hace preferidos para muchos desarrolladores.
3. **Rendimiento y Optimización**: Aunque la diferencia de rendimiento no es significativa en la mayoría de los casos, los componentes funcionales pueden ser ligeramente más eficientes debido a su simplicidad y al menor número de líneas de código.
4. **Recomendación Oficial de React**: El equipo de React ha estado recomendando el uso de componentes funcionales con Hooks para nuevos desarrollos. Esto se debe a la facilidad de uso y las mejoras en la gestión de estado y efectos secundarios.
5. **Tendencias en la Comunidad y en la Industria**: La comunidad y la industria en general han seguido esta recomendación. Hay una tendencia a usar componentes funcionales en proyectos nuevos y en la enseñanza de React.

Sin embargo, es importante mencionar que los componentes de clase no están obsoletos y todavía tienen su lugar. Existen muchos proyectos existentes que los utilizan, y en algunos casos específicos, pueden ser la opción preferida. Además, entender los componentes de clase sigue siendo útil para los desarrolladores de React, especialmente cuando se trabaja en proyectos heredados o se utiliza ciertas librerías que dependen de ellos.

En resumen, si estás empezando un nuevo proyecto o aprendiendo React, es recomendable enfocarse en los componentes funcionales y los Hooks, ya que representan la dirección actual y futura de React.

# Props y State

## Props

Permiten pasar datos de un componente padre a un componente hijo. Son solo lectura, lo que significa que un componente hijo no puede modificar las props que recibe del padre.

## State

Permite a los componentes de React manejar datos o información que cambia a lo largo del tiempo. El uso del estado es lo que hace que React sea tan poderoso para construir interfaces dinámicas.

- En componentes de clase, el estado se maneja a través del objeto **`this.state`** y se actualiza usando **`this.setState`**.
- En componentes funcionales, los hooks como **`useState`** proporcionan una forma de manejar el estado.