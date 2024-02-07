import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "LemonChiffon",
    },
    {
      id: 2,
      name: "🍒 Cherry",
      color: "LightPink",
    },
    {
      id: 3,
      name: "🫐 Blueberry",
      color: "Lavender",
    },
    {
      id: 4,
      name: "🍉 Watermelon",
      color: "LightGreen",
    },
    {
      id: 5,
      name: "🍓 Strawberry",
      color: "MistyRose",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
