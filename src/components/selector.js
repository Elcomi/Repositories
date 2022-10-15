import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';


const Selector = ({
  setValue,
  items,
  label = 'Language :',
  initialVal = " Any",
  isSearchExist
}) => {

  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.label}>{label}</Text>
      <ModalDropdown
        onSelect={item => {
          setValue(items[item]);
        }}
        defaultValue={
          <>
            {initialVal &&
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.text}>
                  {initialVal}
                </Text>
                <Icon name="chevron-down" size={13} color={colors.text.secondary} />
              </View>

            }
          </>
        }
        options={items}
        showSearch
        renderSearch={
          <View
            style={[
              styles.search,
              !isSearchExist && { display: 'none' },
            ]}>
            <View
              style={styles.searchInfo}>
              <Text>Filter Languages</Text>
              <Icon name="search" size={20} color={colors.brand.secondary} />
            </View>
          </View>
        }
        animated
        style={styles.container}
        textStyle={{ marginHorizontal: 10, fontSize: 15 }}
        dropdownStyle={[
          styles.dropdown,
          !isSearchExist && { height: 200 },
        ]}
        dropdownTextStyle={{ color: 'black', fontSize: 14 }}
        dropdownTextHighlightStyle={{
          color: colors.brand.secondary,
          fontWeight: 'bold',
        }}
        renderSeparator={() => (
          <View
            style={{
              borderBottomWidth: 0.6,
              borderBottomColor: colors.text.primary,
            }}></View>
        )}
      />
    </View>
  );
};

export default Selector;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg.primary,
    paddingVertical: 15,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,

  },
  label: {
    backgroundColor: colors.bg.primary,
    padding: 15,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,

  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    marginRight: 10
  },
  search: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.text.primary,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  searchInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dropdown: {
    padding: 25,
    alignSelf: 'center',
    marginHorizontal: -50,
    marginVertical: 40,
    height: 400,
    width: 250,
    borderRadius: 20,
  }
})
