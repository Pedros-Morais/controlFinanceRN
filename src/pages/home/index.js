import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";
const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "100,00",
    date: "20/10/2022",
    type: 0, //despesas
  },
  {
    id: 1,
    label: "Boleto conta água",
    value: "200,00",
    date: "21/10/2022",
    type: 0, //despesas
  },
  {
    id: 1,
    label: "Salario",
    value: "3000,00",
    date: "22/10/2022",
    type: 1, //despesas
  },
  {
    id: 1,
    label: "Pix Roberto",
    value: "2300,00",
    date: "22/10/2022",
    type: 1, //despesas
  },
];
export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Pedro Silva" />
      <Balance balance="2000,00" expenses="-500,00" />
      <Actions />
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => {
          String(item.id);
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Movements data={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
