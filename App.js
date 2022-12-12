import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-wagmi-charts";

const data = [
  {
    timestamp: 1625945400000,
    value: 33575.25,
  },
  {
    timestamp: 1625946300000,
    value: 33545.25,
  },
  {
    timestamp: 1625947200000,
    value: 33510.25,
  },
  {
    timestamp: 1625948100000,
    value: 33215.25,
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <LineChart.Provider data={data}>
        <LineChart>
          <LineChart.Path />
        </LineChart>
      </LineChart.Provider>
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
