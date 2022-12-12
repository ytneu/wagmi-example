import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-wagmi-charts";
import { CandlestickChart } from "react-native-wagmi-charts";

const data = [
  {
    timestamp: 1625945400000,
    open: 33575.25,
    high: 33600.52,
    low: 33475.12,
    close: 33520.11,
  },
  {
    timestamp: 1625946300000,
    open: 33545.25,
    high: 33560.52,
    low: 33510.12,
    close: 33520.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <CandlestickChart.Provider data={data}>
        <CandlestickChart>
          <CandlestickChart.Candles />
        </CandlestickChart>
      </CandlestickChart.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
