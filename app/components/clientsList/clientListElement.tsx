export default function ClientListElement({client,index}) {
    return  <>
        <div>
            <tr>
                <td>{index}</td>
                <td>{client.name}</td>
                <td>{client.age}</td>
            </tr>
            <hr/>
        </div>
    </>;
}