
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

import RepoCard from "../components/reopsCard/index"
import { useGetReposSortedByStars } from "../services/repository.services"
import Selector from "../components/selector";
import EmptyScreen from "../components/emptyScreen";


const filterData = [{ label: 'Top 1', value: 1 }, { label: 'Top 10', value: 10 }, { label: 'Top 50', value: 50 }, { label: 'Top 100', value: 100 }]

const ExploreScreen = () => {
  const [perPage, setPerPage] = useState(10)
  const { data, isLoading } = useGetReposSortedByStars({ perPage })


  return (
    <SafeAreaView style={styles.list__container}>
      <Text style={styles.title}>Explore Popular</Text>
      <View>
        <Selector items={filterData.map((item) => item.label)} setValue={(val) => {
          setPerPage(filterData.find((item) => item.label == val).value)

        }} label="View :" initialVal="Top 10" />

        {isLoading ? <ActivityIndicator /> :
          !data ?
            <EmptyScreen /> :
            <FlatList
              style={{ marginVertical: 15 }}
              data={data}
              renderItem={({ item }) => <RepoCard type="explore"
                repository={item}
              />}
              keyExtractor={(item) => item.id}
            />}
      </View>


    </SafeAreaView>

  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginHorizontal: 10,
    marginVertical: 25
  }

});