export default function Lista({ productos }) {
  if (productos.length === 0) {
    return <p>No hay elementos en la lista</p>;
  }

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ul>
    </div>
  );
}