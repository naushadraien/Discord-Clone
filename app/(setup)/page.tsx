import {InitialModal} from "@/components/modals/initial-modal";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  //This file is for setting up the server for users to use

  const profile = await initialProfile(); //This is the profile that is created for the user when they first sign up

  const server = await db.server.findFirst({
    //this is for finding the server associated with the user and relaod it
    where: {
      members: {
        some: {
          profileId: profile.id, //This is the profile id of the user that is created when they first sign up
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`); //This is for redirecting the user to the server that they are in if there is server for the user
  }

  return <InitialModal/> //This is for creating the server for the user if there is no server for the user
};

export default SetupPage;
