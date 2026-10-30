"use client";


import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState("");
  
    return (
    <>
      <h1 className="bg-blue-500 text-amber-100 text-2xl">this is about page</h1>
      <input className="border border-gray-300 w-[200px]" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => {
            setTodo(value);
            setValue("");
        }}>add</button>
        <p>Value: {todo ? todo : "No todo added"}</p>
    </>
  );
}
