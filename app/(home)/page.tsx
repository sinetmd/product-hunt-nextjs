import { auth } from "@/auth";

const Home = async () => {
  const authenticatedUser = await auth();

  console.log(authenticatedUser);
  return <></>;
};

export default Home;
