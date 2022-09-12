import React from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList } from "react-native";
import ListItem from "../components/ListItem";


const HomeScreen = () => {
  const productos = [
    {
      nombre: "celular 1",
      color: "Blanco",
      id: "001",
    },

    {
      nombre: "celular 2",
      color: "Plata",
      id: "002",
    },

    {
      nombre: "celular 3",
      color: "Gris",
      id: "003",
    },

    {
      nombre: "celular 4",
      color: "Rosa",
      id: "004",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id} //función anónima extrae el campo que identifica al producto
        //renderItem={() => <text> elemento</text>} //que va a mostrar la interfaz
        //renderItem={({item,index}) => <text>{item.nombre}</text>} //usando componente jsx limitado para  diseño
        renderItem={({ item, index }) => <ListItem item={item} />} //creamos el componente para personalizar la lista y le pasamos los props item
        ItemSeparatorComponent={() => (
          <View
            style={{
              marginVertical: 10,
              borderColor: "#000",
              borderWidth: 0.5,
            }}
          ></View>
        )}
        ListHeaderComponent={() => (
          <text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>
            Mis productos
          </text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    //flex: 1,
  },
});

export default HomeScreen;
