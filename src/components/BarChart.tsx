import { Box, Typography } from "@mui/material";
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

interface CustomTooltipProps {
  active?: boolean;
  payload?: { [key: string]: number | string }[];
  label?: string;
  legendName: string;
}

const CustomTooltip = ({
  active,
  payload,
  label,
  legendName,
}: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const isTotalSales = payload[0].name === "total_sales";
    return (
      <Box
        sx={{
          background: (theme) => theme.palette.grey[100],
          p: 1,
          borderRadius: 2,
          minWidth: 150,
          borderColor: (theme) => theme.palette.grey[500],
          borderWidth: 1,
          borderStyle: "solid",
        }}
      >
        <Typography>{label}</Typography>
        <Typography
          sx={{ color: payload[0].fill, textTransform: "capitalize" }}
        >{`${legendName}: ${payload[0].value}${
          isTotalSales ? "$" : ""
        } `}</Typography>
      </Box>
    );
  }

  return null;
};

interface IBarChart {
  data: unknown[];
  dataKeyY: string;
  fill: string;
  legendName: string;
}

const BarChartComponent = ({ data, dataKeyY, fill, legendName }: IBarChart) => {
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
        <Tooltip content={<CustomTooltip legendName={legendName} />} />
        <Legend
          wrapperStyle={{ color: fill, fill: fill, fontWeight: 500 }}
          payload={[{ value: legendName.toUpperCase(), type: "square" }]}
        />
        <Bar dataKey={dataKeyY} fill={fill} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
