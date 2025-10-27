import Counter from "../components/Counter";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-8">
      <h1 className="text-3xl font-bold text-gray-800">
        Next.js Button Counter
      </h1>

      {/* Default Counter */}
      <Counter />

      {/* Custom Props Example */}
      <Counter initialCount={5} initialStep={2} />
    </main>
  );
}
