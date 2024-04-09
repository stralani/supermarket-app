import { pb } from "../../pocketBase";

function Main() {
  return <div>{pb.authStore.model && pb.authStore.model.username}</div>;
}

export default Main;
