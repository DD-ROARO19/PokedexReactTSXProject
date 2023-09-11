/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';

import {styles} from './AppStyle';
const s = styles;

import Pokedex from './componentes/pokedex/pokedex';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

const AppButton = ({ title='' }) => (
  <TouchableOpacity style={s.NavBar_button}>
    <Text style={s.NavBar_button_text}>{title}</Text>
  </TouchableOpacity>
);

function App(): JSX.Element {

  const [state, setState] = useState(false);
  // Funcion para desactivar y activar la visualización
  // de la pokedex.
  function btn(){ 
    if (state === false) { setState(true); }
    else { setState(false); }
  }

  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };


  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>

    // Cuerpo de la aplicación
    <View style={s.body}>

      {/* Saludo: "hola mundo" */}
      <Text style={s.saludo}>Hello World!</Text>

      {/* Menu */}
      <View style={s.NavBar}>

        {/* Boton para seleccionar la pokedex */}
        <Button
          title="Pókedex" 
          onPress={btn}
        />

        {/* test con boton personalizado */}
        {/* <AppButton title='Bruh'></AppButton> */}
      </View>

      {/* Espacio para mostrar la pokedex */}
      {state === true && 
      <View style={s.Modulo}>
        {/* <Text>testa</Text> */}
        <Pokedex></Pokedex>
      </View>
      }

    </View>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
