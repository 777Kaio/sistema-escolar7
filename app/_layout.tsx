import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{ title: 'Menu Principal' }} />
      <Drawer.Screen
        name="/calendario"
        options={{ title: 'Calendario' }} />
            <Drawer.Screen
        name="/noticias"
        options={{ title: 'Noticias' }} />
           <Drawer.Screen
        name="/contato"
        options={{ title: 'Contato' }} />
          <Drawer.Screen
        name="/boletim"
        options={{ title: 'Boletim' }} />  
          <Drawer.Screen
        name="/eventos"
        options={{ title: 'Eventos' }} />  
    </Drawer>
  );
}