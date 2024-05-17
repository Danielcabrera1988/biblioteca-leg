import { DipList } from "../components";

export const Home = () => {
  return (
    <div className="">
      <h2 className="mx-auto mt-6 text-3xl text-center font-Avenir-Medium animate__animated animate__fadeIn ">
        Nómina actual del Poder Legislativo
      </h2>
      <div className="grid p-3 mt-2 place-items-center grid-cols-autofit animate__animated animate__fadeIn ">
        <DipList cantidad={5} />
      </div>
    </div>
  );
};
