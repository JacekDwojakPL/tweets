import React from "React";
import { Link } from "react-router-dom";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { name: "dupa", uv: 35 },
  { name: "dupa", uv: 45 },
  { name: "dupa", uv: 55 },
  { name: "dupa", uv: 65 },
  { name: "dupa", uv: 75 },
  { name: "dupa", uv: 85 }
];

const ResultChart = () => (
  <div className="example-chart">
    <BarChart width={600} height={300} data={data}>
      <Bar type="monotone" dataKey="uv" stroke="#8884d8" barSize={30} />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </BarChart>
  </div>
);

export default ResultChart;
