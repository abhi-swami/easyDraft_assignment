import { AgeGenerator, NameGenerator } from "./Generator";

const UserData = () => {
  let id = Math.random() + Date.now();

  const newUser = {
    id,
    name: NameGenerator(),
    age: AgeGenerator(),
  };
  return newUser;
};

export default UserData;
