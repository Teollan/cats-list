import CatsList from "../components/CatsList";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center">
      <main className="max-w-[1200px]">
        <h1>Our best cats</h1>

        <CatsList />
      </main>
    </div>
  );
}
