import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableWithoutFeedback,
  ActivityIndicator
} from "react-native";
import moment from 'moment';

import Icon from 'react-native-vector-icons/FontAwesome';

import RepoCard from "../components/reopsCard/index"
import { useGetReposWithFiltersQuery } from '../features/api/apiSlice'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { colors } from "../theme/colors"
import Selector from "../components/selector"
import EmptyScreen from "../components/emptyScreen"




const RepositoriesScreen = () => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState("");
  const [language, setLanguage] = useState("")

  const {
    data: repositories,
    isLoading
  } = useGetReposWithFiltersQuery(date, language)

  const languages = ["C", "go", "Java", "JavaScript", "PHP", "Python", "Ruby", "Scala", "TypeScript"]


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(moment(date).format('YYYY-MM-DD'))
    hideDatePicker();
  };


  return (
    <SafeAreaView style={styles.list__container}>
      <Text style={styles.title}>Repositories</Text>



      <View style={styles.filters}>
        <Selector
          items={languages}
          setValue={setLanguage}
          isSearchExist
        />
        <TouchableWithoutFeedback
          onPress={showDatePicker}>
          <View style={styles.datePicker}>
            <Text style={{ marginLeft: 10 }}>Date :  </Text>
            {date ?
              <Text style={{ fontWeight: "bold", color: "black", marginRight: 10 }}>{date}</Text>

              :
              <View style={{ flexDirection: "row" }}>
                <Text style={{
                  fontWeight: "bold", color: "black", marginRight: 10
                }}> Show All</Text>
                <Icon name="chevron-down" size={13} color={colors.text.secondary} />
              </View>
            }
          </View>
        </TouchableWithoutFeedback>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      {isLoading ? <ActivityIndicator /> :
        !repositories ?
          <EmptyScreen /> :
          <FlatList
            style={{ marginVertical: -15 }}
            data={repositories.items}
            renderItem={({ item }) => <RepoCard type="repositories" repository={item} />}
            keyExtractor={(item) => item.id}

          />}

    </SafeAreaView>

  )
}

export default RepositoriesScreen

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
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15
  },
  datePicker: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: 30,
    backgroundColor: colors.bg.primary,
    padding: 15,
    width: "45%",
    borderRadius: 20
  }
});