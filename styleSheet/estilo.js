import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fffaf2",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 26,
    paddingTop: 28,
    paddingBottom: 34,
  },

  topo: {
    width: "100%",
    backgroundColor: "#f7a10b",
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
    shadowColor: "#d98500",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.14,
    shadowRadius: 18,
    elevation: 5,
  },

  titulo: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "800",
  },

  areaBiscoito: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },

  imagemFechada: {
    width: 290,
    height: 290,
  },

  imagemAberta: {
    width: 300,
    height: 300,
  },

  frase: {
    fontSize: 24,
    fontStyle: "italic",
    color: "#2336a7",
    textAlign: "center",
    lineHeight: 34,
  },

  areaMensagem: {
    minHeight: 96,
    justifyContent: "center",
  },

  botao: {
    minWidth: 250,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    borderWidth: 2,
    borderColor: "#f7a10b",
    borderRadius: 28,
    paddingVertical: 14,
    paddingHorizontal: 26,
    backgroundColor: "#ffffff",
  },

  iconeBotao: {
    fontSize: 24,
  },

  textoBotao: {
    color: "#f39800",
    fontWeight: "700",
    fontSize: 18,
  },
});

export default styles;
