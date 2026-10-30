import Image from "next/image";
import Card from "@/components/Card";
import somthing from "@/app/actions/something";

export default function Home() {
  return (
    <>
      <h1 className="bg-blue-500">this is the home page</h1>

      <Card title="card" description="this is a card description" />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onclick={somthing}
      >
        click me
      </button>
    </>
  );
}
