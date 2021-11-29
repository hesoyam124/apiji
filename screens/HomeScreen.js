import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CommentInput from "../components/CommentInput";
import CommentItem from "../components/CommentItem";

export function HomeScreen({ route, navigation }) {




  const [isLoading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json")
      const json = await response.json();
      setData(json.movies)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMovies();
  }, [])


  function handleHomePress() {
    navigation.navigate("Home");
  }
  return (

      <View style={styles.container}>
        <View>
          {isLoading ? (
            <ActivityIndicator />
          ) : (<FlatList

            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text> {item.title} , {item.releaseYear} </Text>
            )}
          />)
          }
        </View>











      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },

  Text1: {
    padding: 25,
  },


});
