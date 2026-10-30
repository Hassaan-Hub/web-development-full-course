import FilterUser from "@/components/FilterUser";


export default async function classroom() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

  return (
    <div className="bg-gray-200 p-4 my-5 rounded-lg shadow-md">
      <h1 className="text-xl text-blue-500 font-bold">This is a saylani classroom</h1>
      <p className="text-gray-600">This is a saylani classroom component.</p>
      
      <FilterUser users={users} />
    </div>
  );
}