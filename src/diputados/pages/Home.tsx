import { DipList } from "../components";

export const Home = () => {
  return (
    <div className="min-h-screen">
      <h2 className="mt-24 mb-2 ml-auto mr-auto text-3xl font-bold text-center animate__animated animate__fadeIn ">
        Nómina actual del Poder Legislativo
      </h2>
      <div className="grid p-3 mt-2 place-items-center grid-cols-autofit animate__animated animate__fadeIn ">
        <DipList />
      </div>
    </div>
  );
};
