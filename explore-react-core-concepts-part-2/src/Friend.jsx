export default function Friend({friend})
{
    return(
        <div style={{border: '2px solid blue', padding: '10px', margin: '10px'}}>
            <h3>Name: {friend.name}</h3>
            <p>Email: {friend.email}</p>
        </div>
    )
}