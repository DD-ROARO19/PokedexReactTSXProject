import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        backgroundColor: "rgb(34, 70, 117)"
    },
    saludo: {
        textAlign: "center",
        color: "white",
        // textShadow: "2px 2px 5px black"
        textShadowColor: "black",
        textShadowOffset: {
            width: 2,
            height: 2
        }
    },
    NavBar: {
        position: "relative",
        padding: 10,
        paddingBottom: 15,
        margin: 10,
        borderRadius: 10,
        // border: "2px solid black",
        borderColor: "black",
        borderCurve: "circular",
        backgroundColor: "goldenrod",
        display: "flex",
        justifyContent: "center"
    },
    NavBar_button: {
        margin: 2,
        // padding: "10px 15px 10px 15px",
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "deepskyblue",
        // borderRadius: "5px",
        borderCurve: "circular",
        boxShadow: "0 6px #5e5e5e",
        fontWeight: "bold"
    },
    NavBar_button_text: {
        fontWeight: "bold",
        alignSelf: "center"
    },
    NavBar_button_hover: {
        backgroundColor: "rgb(70, 209, 255)"
    },
    NavBar_button_active: {
        backgroundColor: "rgb(0, 144, 192)",
        boxShadow: "0 4px #666",
        transform: "translateY(4px)",
        color: "white"
    },
    Modulo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});

export {styles};