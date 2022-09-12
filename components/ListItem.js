import { View, Text, StyleSheet } from "react-native"; //importar el componente StyleSheet
import React from "react";

// 1.- mi item tiene 3 propiedades nombre color id
const ListItem = ({ item }) => {
  //2.-desestructuramos item con sus campos en una constante para tener acceso a estas propiedades con su nombre
  const { nombre, color, id } = item;

  return (
    <View style={styles.container}>
      <Text>{nombre}-{color}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#f1f2f1',
      borderRadius: 10,
      marginBottom: 10,
      padding:10,
    },
  });


export default ListItem;
