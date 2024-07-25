import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator, Animated, ImageBackground } from 'react-native';
import useAuth from '../../hooks/useAuth';
import { Redirect } from 'expo-router';
import { getItem } from '../../components/storage';
import { getDailySkinsApi } from '../../apis/store';

const Store = () => {
  const { user } = useAuth();
  const [skins, setSkins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [flippedCards, setFlippedCards] = useState([]);
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [accessToken, entitlementsToken, puuid] = await Promise.all([
          getItem('accessToken'),
          getItem('entitlementsToken'),
          getItem('puuid')
        ]);

        const response = await getDailySkinsApi(accessToken, entitlementsToken, puuid);

        if (response.status === 200) {
          const data = response.data;
          setSkins(data);
        } else {
          throw new Error('Unexpected response');
        }
      } catch (error) {
        console.error('Error fetching daily skins:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePress = (index) => {
    setFlippedCards((prev) => {
      const newFlippedCards = [...prev];
      newFlippedCards[index] = true;
      return newFlippedCards;
    });

    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  if (!user) {
    return <Redirect href="/" />;
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>获取商店信息...</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderItem = ({ item, index }) => {
    const isFlipped = flippedCards[index];
    const animatedStyle = {
      transform: [
        {
          scale: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, isFlipped ? 1.2 : 1],
          }),
        },
      ],
    };

    return (
      <TouchableOpacity onPress={() => handlePress(index)} activeOpacity={0.8} disabled={isFlipped}>
        <Animated.View style={[styles.card, isFlipped && styles.selectedCard, animatedStyle]}>
          {isFlipped ? (
            <ImageBackground source={{ uri: item.wallpaper }} style={styles.cardContent}>
              <Image source={{ uri: item.displayIcon }} style={styles.skinImage} />
              <View style={styles.cardFooter}>
                <Text style={styles.skinName}>{item.displayName}</Text>
                <Text style={styles.skinPrice}>{item.price}</Text>
              </View>
            </ImageBackground>
          ) : (
            <View style={styles.cardBack}>
              <Text style={styles.cardBackText}>卡背</Text>
            </View>
          )}
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={skins}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    padding: 16,
  },
  card: {
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  selectedCard: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardBack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  cardBackText: {
    color: '#fff',
    fontSize: 18,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skinImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  cardFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  skinName: {
    color: '#fff',
    fontSize: 16,
  },
  skinPrice: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Store;
