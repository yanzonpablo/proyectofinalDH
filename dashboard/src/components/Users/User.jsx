export default function User({ nombre, apellido, id, email, detail}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{apellido}</td>
            <td>{email}</td>
            <td>{detail}</td>
        </tr>
    );
}
