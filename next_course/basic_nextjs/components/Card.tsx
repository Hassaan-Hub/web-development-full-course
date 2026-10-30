type CardProps = {
  title: String;
  description: String;
};

export default function Card({ title, description }: CardProps) {
  return (
    <div className="bg-gray-200 p-4 my-5 rounded-lg shadow-md">
      <h1 className="text-xl text-blue-500 font-bold">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
