import Image from "next/image";
import { PersonBar } from "./components/PersonBar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen px-24">
      <input type="text" placeholder="enter"/>
      <PersonBar />
    </div>
  );
}
