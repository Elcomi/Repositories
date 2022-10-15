
import { StatusBar } from 'react-native'


import { Navigation } from "./src/navigation/index";
import Header from "./src/components/header/index"
import { colors } from "./src/theme/colors"

export default function App() {

  return (
    <>

      <Header />
      <Navigation />

      <StatusBar
        backgroundColor={colors.bg.primary}
      />

    </>
  );
}