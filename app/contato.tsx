import { Text, View, SafeAreaView, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import Estilos from "../assets/styles/Estilos";

export default function Contato() {
    const backgroundColor = '#ADD8E6'; 

    return (
        <SafeAreaView style={{ flex: 1, alignContent: "center", alignItems: "center", backgroundColor}}>
            <Text style={{ fontSize: 80, fontWeight: "bolder", textAlign: "center", marginTop: 70 }}>
                Contato
            </Text>
            <View style={Estilos.quadroContato}>
                <Text>
                    <Text style={{ fontWeight: 'bold' }}>Nome da escola:</Text> Escola Estadual Kaio Rodrigo{"\n\n"}
                    <Text style={{ fontWeight: 'bold' }}>Endereço:</Text> Osasco, Rua Itapecirica n 777{"\n\n"}
                    <Text style={{ fontWeight: 'bold' }}>Horário de funcionamento Presencial:</Text> 8 horas às 16 horas{"\n\n"}
                    <Text style={{ fontWeight: 'bold' }}>Qualquer dúvida entre em contato pelo número de WhatsApp ou Telefone:</Text> WhatsApp 119999-8431, Telefone 77771491{"\n\n"}
                    <Text style={{ fontWeight: 'bold' }}>Email da Escola:</Text> Kaiorodrigo777@gmail.com.br{"\n\n"}
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
