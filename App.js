import React, { useState } from "react";
import { SafeAreaView, StatusBar, Text, Image, Pressable, View } from "react-native";
import styles from "./styleSheet/estilo";

const COOKIE_CLOSED =
  "data:image/jpeg;base64,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";
const COOKIE_OPEN =
  "data:image/jpeg;base64,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";

const FRASES = [
"A sorte sorri para quem cuida bem do proprio ninho. Numeros da sorte: 04, 12, 23, 31, 45, 52, 58, 60.",
"Grandes destinos comecam dentro de uma pequena casca. Numeros da sorte: 01, 09, 15, 22, 33, 41, 47, 55.",
"Nao tenha medo de quebrar a casca para o novo mundo. Numeros da sorte: 07, 14, 21, 28, 35, 42, 49, 56.",
"A paciencia choca os ovos que a pressa pode quebrar. Numeros da sorte: 03, 11, 19, 27, 34, 46, 51, 59.",
"Uma surpresa dourada esta sendo preparada para voce. Numeros da sorte: 08, 16, 24, 32, 40, 48, 54, 57.",
"Sua criatividade e a gema que da cor a sua vida. Numeros da sorte: 05, 13, 25, 36, 43, 50, 53, 02.",
"O equilibrio e o segredo para nao quebrar seus sonhos. Numeros da sorte: 10, 20, 30, 40, 50, 60, 06, 17.",
"Coisas maravilhosas levam tempo para amadurecer e nascer. Numeros da sorte: 02, 18, 26, 37, 44, 51, 09, 21.",
"Proteja suas ideias como o passaro protege seu bem maior. Numeros da sorte: 11, 22, 33, 44, 55, 04, 15, 26.",
"Onde existe cuidado, a vida sempre encontra um jeito de brotar. Numeros da sorte: 06, 17, 28, 39, 41, 52, 10, 03.",
"Um novo comeco requer coragem para romper o que e seguro. Numeros da sorte: 12, 24, 36, 48, 01, 07, 13, 29.",
"A casca protege o que e fragil ate que ele se torne forte. Numeros da sorte: 05, 14, 23, 32, 41, 50, 59, 08.",
"Valorize a gema, mas entenda que a casca tambem tem seu papel. Numeros da sorte: 03, 09, 15, 27, 33, 45, 51, 57.",
"Sua persistencia fara com que o sucesso rompa a resistencia. Numeros da sorte: 07, 19, 21, 35, 47, 53, 02, 11.",
"O sol brilhara intensamente para quem souber esperar o despertar. Numeros da sorte: 04, 08, 16, 32, 44, 56, 12, 20.",
"Cada dia e um ovo novo: cheio de nutrientes e possibilidades. Numeros da sorte: 01, 10, 25, 38, 49, 52, 14, 27.",
"A simplicidade de um ovo esconde a complexidade da vida. Numeros da sorte: 06, 12, 18, 24, 30, 36, 42, 48.",
"Quem semeia cuidado colhe o nascimento de grandes conquistas. Numeros da sorte: 13, 26, 39, 52, 05, 18, 31, 44.",
"Nao conte os ovos antes da hora, mas celebre cada batida. Numeros da sorte: 02, 11, 20, 29, 38, 47, 56, 05.",
"A vida e um ciclo constante de renovacao e novos comecos. Numeros da sorte: 09, 18, 27, 36, 45, 54, 01, 10.",
];


export default function App() {
  const [biscoitoAberto, setBiscoitoAberto] = useState(false);
  const [frase, setFrase] = useState("");

  function alternarBiscoito() {
    if (biscoitoAberto) {
      setBiscoitoAberto(false);
      setFrase("");
      return;
    }

    const indiceSorteado = Math.floor(Math.random() * FRASES.length);
    setBiscoitoAberto(true);
    setFrase(FRASES[indiceSorteado]);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fffaf2" />

      <View style={styles.container}>
        <View style={styles.topo}>
          <Text style={styles.titulo}>App Ovo da Sorte</Text>
        </View>

        <View style={styles.areaBiscoito}>
          <Image
            source={{ uri: biscoitoAberto ? COOKIE_OPEN : COOKIE_CLOSED }}
            style={biscoitoAberto ? styles.imagemAberta : styles.imagemFechada}
            resizeMode="contain"
          />
        </View>

        <View style={styles.areaMensagem}>
          <Text style={styles.frase}>
            {frase ? `"${frase}"` : '"Alguma frase aqui...."'}
          </Text>
        </View>

        <Pressable style={styles.botao} onPress={alternarBiscoito}>
          <Text style={styles.iconeBotao}>🤖</Text>
          <Text style={styles.textoBotao}>
            {biscoitoAberto ? "Nova Tentativa" : "Quebrar ovo..."}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
