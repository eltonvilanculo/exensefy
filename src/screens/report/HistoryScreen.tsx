import React, { useEffect, useState } from "react";
import { Box, FlatList } from "native-base";

import AlarmItem from "../../components/AlarmItem";
import { AlarmResponsInterface } from "../../utils/Interface";
import { api } from "../../services/api";
import { useUser } from "../../hooks/useUser";
import BottomSheet from "../../components/BottomSheet";
import MySkeleton from "../../components/MySkeleton";

export default function HistoryScreen() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(true);

  const [data, setData] = useState<AlarmResponsInterface[]>([]);
  const [visible, setVisible] = useState(false);
  const [currentItem, setCurrenItem] = useState<AlarmResponsInterface>(
    {} as AlarmResponsInterface
  );

  const userData = useUser();
  const { imei }: any = userData.user.imei;

  useEffect(() => {
    async function getAlarms() {
      try {
        const response = await api.get(`/alarms/${imei}`);

        setData(response.data.alarms);
        setLoading(false);
      } catch (error) {
        alert("Erro ao carregar alarmes");
      }
    }

    getAlarms();
  }, [data]);

  const handleDateChange = (selectedDate: Date) => {
    setShowDatePicker(false);
    setSelectedDate(selectedDate);
  };

  const toggleBottomSheet = () => {
    setVisible(!visible);
  };

  // const handleShowAlarmDetails = (item: AlarmResponsInterface) => {
  //   console.log(
  //     "🚀 ~ file: HistoryScreen.tsx:55 ~ handleShowAlarmDetails ~ item:",
  //     item
  //   );
  // };

  return (
    <Box flex={1} bg="gray.100" p={4}>
      {loading ? (
        <MySkeleton />
      ) : (
        <>
          <FlatList
            data={data}
            renderItem={(item) => (
              <AlarmItem
                item={item.item}
                handlePopupDetail={() => {
                  setCurrenItem(item.item);
                  toggleBottomSheet();
                }}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
          <BottomSheet
            visible={visible}
            toggleBottomSheet={toggleBottomSheet}
            currentItem={currentItem}
          />
        </>
      )}
    </Box>
  );
}
