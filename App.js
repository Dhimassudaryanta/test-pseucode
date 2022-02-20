/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';


const App = () => {

  const [variable, setVariable] = useState("");
  const [variable4, setVariable4] = useState("");

  useEffect(() => {
    if (variable) {
      onGetVariable();
    }
  }, [variable])

  const output = [];
  for (let index = 50; index <= 100; index += 5) {

    const item = (
      <Text>{index <= 60 ? index + " Kurang"
        : index > 60 && index <= 70 ? index + " Cukup"
          : index > 70 && index <= 80 ? index + " Baik"
            : index > 80 ? index + " Luar Biasa"
              : index}</Text>
    )
    output[index] = (item)
  }

  // var i;
  const fib = [];

  fib[0] = 0;
  fib[1] = 1;
  for (let i = 2; i <= 20; i++) {

    const item = fib[i - 2] + fib[i - 1]


    fib[i] = (item)
    // console.log(fib[i]);
  }

  const onNumber3 = (text) => {
    setVariable(text);
  }


  const onGetVariable = () => {

    const newVariable = []
    for (let index = 1; index <= variable; index++) {

      const item = (
        <Text>{"*".repeat(index)}</Text>
      )
      newVariable[index] = (item)
    }



    return (newVariable)
  }


  var a = ['', 'satu ', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan ', 'sepuluh ', 'sebelas ', 'dua belas ', 'tiga belas ', 'empat belas ', 'lima belas ', 'enam belas ', 'tujuh belas ', 'delapan belas ', 'sembilan belas '];
  var b = ['', '', 'dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'];

  function inWords(num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'ribu ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'ratus ' : '';
    str += (n[5] != 0) ? ((str != '') ? '' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
    return str;
  }



  return (
    <ScrollView>
      <Text>PseudoCode :</Text>
      <Text>Nomor 1</Text>
      {output}
      <Text>{"\n"}</Text>
      <Text>Nomor 2</Text>
      <Text>{fib}</Text>
      <Text>{"\n"}</Text>
      <Text>Nomor 3</Text>
      <TextInput
        placeholder='Masukkan Variable'
        onChangeText={(text) => onNumber3(text)}
        value={variable}
        keyboardType='numeric'
        style={{
          borderWidth: 1,
          borderColor: 'black',
        }}>
      </TextInput>
      {onGetVariable()}
      <Text>{"\n"}</Text>
      <Text>Nomor 4</Text>
      <TextInput
        placeholder='Masukkan Variable'
        onChangeText={(text) => setVariable4(text)}
        value={variable4}
        keyboardType='numeric'
        style={{
          borderWidth: 1,
          borderColor: 'black',
        }}>
      </TextInput>
      <Text>{variable4 ? variable4 < 2000 ? "harus diatas 2000" : inWords(variable4) : null}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
