"use client";

type Props = {
    id: number;
    name: string;
    username: string;
};

import { useState } from "react";

export default function FilterUser({ users }: { users: Props[] }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredUsers = users.filter(user =>{
        return user.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
    })

    return (
        <div className="bg-gray-200 p-4 my-5 rounded-lg shadow-md">
            <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}