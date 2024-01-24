# Manejo de estados y propiedades: Hooks

Los Hooks son una adición en React 16.8 que permiten utilizar estado y otras características de React sin escribir una clase. Los más comunes son **`useState`** y **`useEffect`**.

## Use State

Permite añadir estado a los componentes funcionales.

```jsx
function MiComponente() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

## Use Effect

Permite realizar efectos secundarios en componentes funcionales.

- Se ejecuta después de que el renderizado es completado.
- Puede ser utilizado para cargar datos, manipular el DOM, etc.

```jsx
function MiComponente() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetchData().then(setDatos);
  }, []); // El array vacío indica que el efecto se ejecuta una sola vez

  return <div>{/* Renderiza los datos aquí */}</div>;
}
```
