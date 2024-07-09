import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

function UsersList() {
  const state = useSelector((state) => state.users);
  console.log(state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (state.loading) return <p>Loading ...</p>;
  if (state.error) return <p>{state.error}</p>;

  return (
    <div>
      {state.data &&
        state.data.map((user) => <li key={user.id}>{user.name}</li>)}
    </div>
  );
}

export default UsersList;
