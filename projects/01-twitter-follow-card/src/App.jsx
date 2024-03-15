import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: false,
  },
  {
    userName: "shakira",
    name: "Shakira Lobo",
    isFollowing: true,
  },
  {
    userName: "musk",
    name: "Elon Musik",
    isFollowing: false,
  },
];
export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}

      {/* <TwitterFollowCard userName="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>

      <TwitterFollowCard userName="shakira" initialIsFollowing>
         Shakira Lobo
      </TwitterFollowCard> */}

      {/* <TwitterFollowCard isFollowing userName="pheralb" name="Pablo Hernández" />
      <TwitterFollowCard isFollowing userName="mike" name="Mike Wasawski" /> */}
    </section>
  );
}
