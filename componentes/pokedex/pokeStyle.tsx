import { StyleSheet, Text, View } from "react-native";

const pokemonTypes = ['grass'];

async function getTagType(tipo:string){
  switch (tipo) {
      case "grass":
        return (
          <View style={styles.grass}>
            <Text>{tipo.toUpperCase()}</Text>
          </View>
        );
        break;
    default:
      break;
  }
}

const styles = StyleSheet.create({
  pokedex: {
    // border: "4px solid black",
    borderColor: "black",
    backgroundColor: "rgb(220, 27, 20)",
    // borderRadius: "10px",
    borderCurve: "circular",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // width: "fit-content",
    padding: 20,
    minWidth: 300
  },
  titulo: {
    backgroundColor: "cornsilk",
    // borderRadius: "10px",
    borderCurve: "circular",
    marginTop: 10,
    padding: 10,
    width: "80%",
    textAlign: "center"
  },
  poke_input: {
    // borderRadius: "10px",
    borderCurve: "circular",
    // padding: "0px 15px 0px 10px",
    paddingHorizontal: 10,
    paddingVertical: 0,
    backgroundColor: "cornsilk"
  },
  label: {
    marginRight: 5,
    fontWeight: "bold"
  },
  input_type__text: {
    // padding: "12px 15px",
    padding: 12,
    margin: 8,
    // display: "inline-block",
    display: "flex",
    border: "1px solid #d6d6d6",
    // borderRadius: "10px",
    borderCurve: "circular",
    boxSizing: "border-box"
  },
  pokemon_info: {
    minWidth: 230,
    margin: 20,
    padding: 10,
    // border: "4px solid white",
    borderColor: "white",
    backgroundColor: "cornsilk",
    // borderRadius: "10px",
    borderCurve: "circular",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  pokemon_img: {
    width: 150,
    height: 150
  },
  pokemon_types: {
    display: "flex",
    alignItems: "center"
  },
  tags: {
    margin: 10,
    marginTop: 0,
    // padding: "0px 20px 0px 20px",
    paddingHorizontal: 20,
    paddingVertical: 0,
    fontWeight: "bold",
    // borderRadius: "6px"
    borderCurve: "circular"
  },
  grass: {
    backgroundColor: "#63bc5aff"
  },
  poison: {
    backgroundColor: "#aa6bc8ff"
  },
  normal: {
    backgroundColor: "#929da3ff"
  },
  bug: {
    backgroundColor: "#91c12fff"
  },
  fire: {
    backgroundColor: "#ff9d55ff"
  },
  electric: {
    backgroundColor: "#f4d23cff"
  },
  dragon: {
    backgroundColor: "#0b6dc3ff"
  },
  physical: {
    backgroundColor: "#ea551eff"
  },
  fighting: {
    backgroundColor: "#ce416bff"
  },
  ground: {
    backgroundColor: "#d97845ff"
  },
  ghost: {
    backgroundColor: "#5269adff"
  },
  water: {
    backgroundColor: "#5090d6ff"
  },
  psychic: {
    backgroundColor: "#fa7179ff"
  },
  dark: {
    backgroundColor: "#5a5465ff"
  },
  special: {
    backgroundColor: "#1f4e94ff"
  },
  flying: {
    backgroundColor: "#8fa9deff"
  },
  rock: {
    backgroundColor: "#c5b78cff"
  },
  steel: {
    backgroundColor: "#5a8ea2ff"
  },
  ice: {
    backgroundColor: "#73cec0ff"
  },
  fairy: {
    backgroundColor: "#ec8fe6ff"
  },
  status: {
    backgroundColor: "#999999ff"
  }
});

export { styles, getTagType };