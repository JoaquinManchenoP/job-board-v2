"use client";
import Link from "next/link";
import { userAuth } from "@/app/context/AuthContext";

export default function Menu() {
  const { user, logOut, setMenuState } = userAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
    setMenuState(false);
  };

  return (
    <div className="h-[300px] w-full bg-white flex items-center justify-center">
      <div className="menu__content h-4/5 w-full ">
        <div className="options h-full w-full flex flex-col justify-center items-center space-y-5 pl-10 cursor-pointer">
          {user ? (
            <div
              onClick={() => setMenuState(false)}
              className="home__option h-full w-4/5 flex items-center border-b border-gray-400"
            >
              <Link href="/userProfile" className="profile">
                Profile
              </Link>
            </div>
          ) : (
            <></>
          )}
          <div
            onClick={() => setMenuState(false)}
            className="jobs__option h-full w-4/5 flex items-center border-b border-gray-400"
          >
            <Link href="/jobs">jobs</Link>
          </div>
          <div
            onClick={() => setMenuState(false)}
            className="companies__option h-full w-4/5  flex items-center border-b border-gray-400"
          >
            <Link href="/companies">companies</Link>
          </div>
          <div
            onClick={() => setMenuState(false)}
            className="companies__option h-full w-4/5  flex items-center border-b border-gray-400"
          >
            <Link href="/pages/postJobPage">Post a Job</Link>
          </div>
          {user ? (
            <div className="companies__option h-full w-4/5  flex items-center">
              <Link href="/">
                <button onClick={handleSignOut}>Logout</button>
              </Link>
            </div>
          ) : (
            <div className="companies__option h-full w-4/5  flex items-center">
              <Link href={"/userProfile"}>
                <button onClick={() => setMenuState(false)}>
                  Register or Sign in
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
