import { Card } from "@heroui/react";

const summerTips = [
  {
    icon: "🧴",
    title: "Apply Sunscreen Daily",
    tip: "Use SPF 50+ sunscreen 20 minutes before going outside and reapply every 2 hours.",
  },
  {
    icon: "💧",
    title: "Stay Hydrated",
    tip: "Drink at least 8–10 glasses of water daily. Add lemon or mint for a refreshing twist.",
  },
  {
    icon: "👒",
    title: "Cover Up",
    tip: "Wear a wide-brim hat and UV-protective clothing during peak sun hours (10am–4pm).",
  },
  {
    icon: "🥤",
    title: "Eat Water-Rich Foods",
    tip: "Include watermelon, cucumber, and oranges in your diet to stay cool and hydrated.",
  },
];

const Tips = () => {
  return (
    <div className="container mx-auto my-10 space-y-5 bg-linear-to-r from-red-400 to-orange-400 p-10 rounded-2xl">
      <h1 className="font-bold text-5xl text-center text-white">Summer Care Tips</h1>
      <div className="flex flex-wrap justify-center gap-5">
        {summerTips.map((tip, index) => (
          <Card className="w-70 shadow" variant="default" key={index}>
            <Card.Header>
              <Card.Title>{tip.icon}</Card.Title>
              <Card.Description>{tip.title}</Card.Description>
            </Card.Header>
            <Card.Content>
              <p>{tip.tip}</p>
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tips;
