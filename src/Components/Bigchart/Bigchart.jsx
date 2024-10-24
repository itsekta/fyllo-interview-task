import { useState, useMemo } from "react";
import "./Bigchart.css";
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

function Bigchart({ title, data }) {
  const months = useMemo(
    () => [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    []
  );

  const states = useMemo(
    () => [
      "Andaman & Nicobar",
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chandigarh",
      "Chattishgarh",
      "Dadra & Nagar Haveli",
      "Delhi",
      "Goa",
      "Gujarat",
      "Harayana",
      "Himachal Pradesh",
      "Jammu & Kashmir",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharastra",
      "Manipur",
      "Megalaya",
      "Mizoram",
      "Nagaland",
      "Orissa",
      "Pondicherry",
      "Punjab",
      "Rajasthan",
      "Tamil Nadu",
      "Tripura",
      "Telangana",
      "Uttar Pradesh",
      "Uttaranchal",
      "West Bengal",
      "Daman & Diu",
      "Lakshadweep",
      "Sikkim",
    ],
    []
  );

  const [stateValue, setStateValue] = useState(states[0]);
  const [monthValue, setMonthValue] = useState(months[0]);

  // Memoize the filtered data to avoid recalculating on every render
  const chartData = useMemo(() => {
    const filteredData = data.filter(
      (obj) => obj["state"] === stateValue && obj["month"] === monthValue
    );

    return filteredData.map((element) => ({
      ...element,
      requirement_in_mt_: parseFloat(element["requirement_in_mt_"]),
      availability_in_mt_: parseFloat(element["availability_in_mt_"]),
    }));
  }, [stateValue, monthValue, data]);

  return (
    <div className="bigchart">
      <h3 className="bigchartTitle">{title}</h3>

      <div className="bigchartSelect">
        <h5>Month</h5>
        <select
          onChange={(e) => setMonthValue(e.target.value)}
          value={monthValue}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <h5>State</h5>
        <select
          onChange={(e) => setStateValue(e.target.value)}
          value={stateValue}
        >
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        {!chartData.length && (
          <h6 className="errordata">No data available to show</h6>
        )}
      </div>

      <ResponsiveContainer width="100%" height="100%" aspect={2 / 1}>
        <BarChart
          width={700}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="requirement_in_mt_" fill="#60AC4A" />
          <Bar dataKey="availability_in_mt_" fill="#FF6347" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Bigchart;
