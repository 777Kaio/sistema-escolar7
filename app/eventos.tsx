import { Text, View, SafeAreaView, Pressable, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import Estilos from "../assets/styles/Estilos";

export default function Eventos() {
    const backgroundColor = '#FFFFFF'; // Fixed the extra comma

    return (
    <ScrollView>
        <SafeAreaView style={{ flex: 1, alignContent: "center", alignItems: "center", backgroundColor}}>
            <Text style={{ fontSize: 70, fontWeight: "bolder", textAlign: "center", marginTop: 0 }}>
                Eventos
            </Text>
            <View style={Estilos.quadroNoticias}>
                <Text>
                    Os eventos que irão ocorrer saíram antes na Página de Notícia da Escola.{"\n\n"}
                    <Text style={{ fontWeight: 'bold' }}>
                        Mas os próximos dois eventos que vão ocorrer no mês de Dezembro, vão sair agora nesta Página de eventos, então não perca seu tempo e vá ver os eventos da escola.
                    </Text>{"\n\n"}
                    <Text style={{ fontWeight: 'bold' }}>
                        A partir do dia 2 ao dia 5 de Dezembro:
                    </Text>: Irá ocorrer o interclasse da Escola, onde vai ter torcida, pode levar bandeiras, pode levar objetos para fazer barulho, vai ser o melhor interclasse de todos os tempos.{"\n\n"}
                    <Text style={{ fontWeight: 'bold' }}>
                        No dia 6 vai ter a festa de despedida, pois depois do dia 6 vem as férias, espero que os alunos aproveitem muito bem as férias. Que todos aproveitem a festa e gostem da festa também. E que descansem bem nas férias, porque quando voltarem às aulas, vai ter eventos ainda melhores, e vai sair um por mês, então não esqueçam de ver a página de Eventos. Um ótimo dia a todos!!!
                    </Text>
                </Text>
            </View>
            <Pressable style={Estilos.botaoGo}>
                <Link href="./">
                    <Image style={Estilos.icone} source={require('../assets/images/homeicon.png')} />
                </Link>
            </Pressable>
        </SafeAreaView>
    </ScrollView>
    );
}
