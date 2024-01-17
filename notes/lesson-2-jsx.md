# JSX

JSX es una extensión sintáctica para JavaScript, utilizada en React para describir cómo debería ser la UI. Aunque se parece mucho al HTML, tiene algunas diferencias y capacidades adicionales.

**Ejemplo básico:**

`const elemento = <h1>Hola, mundo!</h1>;`

**Ejemplo Componente:**

```jsx
function MyComponent() {
  return <h1>Hoy es {new Date().toLocaleDateString()}</h1>;
}

export default MyComponent;
```

ℹ️ *Los corchetes `{}` permiten integrar expresiones Javascript*

## ¿Porque React usa JSX?

1. **Legibilidad y Expresividad**: JSX combina la lógica de renderizado con la interfaz de usuario (UI) de una manera que es fácil de entender y escribir. Esto hace que el código sea más legible y expresivo, especialmente en comparación con la creación de interfaces de usuario utilizando solo JavaScript.
2. **Sintaxis Familiar**: JSX se asemeja mucho al HTML, lo que lo hace intuitivo para desarrolladores con experiencia en desarrollo web. Esto reduce la curva de aprendizaje para los nuevos desarrolladores de React y facilita la transición desde el desarrollo web tradicional.
3. **Identificación de Errores**: Al utilizar JSX, los errores en la UI se pueden detectar durante la fase de compilación, mejorando la calidad del código y reduciendo el tiempo de depuración.
4. **Integración con JavaScript**: JSX permite integrar fácilmente la lógica de JavaScript dentro de la estructura de la UI. Esto proporciona una forma fluida y poderosa de crear interfaces de usuario dinámicas y reactivas, permitiendo el uso de estructuras de datos de JavaScript, lógica de control y otras características del lenguaje directamente dentro del JSX.

En resumen, React usa JSX porque mejora la legibilidad y expresividad, es sintácticamente familiar para los desarrolladores, ayuda en la identificación temprana de errores y permite una integración fluida con la lógica de JavaScript, lo que facilita la creación de interfaces de usuario complejas y dinámicas.

