import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return <p className="hidden md:block">{username}</p>;
}

export default Username;
