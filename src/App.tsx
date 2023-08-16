import Heading from "./components/Heading";
import UserCard from "./components/UserCard";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="bg-[#d2ddf6] min-h-screen flex items-center justify-center px-3">
        <div className="bg-white w-full max-w-xl rounded-3xl drop-shadow-md px-6 py-3 sm:px-9 sm:py-5 text-indigo-950">
          <Heading />
          <UserCard />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
