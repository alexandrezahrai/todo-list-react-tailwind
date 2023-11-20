import List from "./components/List";

export default function App() {
  return (
    <div className="App container py-10 md:py-[60px] lg:py-20">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-[#2563EB] md:text-5xl lg:text-6xl text-center">
        Task List:
      </h1>
      <h2 className="mb-6 text-lg font-normal text-gray-300 lg:text-xl text-center">
        Let&apos;s get some work done!
      </h2>
      <List />
    </div>
  );
}
