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

export function SettingsScreen({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  const getPeople = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users?page=2")
      const json = await response.json();
      setData(json.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPeople();
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
              <Text> {item.first_name} , {item.last_name}, {item.email} </Text>
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



  gameCommentsJubotron: {
    flex: 1,
  },
});
