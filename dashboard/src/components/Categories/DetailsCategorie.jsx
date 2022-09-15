export default function DetailsCategorie({ nombre, descripcion, id }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{descripcion}</td>
        </tr>
    );
}