import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const CardComponent = ({ title, subtitle, image, icon }) => {
  return (
    <Card containerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Icon name={icon} type="font-awesome" color="#517fa4" />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  textContainer: {
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default CardComponent;
