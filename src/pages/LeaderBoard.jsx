import Card from "../components/Card";
import SmallCard from "../components/SmallCard";

const currentUser = {
  name: "Homer Simpson",
  points: 123,
};

const users = [
  { name: "Homer Simpson", points: 123 }, // falta la imagen del avatar y el nivel
  { name: "Marge Simpson", points: 130 },
  { name: "Lisa Simpson", points: 190 },
  { name: "Barney", points: 7 },
  { name: "Bart Simpson", points: 98 },
  { name: "Lisa Simpson", points: 190 },
  { name: "Barney", points: 7 },
  { name: "Bart Simpson", points: 98 },
];

function LeaderBoard() {
  return (
    <div class="container max-w-md mx-auto flex flex-col bg-slate-400">
      <Card user={currentUser} />
      <p className="text-lg font-semibold m-6">Clasificación semanal</p>
      {users
        // aqui filtrar solo los de la ultima semana
        .slice(0, 6) // enseñamos solo los primeros 7
        .sort((a, b) => (a.points > b.points ? -1 : 0)) // ordenamos por puntos
        .map((user, index) => (
          <SmallCard
            key={user.name}
            user={user}
            position={index + 1}
            currentUser={currentUser}
          />
        ))}
    </div>
  );
}

export default LeaderBoard;
