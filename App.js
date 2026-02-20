import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  return (
      <View style={styles.container}>
          <View style={styles.caixa}>
              <View>
                  <AntDesign name="user" size={50} color="black" />
              </View>
              <View style={styles.textos}>
                  <Text style={styles.text}>Dev Junior</Text>
                  <Text>Full Stack Developer</Text>
              </View>
              <View style={styles.midia}>
                  <FontAwesome6 name="github" size={45} color="black" />
                  <FontAwesome6 name="linkedin" size={45} color="black" />
                  <MaterialIcons name="email" size={50} color="black" />
              </View>
              <Text>Pedro Otávio</Text>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    caixa: {
        height: 290,
        width: 250,
        backgroundColor: "white",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        gap:20

    },
    midia: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 200,
    },
    imagem: {
        height:6,
        width:6
    },
    text: {
        fontSize: 25,
        fontWeight:"bold"
    },
    textos: {
        alignItems:"center"
    }
});
