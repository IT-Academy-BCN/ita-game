import Card from "../components/Card";
import SmallCard from "../components/SmallCard";
import { FooterMenu, Navbar } from "../components";

const currentUser = {
  name: "Homer Simpson",
  points: 123,
};

const users = [
  { name: "Homer Simpson", points: 100 },
  { name: "Marge Simpson", points: 130 },
  { name: "Lisa Simpson", points: 190 },
  { name: "Bart Simpson", points: 115 },
  { name: "Barney Gumble", points: 78 },
];

function LeaderBoard() {
  return (
    <div class="container max-w-md mx-auto flex flex-col">
      <Navbar>Competición</Navbar>
      <Card user={currentUser} />
      <p className="text-lg font-semibold m-6 text-black">
        Clasificación semanal
      </p>
      {users
        // aqui filtrar solo los de la ultima semana
        .sort((a, b) => (a.points > b.points ? -1 : 0)) // ordenamos por puntos
        .map((user, index) => (
          <SmallCard
            key={user.name}
            user={user}
            position={index + 1}
            currentUser={currentUser}
          />
        ))}
      <FooterMenu />
    </div>
  );
}

export default LeaderBoard;
