import { useState, useMemo } from "react";
import { getData, capitalizeWords } from "../../utils.js";
import "./Chart.css";

import {
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  Legend,
} from "recharts";

function Chart({ title, data, parent, child, subtitle, defaultValue }) {
  const processedData = useMemo(
    () => getData(data, parent, child),
    [data, parent, child]
  );

  const [view, setView] = useState(defaultValue[parent]);

  const options = useMemo(() => Object.keys(processedData), [processedData]);

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <div className="chartSelect">
        <h5>
          {capitalizeWords(parent)} {subtitle}
        </h5>
        <select onChange={(e) => setView(e.target.value)} value={view}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <ResponsiveContainer width="100%" height="100%" aspect={2 / 1}>
        <BarChart
          width={700}
          height={300}
          data={processedData[view]}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={child} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#60AC4A" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
