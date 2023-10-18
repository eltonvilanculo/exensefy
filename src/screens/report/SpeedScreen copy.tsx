import React from "react";
import { Box, Text } from "native-base";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function SpeedScreen() {
  const chartConfig = {
    color: (opacity = 1) => `rgba(65, 134, 244, 1)`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
  };

  const data = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 60],
        color: (opacity = 1) => `rgba(65, 134, 244, 1)`,
        strokeWidth: 2
      }
    ],
    legend: ["Speed"]
  };

  return (
    <Box flex={1} backgroundColor="#f5f5f5">
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mt={8} color={'rgba(65, 134, 244, 1)'}>
        Speed Analysis
      </Text>
      <Text textAlign="center" mt={2} mb={6} color={'rgba(65, 134, 244, 1)'}>
        Check out the chart below to see your average daily speed stats.
      </Text>
      <Box borderRadius={12} overflow="hidden" mx={4}>
        <LineChart
          data={data}
          width={Dimensions.get("window").width - 32}
          height={Dimensions.get("window").height / 2.5}
          chartConfig={chartConfig}
        />
      </Box>
    </Box>
  );
}
