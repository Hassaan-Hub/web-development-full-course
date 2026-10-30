type profilePageAgeProps = {
  params: Promise<{ name: string; age: string }>;
};

export default async function profilePage({ params }: profilePageAgeProps) {
  const pageParams = await params;

  const username = pageParams.name;
  const userage = pageParams.age;

  const users = [
    { id: 1, name: "Rohan", email: "rohan@example.com", age: 25 },
    { id: 2, name: "Rohan", email: "alice@example.com", age: 30 },
    { id: 3, name: "Rohan", email: "bob@example.com", age: 28 },
  ];

  const user = users.find(
    (user) =>
      user.name.toLocaleLowerCase() === username.toLocaleLowerCase() &&
      user.age.toString() === userage
  );

  return (
    <div>
      <h1>{user?.name}'s Profile</h1>
      <p>Email: {user?.email}</p>
      <p>Age: {user?.age}</p>
    </div>
  );
}
