import Container from "@/components/Container";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }
  return <Container className="py-10">ProfilePage</Container>;
};

export default ProfilePage;
