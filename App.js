import { StatusBar } from 'react-native'
import { Navigation } from "./src/navigation/index";
import Header from "./src/components/header/index"
import { colors } from "./src/theme/colors"

// import { Provider } from "react-redux";
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { repositoriesApi } from './src/features/api/apiSlice'

export default function App() {
  return (
    // <Provider store={store}>
    <ApiProvider api={repositoriesApi}>
      <Header />
      <Navigation />
      <StatusBar
        backgroundColor={colors.bg.primary}
      />
    </ApiProvider>
    // </Provider>
  );
}