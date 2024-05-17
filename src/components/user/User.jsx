import { Link } from "react-router-dom";

export const User = () => {
    const users = [
        {
            id : 1,
            name: "nike"
        },
        {
            id : 2,
            name: "gucci"
        }
    ]
  return (
    <div>
         {users.map((user) => {
          return (
            <article key={user.id}>
              <h5>{user.name}</h5>
              <Link to={`/users/${user.id}`}>more info</Link>
            </article>
          );
        })}
    </div>
  )
}
