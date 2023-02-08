import { Navbar, FooterMenu } from '../components';
import { WeeklyResume } from '../components/organisms';

function Home() {
  return (
    <div className="relative w-screen h-screen bg-base">
      <Navbar>Resumen Semanal</Navbar>
      <div className="p-4">
        <h1>Hola Ona</h1>
      </div>
      <div>
        <WeeklyResume />
      </div>
      <FooterMenu />
    </div>
  );
}

export default Home;
