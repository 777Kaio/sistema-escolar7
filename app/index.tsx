import { Text, SafeAreaView, Pressable, ImageBackground, Image } from "react-native";
import { Link } from "expo-router";
import Estilos from "../assets/styles/Estilos";

// Image for background
const imageSource = require('../assets/images/83a211abf22074878fcb6450613bbc55.png'); 

export default function Index() {
  return (
    <ImageBackground
      source={imageSource}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "bolder", textAlign: "center", marginTop: -70, marginBottom: 50 }}>
          E.E Kaio Rodrigo
        </Text>

        <Pressable style={Estilos.botaoGo}>
          <Link href="/contato">
            <Image style={Estilos.icone} source={require('../assets/images/contacticon.png')} />
          </Link>
        </Pressable>

        <Pressable style={Estilos.botaoGo}>
          <Link href="/noticias">
            <Image style={Estilos.icone} source={require('../assets/images/news icon.png')} />
          </Link>
        </Pressable>

        <Pressable style={Estilos.botaoGo}>
          <Link href="/calendario">
            <Image style={Estilos.icone} source={require('../assets/images/calendaricon.png')} />
          </Link>
        </Pressable>

        <Pressable style={Estilos.botaoGo}>
          <Link href="/boletim">
            <Image style={Estilos.icone} source={require('../assets/images/fiote.png')} />
          </Link>
        </Pressable>

        <Pressable style={Estilos.botaoGo}>
          <Link href="/eventos">
            <Image style={Estilos.icone} source={require('../assets/images/buiu.png')} />
          </Link>
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
}
