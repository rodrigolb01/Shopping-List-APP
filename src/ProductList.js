import { Text, Button, TextInput, View } from "react-native";
import { H1, Content, Form, Item, Input, Badge } from "native-base";
import React, { useState } from "react";
import Rating from "./Rating";

export default function ProductList() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [productPriceError, setProductPriceError] = useState("");

  const isValid = true;

  const add = () => {
    const val = Number(price);
    if (isNaN(val)) {
      setProductPriceError("invalid field");
      return;
    } else setProductPriceError("");

    setProducts([
      ...products,
      {
        id: products.length,
        name: name,
        price: price,
      },
    ]);

    setName("");
    setPrice(0);

    console.log("products update");
    console.log(products);
  };

  const get = () => {
    return products.map((e) => (
      <Item
        style={{
          flex: 1,
          flexDirection: "row",
        }}
        key={e.id}
      >
        <View style={{ flexDirection: "row", flexBasis: "45%" }}>
          <Text style={{ flexBasis: "50%" }}>{e.name}</Text>
          <Text style={{ flexBasis: "50%" }}>{"$" + e.price}</Text>
        </View>
        <View style={{ flexBasis: "45%" }}>
          <Rating key={e.id} rating={e.rating}></Rating>
        </View>
      </Item>
    ));
  };

  return (
    <View>
      <Content>
        <Form>
          <H1>Add a product</H1>
          <TextInput
            value={name}
            onChangeText={(e) => {
              setName(e);
            }}
          ></TextInput>
          <Input
            value={price}
            onChangeText={(e) => {
              setPrice(e);
            }}
          ></Input>
          <Button disabled={!isValid} title="Add" onPress={add}></Button>
          {productPriceError !== "" ? (
            <Badge danger>
              <Text>{productPriceError}</Text>
            </Badge>
          ) : (
            <View></View>
          )}
        </Form>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <H1>Product List</H1>
          {get()}
        </View>
      </Content>
    </View>
  );
}
