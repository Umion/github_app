import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserCard = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user && (
        <>
          <div className="flex my-4">
            <img
              className="w-20 rounded-full mr-5"
              src={
                user.avatar_url ||
                "https://avatars.githubusercontent.com/u/583231?v=4"
              }
              alt=""
            />
            <div className="pt-2">
              <p className="text-xl	font-bold leading-3">{user.login}</p>
              <a
                className="text-xs underline leading-3 text-blue-500"
                href={`https://github.com/${user.login}`}
                target="_blank"
              >
                @{user.login}
              </a>
              <div className="text-xs">
                Location: {user.location || "Not available"}
              </div>
            </div>
          </div>
          <div className="flex mb-5 text-sm sm:text-base">
            <div className="bg-[#f6f8ff] grow rounded p-3 flex">
              <div className="w-full">
                <p>Repos</p>
                <p className="font-bold">{user.public_repos}</p>
              </div>
              <div className="w-full">
                <p>Followers</p>
                <p className="font-bold">{user.followers}</p>
              </div>
              <div className="w-full">
                <p>Following</p>
                <p className="font-bold">{user.following}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserCard;
