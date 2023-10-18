import React, { useEffect, useState } from "react";
import { Box, Text } from "native-base";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { useUser } from "../../hooks/useUser";
import { api } from "../../services/api";
import { AlarmStatsResponse } from "../../utils/Interface";
import { background } from "native-base/lib/typescript/theme/styled-system";
import { LineChartProps } from "react-native-chart-kit/dist/line-chart/LineChart";
import { AbstractChartConfig } from "react-native-chart-kit/dist/AbstractChart";

export default function AlarmStats() {
  const [stats, setStats] = useState<AlarmStatsResponse>({
    data: [0],
    labels: [""],
  } as AlarmStatsResponse);

  const user = useUser();

  useEffect(() => {
    async function getStats() {
      const response = await api.get(`/alarms/stats/${user.user.imei.imei}`);

      setStats(response.data);
      console.log(
        "🚀 ~ file: AlarmStatsScreen.tsx:26 ~ getStats ~ response.data:",
        response.data
      );
    }

    getStats();
  }, []);
  const chartConfig: AbstractChartConfig = {
    color: (opacity = 1) => `rgba(65, 134, 244, 1)`,
    strokeWidth: 3,
    barPercentage: 1,
    useShadowColorFromDataset: true,
    backgroundColor: "#fff",
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#fff",
  };

  return (
    <Box flex={1} backgroundColor="#fff" p={2}>
      <Text
        fontSize="xl"
        fontWeight="light"
        textAlign="center"
        mt={8}
        color={"rgba(65, 134, 244, 1)"}
      >
        Alarm Analysis
      </Text>
      <Text textAlign="center" mt={2} mb={6} color={"gray.400"}>
        Check out the chart below to see your average daily alarm stats.
      </Text>
      <Box borderRadius={12} overflow="hidden" mx={4}></Box>

      <LineChart
        onDataPointClick={(data) => {
          alert(data.value);
        }}
        data={{
          labels: stats.labels.length > 0 ? stats.labels : [""],
          datasets: [
            {
              data: stats.data.length > 0 ? stats.data : [0],
              color: (opacity = 1) => `rgba(65, 134, 244, 1)`,
              strokeWidth: 2,
            },
          ],
          legend: ["Chart by alarms events Today"],
        }}
        width={Dimensions.get("window").width - 32}
        height={Dimensions.get("window").height / 2.5}
        chartConfig={chartConfig}
      />
    </Box>
  );
}
