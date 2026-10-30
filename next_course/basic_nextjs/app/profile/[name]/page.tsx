type ProfilePageProps = {
    params: Promise<{name: string}>;
};

export default async function RohanProfile({ params }: ProfilePageProps) {

    const users = [
        { id: 1, name: 'Rohan', age: 25 },
        { id: 2, name: 'Alice', age: 30 },
        { id: 3, name: 'Bob', age: 28 },
    ];

    const pageParams = await params;
    const user = users.find((user) => user.name.toLocaleLowerCase() === pageParams.name.toLocaleLowerCase());
  
    if (!user) {
        return (
            <div>
                <h1>User Not Found</h1>
                <p>The user with the name "{pageParams.name}" does not exist.</p>
            </div>
        );
    }
    
    return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>This is {user.name}'s profile page.</p>
    </div>
  );
}