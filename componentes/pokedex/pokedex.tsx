import React, { useState } from 'react';
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
   TouchableOpacity,
   TextInput,
   Image
 } from 'react-native';

import { styles, getTagType } from './pokeStyle';
const s = styles;

import  { getPokemon } from '../../servicios/pokeapi';

// interface PokedexProps {}

function Pokedex() {

   const [pokemon, onChangePokemon] = React.useState('');

   const [pId, setPId] = useState("");
   const [pName, setPName] = useState("");
   const [pTypes, setPTypes] = useState([
      {
         type: {
            name: ''
         }
      }
   ]);
   const [pImg, setPImg] = useState("");

   async function findPokemon(valor:string){
      if (valor.length == 0) {
         return 0;
      }
      onChangePokemon(valor);

      // API
      let p = await getPokemon(valor.toLocaleLowerCase());

      // console.log(p);

      setPId(p.Id);
      setPName(p.Name[0].toUpperCase()+p.Name.slice(1)); //Primera letra del nombre en mayuscula.
      setPTypes(p.Type);
      setPImg(p.Img_Anim);
      // setPImg(p.Img);

      // console.group('Información del (anterior) pokemon');
      //    console.log(pId);
      //    console.log(pName);
      //    console.log(pTypes);
      //    console.log(pImg);
      // console.groupEnd();
   }

   return (
      // Pokedex Component
      <View style={s.pokedex}>
         <Text style={s.titulo}>Pokédex</Text>

         {/* Input */}
         <View style={s.poke_input}>
            <Text>Buscar: </Text>
            <TextInput
               // ref={(el)=>{ pokemon = el; }}
               onChangeText={(valor) => findPokemon(valor)}
            />

            {/* Testinng */}
            {/* {pokemon !== '' && <Text>{pokemon}</Text>} */}

         </View>

         {/* Información del Pókemon */}
         <View style={s.pokemon_info}>
            {pName !== '' && <Text>{pName}</Text>}
            {pImg !== '' && <Image style={s.pokemon_img} source={{uri: pImg}}/>}
            <View style={s.pokemon_types}>
            {pTypes.map((tipo, index) => {
               getTagType(tipo.type.name);
               return (
                  // <View style={s.tags} key={index}>
                  //    <View>
                  //       <Text>{tipo.type.name.toUpperCase()}</Text>
                  //    </View>
                  // </View>
                  <Text key={index}>test</Text>
               );
               })}
            </View>
         </View>
         {/* <div id='pokemon-info'>
            {pName !== '' && <h3>{pName}</h3>}
            {pImg !== '' && <img id='pokemon-img' src={pImg} alt={pName}/>}
            <div id='pokemon-types'>
            {pTypes.map((tipo, index) => {
                  return (
                     <div className={"tipo "+tipo.type.name} key={index}>
                        <p>{tipo.type.name.toUpperCase()}</p>
                     </div>
                  );
               })}
            </div> */}
            {/* <div id='pokemon-description'>
            </div> */}
         {/* </div> */}

      {/* </div> */}
      </View>

   )
};

export default Pokedex;
