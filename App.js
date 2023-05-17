import { StatusBar } from "expo-status-bar";
import ProductList from "./src/ProductList";
import { StyleSheet } from "react-native";
import { Container, Header, Content, H1, Text } from "native-base";
import { ViewPropTypes } from "deprecated-react-native-prop-types";

export default function App() {
  return (
    <Container>
      <Header></Header>
      <Content>
        <ProductList />
      </Content>
    </Container>
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
