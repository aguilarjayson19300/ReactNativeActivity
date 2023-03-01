import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import data from './data';

export default () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {data.data.map((image, index) => {
          return (
            <View key={index} style={styles.imageContainer}>
              <Image source={{ uri: image.url }} style={styles.image} />
            </View>
          )
        })}
      </View>

      {/* {data.data.map((name, index) => {
        return <Text style={styles.title}>{name.title}</Text>;
      })}

      {data.data.map((content, index) => {
        return <Text style={styles.descrip}>{content.descrip}</Text>;
      })} */}

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    //backgroundColor: "red",
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    //backgroundColor: "blue",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  title: {
    fontWeight: 'bold',
  },
  descrip: {
    fontSize: 12,
  },
  imageContainer: {
    width: '30%',
    //backgroundColor: 'yellow',
    alignItems: 'center',
  }
});