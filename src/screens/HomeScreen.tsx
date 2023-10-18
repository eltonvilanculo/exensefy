import { HStack, Box, VStack, ScrollView } from "native-base";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Indicator from "../components/Indicator";
import QuizmoItem from "../components/QuizmoItem";

export default function HomeScreen() {
  return (
    <VStack flex={1} bg={"primary.100"}>
      <Box p={4}>
        <Header title="Quizmo" />
        <InfoCard />
        <Indicator name="Novidades" />
        <ScrollView horizontal>
          <QuizmoItem />
          <QuizmoItem />
          <QuizmoItem />
          <QuizmoItem />
          <QuizmoItem />
        </ScrollView>
        <Indicator name="Mais" />
        <ScrollView horizontal>
          <QuizmoItem />
          <QuizmoItem />
          <QuizmoItem />
          <QuizmoItem />
          <QuizmoItem />
        </ScrollView>
      </Box>
    </VStack>
  );
}
