"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  //   createdAt
  // :
  // Mon May 04 2026 22:41:21 GMT+0600 (Bangladesh Standard Time) {}
  // email
  // :
  // "sabbir@gmail.com"
  // emailVerified
  // :
  // false
  // id
  // :
  // "69f8cc31c38c6a6ae9ca4d66"
  // image
  // :
  // "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"
  // name
  // :
  // "sabbir"
  // updatedAt
  // :
  // Mon May 04 2026 22:41:21 GMT+0600 (Bangladesh Standard Time) {}
  // [[Prototype]]
  // :
  // Object

  //   console.log(user);
  return (
    <div className="container w-180 min-h-100 border mx-auto flex items-center gap-5 my-20 bg-gray-200 rounded-2xl">
      {isPending ? (
        <div className="flex justify-center items-center text-center w-full">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        <>
          <div className="">
            <Image
              src={user?.image}
              alt={user?.name}
              width={400}
              height={400}
            ></Image>
          </div>
          <div className="space-y-4">
            <p className="text-3xl font-bold">{user?.name}</p>
            <p className="">Email: {user?.email}</p>
            <button className="btn">Update Profile</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
