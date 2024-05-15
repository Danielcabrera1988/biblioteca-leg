import { DipList } from "../components";

export const Home = () => {
  return (
    <main className="min-h-screen bg-teal-50">
      <section className="container bg-white flex flex-col gap-4 mx-auto">
        <h2 className="mt-24  ml-auto mr-auto text-3xl font-bold text-center animate__animated animate__fadeIn ">
          Nómina actual del Poder Legislativo
        </h2>
        <div className="flex p-4 flex-wrap gap-6 justify-center  animate__animated animate__fadeIn ">
          <DipList />
        </div>
      </section>
    </main>
  );
};
