import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import StylishButton from './src/component/StylishButton';
import LoveList from './src/component/LoveList';
import ChatBox from './src/component/ChatBox';
import ImageLoader from './src/component/ImageLoader';
import InfoBox from './src/component/InfoBox';
import GameBox from './src/component/GameBox'

export default function App() {
  const [infobox, setinfobox] = useState(false);

  const [username, setusername] = useState('');
  const [url, seturlvalue] = useState('none');

  const styling = StyleSheet.create({
    inputdatafeild: {
      marginTop: 50,
      marginLeft: -30,
    },
    circle: {
      marginLeft: 40,
      width: 8,
      backgroundColor: '#fb0283',
      borderRadius: 50,
      borderWidth: 2,
      borderColor: 'rgba(255,255,255,0.85)',
    },
    namefeild: {
      marginLeft: 10,
      backgroundColor: 'rgba(255,255,255,0.08)',
      color: 'white',
      padding: 12,
      borderColor: 'rgba(71, 148, 235, 0.8)',
      borderWidth: 2,
      borderRadius: 14,
      width: 250,
    },
    heading: {
      padding: 10,
      alignSelf: 'center',
      margin: 20,
      marginTop: 120,
      width: 170,
      backgroundColor: 'rgba(11, 22, 38, 0.85)',
      borderColor: 'rgba(71, 148, 235, 0.9)',
      borderRadius: 18,
      borderWidth: 2,
      cursor: 'pointer',
    },
    topbar: {
      backgroundColor: 'rgba(36, 114, 196, 0.85)',
      width: '100%',
      height: 80,
      padding: 10,
      paddingTop: 14,
      textAlign: 'center',
      fontFamily: 'monospace',
      borderBottomColor: '#fb0283',
      borderBottomWidth: 3,
      borderBottomLeftRadius: 18,
      borderBottomRightRadius: 18,
    },
    bottombar: {
      backgroundColor: 'rgba(11, 22, 38, 0.95)',
      width: '100%',
      height: 58,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      position: 'fixed',
      bottom: 0,
      padding: 10,
      borderColor: 'rgba(71, 148, 235, 0.6)',
      borderWidth: 2,
    },
    btn: {
      backgroundColor: 'rgba(36, 114, 196, 0.55)',
      width: 34,
      height: 34,
      borderRadius: 50,
      marginHorizontal: 15,
      paddingLeft: 1,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.25)',
    },
  });

  return (
    <View style={{ fontFamily: 'monospace', backgroundColor: '#0b1626', flex: 1 }}>
      <View>
        <ImageLoader 
        imgurl='https://w0.peakpx.com/wallpaper/212/65/HD-wallpaper-attractive-creature-animal-butterfly-glow-cat-cute-cute-cat-cute-cat-cute-kitten-fantasy-glowing-butterfly.jpg'
        imgwidth='100%'
        imgheight='200vh'
        blur='2'
        />
      </View>

      <View style={styling.topbar}>
        <View
          style={{
            cursor: 'pointer',
            width: '100%',
            marginLeft: -10,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: 'white',
              letterSpacing: 2,
              fontWeight: 'bold',
            }}>
            CAT ARE LOVELY CREATURE BUT ATTITTUDE IS HIGH ALSO THEY ARE GOOD
            PRUGREMMER
          </Text>
        </View>
      </View>

      <View style={styling.inputdatafeild}>
        <Text style={styling.circle}>
          <TextInput
            // to create a pasword Input use this prop  -> secureTextEntry={true}
            placeholder="Enter Your name ? "
            placeholderTextColor="white"
            style={styling.namefeild}
            onChangeText={(newname) => {
              setusername(newname);
            }}
          />
        </Text>
      </View>

      <View style={styling.heading}>
        <Text style={{ color: 'white' }}>
          {' '}
          Hi,
          <Text
            style={{ color: 'rgba(71, 148, 235, 0.77)', fontWeight: 'bold' }}>
            {username}
          </Text>{' '}
          I am Cat
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          console.log('hello Mom');
        }}>
        <LoveList />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          console.log('hello Mom');
        }}>
        <ChatBox name={username} />
      </TouchableOpacity>

      <View style={styling.bottombar}>
        <View
          style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={styling.btn}>
            <Text
              style={{ fontSize: 18 ,marginTop:3,}}
              onPress={() => {
                setinfobox(true);
              }}>
              {' '}
              ❔{' '}
            </Text>
            {infobox ? (
              <View>
                <Text
                  style={{
                    color: 'black',
                    top: -480,
                    left: -75,
                    zIndex: 1,
                    position: 'absolute',
                    backgroundColor: 'white',
                    width: 20,
                    paddingLeft: 6,
                    borderRadius: 50,
                  }}
                  onPress={() => {
                    setinfobox(false);
                  }}>
                  X
                </Text>
                <InfoBox />
              </View>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity style={styling.btn}>
          <GameBox
          show='true'
          content='📱'
          />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
