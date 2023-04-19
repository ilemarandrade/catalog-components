import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface IBarChart {
  data: any;
  dataKey: string;
  fill: string;
}

const BarChartComponent = ({ data, dataKey, fill }: IBarChart) => {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      aspect={16 / 9}
      debounce={1}
    >
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataKey} fill={fill} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
