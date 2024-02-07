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
      name: "🍓 Strawberry",
      color: "MistyRose",
    },
    {
      id: 3,
      name: "🥝 Kiwi",
      color: "Khaki",
    },
    {
      id: 4,
      name: "🍍 Pineapple",
      color: "AntiqueWhite",
    },
    {
      id: 5,
      name: "🍑 Peach",
      color: "PeachPuff",
    },
    {
      id: 6,
      name: "🫐 Blueberry",
      color: "Lavender",
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
