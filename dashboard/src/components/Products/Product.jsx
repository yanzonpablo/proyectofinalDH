export default function Product({ nombre, categorie, id, precio, seccion, descuento,detail }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{categorie ? categorie.nombre : "Sin categoría"}</td>
            <td>{precio}</td>
            <td>{seccion}</td>
            <td>{`${descuento}%` || "Sin descuento"}</td>
            <td>{detail}</td>
        </tr>
    );
}
