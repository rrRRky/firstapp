import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView ,
    Image,
    TextInput,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
  } from "react-native";
  import Card from '../Component/Card';
  const DATA = [
    {
      id: '1',
      title: 'Card 1',
      subtitle: 'Subtitle for Card 1',
      image: require('../assets/Reception.png'),
      icon: 'heart',
    },
    {
      id: '2',
      title: 'Card 2',
      subtitle: 'Subtitle for Card 2',
      image: require('../assets/bg-body.png'),
      icon: 'star',
    },
    {
      id: '3',
      title: 'Card 3',
      subtitle: 'Subtitle for Card 3',
      image: require('../assets/slider-dec.png'),
      icon: 'thumbs-up',
    },
    {
      id: '4',
      title: 'Card 4',
      subtitle: 'Subtitle for Card 2',
      image: require('../assets/bg-body.png'),
      icon: 'star',
    },
    {
      id: '5',
      title: 'Card 5',
      subtitle: 'Subtitle for Card 3',
      image: require('../assets/slider-dec.png'),
      icon: 'thumbs-up',
    },
    {
      id: '6',
      title: 'Card 6',
      subtitle: 'Subtitle for Card 2',
      image: require('../assets/bg-body.png'),
      icon: 'star',
    },{
        id: '7',
        title: 'Card 1',
        subtitle: 'Subtitle for Card 1',
        image: require('../assets/Reception.png'),
        icon: 'heart',
      },
      {
        id: '8',
        title: 'Card 2',
        subtitle: 'Subtitle for Card 2',
        image: require('../assets/bg-body.png'),
        icon: 'star',
      },
      {
        id: '9',
        title: 'Card 3',
        subtitle: 'Subtitle for Card 3',
        image: require('../assets/slider-dec.png'),
        icon: 'thumbs-up',
      },
      {
        id: '10',
        title: 'Card 4',
        subtitle: 'Subtitle for Card 2',
        image: require('../assets/bg-body.png'),
        icon: 'star',
      },
      {
        id: '11',
        title: 'Card 5',
        subtitle: 'Subtitle for Card 3',
        image: require('../assets/slider-dec.png'),
        icon: 'thumbs-up',
      },
      {
        id: '12',
        title: 'Card 6',
        subtitle: 'Subtitle for Card 2',
        image: require('../assets/bg-body.png'),
        icon: 'star',
      },
      {
        id: '13',
        title: 'Card 3',
        subtitle: 'Subtitle for Card 3',
        image: require('../assets/slider-dec.png'),
        icon: 'thumbs-up',
      },
      {
        id: '14',
        title: 'Card 4',
        subtitle: 'Subtitle for Card 2',
        image: require('../assets/bg-body.png'),
        icon: 'star',
      },
      {
        id: '15',
        title: 'Card 5',
        subtitle: 'Subtitle for Card 3',
        image: require('../assets/slider-dec.png'),
        icon: 'thumbs-up',
      },
      {
        id: '16',
        title: 'Card 6',
        subtitle: 'Subtitle for Card 2',
        image: require('../assets/bg-body.png'),
        icon: 'star',
      },{
          id: '17',
          title: 'Card 1',
          subtitle: 'Subtitle for Card 1',
          image: require('../assets/Reception.png'),
          icon: 'heart',
        },
        {
          id: '18',
          title: 'Card 2',
          subtitle: 'Subtitle for Card 2',
          image: require('../assets/bg-body.png'),
          icon: 'star',
        },
        {
          id: '19',
          title: 'Card 3',
          subtitle: 'Subtitle for Card 3',
          image: require('../assets/slider-dec.png'),
          icon: 'thumbs-up',
        },
        {
          id: '20',
          title: 'Card 4',
          subtitle: 'Subtitle for Card 2',
          image: require('../assets/bg-body.png'),
          icon: 'star',
        },
  ];
const HomePage = () => {
  return (
    <View style={styles.container}>
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.heading}>Welcome to the Customer List</Text>
            </View> 
            <ScrollView>
                <View style={styles.cardBody}>
                    {/* <FlatList style={styles.cardOuter}
                        data={DATA}
                        renderItem={({ item }) => (
                        <Card style={styles.myCardView}
                        title={item.title}
                        subtitle={item.subtitle}
                        image={item.image}
                        icon={item.icon}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    /> */}
                    {DATA.map(card => (
                        <Card 
                            key={card.id} 
                            title={card.title} 
                            subtitle={card.subtitle} 
                            image={card.image} 
                            icon={card.icon} 
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    </View>
  );
};

export default HomePage;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginTop:10,
      padding: 15,
      marginBottom: 80,
    },
    cardBody:{
        // flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#F5FCFF', 
        width: "100%",
        marginBottom :50,
    },
    // cardOuter:{
    //     flex: 1,
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     backgroundColor: '#F5FCFF', 
    //     width: "100%",
    // },
    // myCardView:{
    //     width: "33%",
    // },
    cardHeader:{
      alignItems: "flex-start",
      justifyContent: "center",
    },
    card:{
      width: "100%",
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    },
    heading:{
        fontSize: 20,
        width: "100%",
        fontWeight: 'bold',
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    }
  });
  
