import { useLoaderData } from 'react-router-dom';

const Users = () => {
  const loadedUsers = useLoaderData();
  return (
    <div>
      <h2>users: {loadedUsers.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {loadedUsers.map((user) => (
              <tr key={user._id} className="hover">
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>Purple</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
