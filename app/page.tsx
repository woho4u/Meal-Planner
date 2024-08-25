import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Meals from "./components/Meals";

export default function Home() {
  return (
    <>
      <Sidebar />

      <div className="ml-12 h-full w-full p-16">
        <Meals />
      </div>
    </>
  );
}
