import { Text, View, SafeAreaView, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import Estilos from "../assets/styles/Estilos";

export default function Boletim() {
    const backgroundColor = '#808080'; 

    return (
        <SafeAreaView style={{ flex: 1, alignContent: "center", alignItems: "center", backgroundColor}}>
            <Text style={{ fontSize: 70, fontWeight: "bolder", textAlign: "center", marginTop: 0 }}>
                Boletim
            </Text>
            <View style={Estilos.quadroBoletim}>
                <Text>
                    <Text style={{ fontWeight: 'bold' }}>
                        ÁS 4 médias piores da sala Boletim, do mesmo aluno: Português, Geografia, Filosofia, Liderança.{"\n\n"}
                    </Text>
                    <Text style={{ fontWeight: 'bold' }}>1°B:</Text> Aluno Igor teve um rendimento muito ruim, tirando apenas 3 na matéria de Filosofia.{"\n\n"}
                    <Text style={{ fontWeight: 'bold' }}>2°B:</Text> Aluno Igor teve um rendimento mais ou menos, tirando apenas 5 na matéria de Geografia.{"\n\n"}
                    <Text style={{ fontWeight: 'bold' }}>3°B:</Text> Aluno Igor teve um rendimento muito péssimo, tirando 1 na matéria de Liderança.{"\n\n"}
                    <Text style={{ fontWeight: 'bold' }}>4°B:</Text> Aluno Igor teve um rendimento razoável, tirando apenas 6 na matéria de Português.{"\n\n"}
                    Aluno Igor teve esse rendimento ruim nesta matéria por conta de problemas familiares, e nesse bimestre ele teve dificuldades em algumas matérias, mas passou de ano porque a escola compreendeu a situação.{"\n\n"}
                </Text>
            </View>
            <Pressable style={Estilos.botaoGo}>
                <Link href="./">
                    <Image style={Estilos.icone} source={require('../assets/images/homeicon.png')} />
                </Link>
            </Pressable>
        </SafeAreaView>
    );
}
