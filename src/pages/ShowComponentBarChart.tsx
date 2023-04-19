import { useState } from "react";
import BarChart from "../components/BarChart";
import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import MainLayout from "../layout/MainLayout";
import listComponents from "../constants/listComponents";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

type typeDataKeyY = "uv" | "pv" | "amt";

const specificData = {
  uv: {
    fill: "#8884d8",
    dataKeyY: "uv",
  },
  pv: {
    fill: "#82ca9d",
    dataKeyY: "pv",
  },
  amt: {
    fill: "#77c878",
    dataKeyY: "amt",
  },
};

const ShowComponentBarChart = () => {
  const [selectedDataKeyY, setSelectedDataKeyY] = useState<typeDataKeyY>("uv");

  const { dataKeyY, fill } = specificData[selectedDataKeyY];

  const handleChangeOfDataKeyY = (field: any) => {
    setSelectedDataKeyY(field);
  };

  return (
    <MainLayout title={listComponents.barChart.title}>
      <Grid container item spacing={2} direction="column" xs={12} sm={8} md={6}>
        <Grid item container justifyContent="center">
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            {Object.keys(specificData).map((label) => (
              <Button
                key={`button-${label}`}
                onClick={() => handleChangeOfDataKeyY(label)}
                sx={{
                  backgroundColor: (theme) =>
                    label !== selectedDataKeyY
                      ? ""
                      : theme.palette.primary.dark,
                }}
              >
                {label}
              </Button>
            ))}
          </ButtonGroup>
        </Grid>
        <Box width="100%" mt={2}>
          <BarChart data={data} dataKey={dataKeyY} fill={fill} />
        </Box>
      </Grid>
    </MainLayout>
  );
};

export default ShowComponentBarChart;
