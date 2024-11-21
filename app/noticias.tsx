import { Text, View, SafeAreaView, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import Estilos from "../assets/styles/Estilos";

export default function Noticias() {
    const backgroundColor = '#800080'; 

    return (
        <SafeAreaView style={{ flex: 1, alignContent: "center", alignItems: "center", backgroundColor}}>
            <Text style={{ fontSize: 70, fontWeight: "bolder", textAlign: "center", marginTop: 0 }}>
                Notícias
            </Text>
            <View style={Estilos.quadroNoticias}>
                <Text>
                    <Text style={{ fontWeight: 'bold' }}>Segunda-feira:</Text> Show do Joãozinho Vt às 14 horas{"\n"}
                    <Text style={{ fontWeight: 'bold' }}>Terça-feira:</Text> Show do Mc Ryan SP às 12:00{"\n"}
                    <Text style={{ fontWeight: 'bold' }}>Quarta-feira:</Text> Show do Mc Tuto às 15:00{"\n"}
                    <Text style={{ fontWeight: 'bold' }}>Quinta-feira:</Text> Show do Mc Negão Original às 15:30{"\n"}
                    <Text style={{ fontWeight: 'bold' }}>Sexta-feira:</Text> E para fechar a sexta perfeita, o Show vai ser dele, MC IG{"\n"}
                    <Text style={{ fontWeight: 'bold' }}>Sábado:</Text> Reunião de Pais{"\n\n"}

                    <Text style={{ fontSize: 16 }}>
                        Espero que vocês estejam alegres para essa semana, estou me esforçando ao máximo para vocês, caros alunos. Não esqueçam de acompanhar a notícia da próxima semana.{"\n\n"}
                        Esses eventos irão ocorrer no mês de Novembro, e irão sair de férias no dia 6 de Dezembro.
                    </Text>
                </Text>
            </View>    
            <Pressable style={Estilos.botaoGo}>
                <Link href="./">
                    <Image style={Estilos.icone} source={require('../assets/images/homeicon.png')} />
                </Link>
            </Pressable>
        </SafeAreaView>    
    );
};