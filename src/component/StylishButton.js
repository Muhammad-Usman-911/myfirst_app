

import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function StylishButton(props) {
  const [colortouch, setcolortouch] = useState(props.bottomlayertextcolor);
  const [touch,settouch]=useState(false)
  useEffect(() => {
    if (touch == true) {
      setcolortouch(props.toplayercolor);
      alert('press above button now..')
    } else setcolortouch(props.bottomlayertextcolor);
  }, [touch]);

  const styling = StyleSheet.create({
    bigButton: {
      width: '60%',
      color: props.textcolor,
      padding: 15,
      backgroundColor: props.color,
      flex: 1,
      borderRadius: 24,
      marginLeft: 20,
      overflow: 'hidden',
      shadowColor: 'black',
      shadowRadius: 18,
      shadowOpacity: 0.45,
      shadowOffset: { width: 0, height: 8 },
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.18)',
      alignSelf: 'center',
      textTransform:'uppercase',
      letterSpacing:5,
      marginVertical:props.margininline,
    },

    bigButton_t: {
      width: '120%',
      color: props.toplayertextcolor,
      fontFamily: 'monospace',
      fontSize: 15,
      padding: 15,
      backgroundColor: props.toplayercolor,
      marginTop: -15,
      marginLeft: -15,
      fontWeight: 'bold',
    },
    bigButton_b: {
      width: '100%',
      color: colortouch,
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily:'system-ui',
      paddingTop: 4,
      backgroundColor:props.bottomlayercolor
    },

  });

  return (
    <View style={{fontFamily:'monospace'}}>
      
        <View style={styling.bigButton}>
          <Text style={styling.bigButton_t}>
          {props.topLayercontent}
          </Text>
          <TouchableOpacity
          onPress={()=>{settouch(true), setTimeout(()=>{
            settouch(false)
          },5000)}
         } 
         >
            <Text style={styling.bigButton_b}> {props.bottomLayercontent}
         </Text>
          </TouchableOpacity>
        </View>

          </View>
  );
}
