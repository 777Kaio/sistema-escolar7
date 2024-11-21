import { Text, View, SafeAreaView, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import Estilos from "../assets/styles/Estilos";

export default function Calendario() {
    const backgroundColor = '#FF0000'; 

    return (
        <SafeAreaView style={{ flex: 1, alignContent: "center", alignItems: "center", backgroundColor}}>
            <Text style={{ fontSize: 70, fontWeight: "bolder", textAlign: "center", marginTop: 60 }}>
                Calendário
            </Text>
            <View style={Estilos.quadroCalendario}>
                <Text style={{ fontWeight: "bold" }}>
                    Os feriados que irão acontecer são: dia 20 de março, dia 22 e 24 de maio, dia 18 de agosto, dia 3 de outubro, dia 7 de novembro (aniversário do diretor), dia 28 de novembro. A maioria dos feriados caiu no sábado ou domingo.{"\n"}
                    As únicas datas especiais que terão serão os shows, o interclasse e o interescola, e as férias.{"\n"}
                    Obrigado pela cooperação de todos, Ass: Diretor Kaio
                </Text>
            </View>
            <View style={{display: "flex", alignContent: "center"}}>
            <Pressable style={Estilos.botaoGo}>
                <Link href="./">
                    <Image style={Estilos.icone} source={require('../assets/images/homeicon.png')} />
                </Link>
            </Pressable>
            </View>
        </SafeAreaView>
    );
}