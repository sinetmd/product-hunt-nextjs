import React from "react";
import Navbar from "../../components/navbar/navbar";
import { auth } from "../../auth";

const HomeLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const authenticatedUser = await auth();

  return (
    <html lang="en">
      <Navbar authenticatedUser={authenticatedUser} />
      <body>{children}</body>
    </html>
  );
};

export default HomeLayout;
