import { DipList } from "../components";

export const Home = () => {
  return (
    <div className="md:shadow-listDip p-3 my-6 w-[90%] mx-auto rounded-lg">
      <h2 className="mx-auto my-6 text-3xl text-center font-Avenir-Medium animate__animated animate__fadeIn ">
        Nómina actual del Poder Legislativo
      </h2>
      <div className="grid mt-2 place-items-center grid-cols-autofit-cards animate__animated animate__fadeIn ">
        <DipList cantidad={12} />
      </div>
    </div>
  );
};
