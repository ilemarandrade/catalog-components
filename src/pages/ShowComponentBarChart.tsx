import { useCallback, useEffect, useMemo, useState } from "react";
import BarChart from "../components/BarChart";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import MainLayout from "../layout/MainLayout";
import listComponents from "../constants/listComponents";
import products, { Product, Products } from "../constants/products";

type typeDataKeyY = "stock" | "vendidos" | "total vendidos";

const specificData = {
  vendidos: {
    fill: "#8884d8",
    dataKeyY: "sold_quantity",
  },
  stock: {
    fill: "#82ca9d",
    dataKeyY: "stock",
  },
  "total vendidos": {
    fill: "#82c082",
    dataKeyY: "total_sales",
  },
};

const ShowComponentBarChart = () => {
  const [chartData, setChartData] = useState<Products>(products);
  const [specificDataCurrent, setSpecificDataCurrent] =
    useState<typeDataKeyY>("vendidos");
  const [valueRadio, setValueRadio] = useState("");

  const { dataKeyY, fill } = specificData[specificDataCurrent];

  const dataFormatToArray: Product[] = useMemo(() => {
    const dataFormated = Object.values(chartData);
    let sortedData;
    switch (valueRadio) {
      case "major_to_minor":
        sortedData = [...dataFormated].sort(
          // @ts-ignore
          (a, b) => b[dataKeyY] - a[dataKeyY]
        );
        return sortedData;
      case "minor_to_major":
        sortedData = [...dataFormated].sort(
          // @ts-ignore
          (a, b) => a[dataKeyY] - b[dataKeyY]
        );
        return sortedData;
      case "alphabetically":
        sortedData = [...dataFormated].sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        return sortedData;
      default:
        return dataFormated;
    }
  }, [chartData, dataKeyY, valueRadio]);

  const updateSoldQuantity = useCallback(() => {
    // Get a list of the keys of the products object
    const keys = Object.keys(chartData);

    // Select a random key from the list of keys
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    const newChartData = { ...chartData };
    // Increment the sold quantity of the randomly selected product by one

    const { price, sold_quantity } = newChartData[randomKey];
    newChartData[randomKey].sold_quantity += 1;
    newChartData[randomKey].total_sales = price * sold_quantity;
    newChartData[randomKey].stock -= 1;

    setChartData(newChartData);
  }, [chartData]);

  const handleChangeOfDataKeyY = (field: typeDataKeyY) => {
    setSpecificDataCurrent(field);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueRadio((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    // Call the updateSoldQuantity function every three seconds
    const interval = setInterval(updateSoldQuantity, 3000);
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [updateSoldQuantity]);

  return (
    <MainLayout title={listComponents.barChart.title}>
      <Grid
        container
        item
        spacing={2}
        direction="column"
        xs={12}
        sm={12}
        md={8}
      >
        <Grid item>
          <Typography variant="h6">
            Esta grafica se actualiza cada 3 segundos.
          </Typography>
        </Grid>
        <Grid item>
          <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
            <FormLabel component="label">Ordenar de:</FormLabel>
            <RadioGroup row onChange={handleChange} value={valueRadio}>
              <FormControlLabel
                control={<Radio value="major_to_minor" />}
                label="Mayor a menor"
              />
              <FormControlLabel
                control={<Radio value="minor_to_major" />}
                label="Menor a mayor"
              />
              <FormControlLabel
                control={<Radio value="alphabetically" />}
                label="Alfabeticamente"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item container justifyContent="center">
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            {Object.keys(specificData).map((label) => (
              <Button
                key={`button-${label}`}
                onClick={() => handleChangeOfDataKeyY(label as typeDataKeyY)}
                sx={{
                  backgroundColor: (theme) =>
                    label !== specificDataCurrent
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
          <BarChart
            data={dataFormatToArray}
            dataKeyY={dataKeyY}
            fill={fill}
            legendName={specificDataCurrent}
          />
        </Box>
      </Grid>
    </MainLayout>
  );
};

export default ShowComponentBarChart;
