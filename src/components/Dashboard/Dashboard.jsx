import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const Dashboard = () => {
  const marksArray = [
    {
      id: 1,
      name: "Alice",
      physics: 85,
      chemistry: 92,
      math: 75,
    },
    {
      id: 2,
      name: "Bob",
      physics: 80,
      chemistry: 75,
      math: 80,
    },
    {
      id: 3,
      name: "Charlie",
      physics: 90,
      chemistry: 85,
      math: 95,
    },
    {
      id: 4,
      name: "David",
      physics: 75,
      chemistry: 78,
      math: 85,
    },
    {
      id: 5,
      name: "Emily",
      physics: 92,
      chemistry: 85,
      math: 70,
    },
    {
      id: 6,
      name: "Frank",
      physics: 70,
      chemistry: 80,
      math: 90,
    },
    {
      id: 7,
      name: "Grace",
      physics: 85,
      chemistry: 90,
      math: 82,
    },
    {
      id: 8,
      name: "Harry",
      physics: 80,
      chemistry: 85,
      math: 75,
    },
    {
      id: 9,
      name: "Isabelle",
      physics: 95,
      chemistry: 92,
      math: 88,
    },
    {
      id: 10,
      name: "Jack",
      physics: 75,
      chemistry: 80,
      math: 85,
    },
    {
      id: 11,
      name: "Karen",
      physics: 85,
      chemistry: 78,
      math: 92,
    },
    {
      id: 12,
      name: "Liam",
      physics: 90,
      chemistry: 85,
      math: 80,
    },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={marksArray}>
        <Line stroke="#82ca9d" dataKey={"physics"}></Line>
        <Line stroke="#8884d8" dataKey={"math"}></Line>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Dashboard;
