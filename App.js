import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import firebase from './src/firebaseConnection'

export default function App() {
  const [nome, setNome] = useState('Carregando...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase(firebase);

    async function dados() {
      const dbRef = ref(db, 'nome');
      onValue(dbRef, (snapshot) => {
        setNome(snapshot.val());
      });
    }

    dados();
  }, []);



  return (
    <View style={{marginTop: 40, marginLeft: 25}}>
      <Text style={{fontSize: 25}}>Olá {nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
