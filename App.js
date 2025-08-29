const { useState } from 'react';
import React { useStatefrom } 'react';
import { SafeAreaView, view, text, touchableOpacity, stylesheet, scrollview, textinput, alert, TouchableOpacity, View } from 'react-native';
export default function app() {
  const [pagina, setPagina] = useState('home');
  return (
    <SafeAreaView style={style.container}>
      <header pagina={pagina} setpagina={setpagina}>
        <scrollview contentContainerstyle={style.content}>
          {pagina === 'home' && <Home />}
          {pagina === 'sobre' && <Sobre />}
          {pagina === 'serviços' && <Serviços />}
          {pagina === 'contato' && <Contato />}



        </scrollview>
      </header>
    </SafeAreaView>
  );
}
function header({ pagina, setpagina }) {
  return (
    <View style={styles.header} >
      <Texte styles={style.headertitle}>BRD TRANSPORTES</Texte>
      <View style={styles.nav}>
        {['home', 'sobre', 'serviços', 'contato'].map((p) => (
          <TouchableOpacity
            key={p}
            styles={[styles.navButton, pagina === p && styles.navButtonActive]}
            onPress={() => setPagina(P)}
          >
            <Text styles={styles.navButtonText}>{p.charAt(0).toUpperCase() + p.slice(1)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
function home() {
  return(
    <view stlyle={styles.section}>
  <text style={styles.title}>bem-vindo À nossa empresa</text>
  <text>somos líderes em soluções tecnológicas para o seu negocio</text>
  </view>
  );
}

function home() {
  return(
    <view stlyle={styles.section}>
  <text style={styles.title}>sobre nós</text>
  <text>fundada em 2010, temos o compromisso de qualidade e inovação.</text>
  </view>
  );
}

function serviços() {
  return(
    <view stlyle={styles.section}>
  <text style={styles.title}>nossos serviços</text>
  <text>-Consultoria em TI</text>
  <text>-Desenvolvimento em softwere</text>
  <text>-suport Técnico</text>
  </view>
  );
}

function contato() {
  const [nome, setNome] = React.useState('');
  const [setEmail] = React.useState('');
  const[mensagem,setMensagem] = React. useState('');

  function enviar(){
    if (!nome || !email || !mensagem){
      alert.alert('erro', 'por favor preencha todos os campos ');
      return;
  }
  alert.alert('mensagem enviada', 'obrigado, ' ${nome} '! retornaremos em breve.');
  setNome('');
  setEmail('');
  setMensagem('');
  }
  return (
    <View style={styles.section}>
      <Text styles={styles.section}>Contato</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        />
      <TextInput style={styles.input}
        placeholder="Email"
        value={email}
        onChargeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Mensagem"
        value={Mensagem}
        onChangeText={setMensagem}
        multiline 
        />
        <touchableOpacity stlyle={styles.button} onPress={enviar}>
          <text stlyle= {stlyle.butontext}>enviar</text>
        </touchableOpacity>
        </View>


    </View>
  );
}

function footer (){
  return(
    <view stlyles={stlyles.footer}>
      <text stlyles= {{color: 'white'}}> 2025 minha empresa . todos os direitos reservados. </text>
    </view>
  );
}


const stlyles = stlyleSheet.creat({
  container: {
    flex:1,
    backgroundColor: '#f4f7fa'
  },
  header: {
    backgroundColor: '#004080'
    padding: 40, 
    alignContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12
  },
  nav: {flexDirection: 'row',
 justifycontent: 'space-around'
},
navButton: {
  paddingvertical: 8,
  paddinghorizontal: 12,
  borderRadius: 4
},
navButtonActive:{
background:'#0066cc'
},
navButtonText: { 
  color: 'white', 
  fontWeight: 'bold'
},
content: { padding: 20, flexGrow: 1},
section: { marginBottom: 20 },
title: { fontSize: 20, fontWeight: 'bold', marginBottom:10 },
input:{
  backgroundColor 'white',
  border: '#ccc',
  borderwidth: 1,
  paddingHorizontal: 10,
  padding: 8,
  borderRadius: 4,
  marginBottom: 15,
},
button:{
  backgroudColor: '#004080',
  paddingVertical: 12,
  borderRadius: 6,
  alignItems: 'center',
},
buttonText: {color: 'White', FontWeight: 'bold', fontSize: 16},
footer: { backgraoudColor: '#00264d', padding: 15, alignItems: 'center'},
});


