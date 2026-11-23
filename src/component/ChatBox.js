import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Check,
} from 'react-native';
import StylishButton from './StylishButton';

export default function ChatBox(props) {
  const [point, setpoint] = useState(0);
  const name = props.name;
  const [state, setstate] = useState(false);
  const [ans, setans] = useState(false);
  const [c_ans2, setc_ans2] = useState(false);
  const [c_ans3, setc_ans3] = useState(false);
  const [answer1, setans1] = useState('');
  const [answer2, setans2] = useState('');
  const [answer3, setans3] = useState('');
  const [op1, setop1] = useState(true);
  const [op2, setop2] = useState(false);
  const [op3, setop3] = useState(false);
  const [chat2, setchat2] = useState(false);
  const [chat2_1, setchat2_1] = useState(
    'Fine , Just I was Stuck on the Roof Top.😿'
  );
  const [chat2_2, setchat2_2] = useState(
    'As You are no offense 😹. Btw I was Stuck on the Roof top.'
  );
  const [chat2_3, setchat2_3] = useState(
    'Just want SomeBody to talk 😿.. Its just boring on Roof top😿'
  );

  const [chat3, setchat3] = useState(false);

  const [chat3_1, setchat3_1] = useState(
    'Oh.. How Lovely 😻 can you just motivate me.. It really will help 😸.'
  );
  const [chat3_2, setchat3_2] = useState(
    'Oh👀.. I was chasing a butterfly she was beautiful😹. Can you please motivate me so I can Jump down😿.'
  );
  const [chat3_3, setchat3_3] = useState(
    'haahah..😹😹 thank you😻 .. but can you please motivate me so I can jump down😿.'
  );

  const [chat4, setchat4] = useState(false);

  const [chat4_1, setchat4_1] = useState(
    '(Mewo...[cat jumped...]), 🙀Wow I made it.. thanks for motivation..You are a great person😻😻..Bye '
  );
  const [chat4_2, setchat4_2] = useState(
    '(Mewo...[cat jumped...]), 🙀Wow I made it.. thanks for motivation I guess..You are not that bad person after all person..Bye'
  );
  const [chat4_3, setchat4_3] = useState(
    '(Mewo...[cat jumped...]), 🙀Wow I made it.. I am alive you funny man.. thanks for motivation I guess..You are such a positive person..Bye'
  );

  const [option, setoption] = useState(0);
  const [result, setresult] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setstate(true);
        }}>
        <StylishButton
          color="white"
          textcolor="black"
          toplayercolor="rgba(52, 137, 227, 0.71)"
          toplayertextcolor="white"
          bottomlayercolor="none"
          bottomlayertextcolor="black"
          topLayercontent="CHAT WITH ME 💬"
          bottomLayercontent="👆🏻PRESS ME"
          margininline="10%"
        />
      </TouchableOpacity>
      {state ? (
        <ScrollView style={styling.hiddenbox}>
          <Text
            style={styling.crossbutton}
            onPress={() => {
              setstate(false);
            }}>
            ✖️
          </Text>
          <Text
            style={{
              color: 'black',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 20,
            }}>
            {' '}
            CHAT BOX 🐱 / {name}{' '}
          </Text>

          <ScrollView>
            <Text style={styling.chat1}>
              Hello, {name} how are you (Meow)🐱?
            </Text>
            {op1 ? (
              <TouchableOpacity>
                <Text style={styling.optionheading}>Option Choose Wisely</Text>
                <Text
                  style={styling.option}
                  onPress={() => {
                    setans1('I am Good and You? 😊'),
                      setans(true),
                      setoption(1),
                      setpoint(point + 1);
                  }}>
                  I am Good and You?
                </Text>
                <Text
                  style={styling.option}
                  onPress={() => {
                    setans1('Handsome.. 🗿 '),
                      setans(true),
                      setoption(2),
                      setpoint(point + 2);
                  }}>
                  Handsome...
                </Text>
                <Text
                  style={styling.option}
                  onPress={() => {
                    setans1(' What do you want.. 😑 '),
                      setans(true),
                      setoption(3),
                      setpoint(point - 1);
                  }}>
                  What do you want..
                </Text>
              </TouchableOpacity>
            ) : null}{' '}
            <Text style={styling.chat2}>{answer1}</Text>
            {ans ? (
              <TouchableOpacity>
                <Text
                  style={styling.send}
                  onPress={() => {
                    setop1(false),
                      setchat2(true),
                      setop2(true),
                      setc_ans2(true);
                  }}>
                  {' '}
                  ✔️
                </Text>
              </TouchableOpacity>
            ) : null}
            {chat2
              ? (console.log('in Chat2'),
                option == 1 ? (
                  <Text style={styling.chat1}>{chat2_1}</Text>
                ) : option == 2 ? (
                  <Text style={styling.chat1}>{chat2_2}</Text>
                ) : option == 3 ? (
                  <Text style={styling.chat1}>{chat2_3}</Text>
                ) : null)
              : null}
            {op2 ? (
              <TouchableOpacity>
                <Text style={styling.optionheading}>Option Choose Wisely</Text>
                <Text
                  style={styling.option}
                  onPress={() => {
                    setans2('How can I help you to cheer up  😅 '),
                      setans(true),
                      setoption(1),
                      setpoint(point + 1);
                  }}>
                  How can I help you to cheer up.... 😅
                </Text>
                <Text
                  style={styling.option}
                  onPress={() => {
                    setans2(
                      '😶 So who the hell tell You to go on the Roof Top 🙄'
                    ),
                      setans(true),
                      setoption(2),
                      setpoint(point - 1);
                  }}>
                  😶 So who the hell tell You to go on the Roof Top...🙄
                </Text>
                <Text
                  style={styling.option}
                  onPress={() => {
                    setans2(
                      " Huh..😟 so how's the weather up there .. It's literally hot inside just like me..😁  "
                    ),
                      setans(true),
                      setoption(3),
                      setpoint(point + 1);
                  }}>
                  Huh..😟 so how's the weather up there .. It's literally hot
                  inside just like me..😁
                </Text>
              </TouchableOpacity>
            ) : null}
            {c_ans2 ? <Text style={styling.chat2}>{answer2}</Text> : null}
            {ans && c_ans2 ? (
              <TouchableOpacity>
                <Text
                  style={styling.send}
                  onPress={() => {
                    setop2(false),
                      setchat3(true),
                      setop3(true),
                      setc_ans3(true);
                  }}>
                  {' '}
                  ✔️
                </Text>
              </TouchableOpacity>
            ) : null}
            {chat3
              ? (console.log('in Chat3'),
                option == 1 ? (
                  <Text style={styling.chat1}>{chat3_1}</Text>
                ) : option == 2 ? (
                  <Text style={styling.chat1}>{chat3_2}</Text>
                ) : option == 3 ? (
                  <Text style={styling.chat1}>{chat3_3}</Text>
                ) : null)
              : null}
            {op3 ? (
              <TouchableOpacity>
                <Text style={styling.optionheading}>Option Choose Wisely</Text>
                <Text
                  style={styling.option}
                  onPress={() => {
                    setans3(
                      'Ok.. I am bad at this but..🙂..You are a big cat..You are not afraid to any thing..unless you stop hoping for good. You positive Energy is you power .. And Just Jump ✨ '
                    ),
                      setans(true),
                      setoption(1),
                      setpoint(point + 1);
                  }}>
                  Ok.. I am bad at this but..🙂..You are a big cat..You are not
                  afraid to any thing..unless you stop hoping for good. You
                  positive Energy is you power .. And Just Jump ✨
                </Text>
                <Text
                  style={styling.option}
                  onPress={() => {
                    setans3(
                      'Oho mate.. I am not going to motivate you.. be a men or cat i guess .. just jump your are cat tou are not going to hurt at that height..And how are you using mobile.. Whatever Bye!😐😒'
                    ),
                      setans(true),
                      setoption(2),
                      setpoint(point - 1);
                  }}>
                  Oho mate.. I am not going to motivate you.. be a men or cat i
                  guess .. just jump your are cat tou are not going to hurt at
                  that height..And how are you using mobile.. Whatever Bye!😐😒{' '}
                </Text>
                <Text
                  style={styling.option}
                  onPress={() => {
                    setans3(
                      " Hmm then.. here we go now.. You know what your are beautiful just like a beautiful star🌟 that don't afraid of anything.. Just like it you are shinning star..💫 Jump shinning star and shine..Damn I am good at this ..Yup🤖..hey Cat are you alive😐.. hey text back..🗿"
                    ),
                      setans(true),
                      setoption(3),
                      setpoint(point + 1);
                  }}>
                  Hmm then.. here we go now.. You know what your are beautiful
                  just like a beautiful star🌟 that don't afraid of anything..
                  Just like it you are shinning star..💫 Jump shinning star and
                  shine..Damn I am good at this ..Yup🤖..hey Cat are you
                  alive😐.. hey text back..🗿
                </Text>
              </TouchableOpacity>
            ) : null}
            {c_ans3 ? <Text style={styling.chat2}>{answer3}</Text> : null}
            {ans && c_ans3 ? (
              <TouchableOpacity>
                <Text
                  style={styling.send}
                  onPress={() => {
                    setop3(false), setchat4(true);
                  }}>
                  {' '}
                  ✔️
                </Text>
              </TouchableOpacity>
            ) : null}
            {chat4
              ? (console.log('in Chat4'),
                option == 1 ? (
                  <Text style={styling.chat1}>{chat4_1}</Text>
                ) : option == 2 ? (
                  <Text style={styling.chat1}>{chat4_2}</Text>
                ) : option == 3 ? (
                  <Text style={styling.chat1}>{chat4_3}</Text>
                ) : null)
              : null}
            {chat4 ? (
              <Text
                style={{
                  backgroundColor: 'white',
                  borderRadius: 20,
                  alignSelf: 'center',
                  padding: 5,
                  color: '#2D5175',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}
                onPress={() => {
                  setresult(true);
                }}>
                {' '}
                Result
              </Text>
            ) : null}
          </ScrollView>
        </ScrollView>
      ) : null}

      {((result == true) && (point > 1) && (point <=3)) ? (
        <View style={styling.congobox}>
          <Text
            style={styling.crossbutton}
            onPress={() => {
              setresult(false);
            }}>
            ✖️
          </Text>

          <Text
            style={{
              color: 'white',
              marginTop: 50,
              fontSize: 20,
              textTransform: 'uppercase',
              letterSpacing: 5,
              marginHorizontal: 5,
            }}>
            You done a Greate Job {name}
            You Really are a good person😻😻
          </Text>
        </View>
      ) : (result == true && point > 3) ? (
        <View style={styling.congobox}>
          <Text
            style={styling.crossbutton}
            onPress={() => {
              setresult(false);
            }}>
            ✖️
          </Text>

          <Text
            style={{
              color: 'white',
              marginTop: 20,
              fontSize: 20,
              textTransform: 'uppercase',
              letterSpacing: 5,
              marginHorizontal: 5,
            }}>
            You done a Greate Job {name}
            You Really are a Positive person keep spreading Positivity😻😻
          </Text>
        </View>
      ) : result == true && point <= 1 ? (
        <View style={styling.congobox}>
          <Text
            style={styling.crossbutton}
            onPress={() => {
              setresult(false);
            }}>
            ✖️
          </Text>

          <Text
            style={{
              color: 'white',
              marginTop: 20,
              fontSize: 20,
              textTransform: 'uppercase',
              letterSpacing: 5,
              marginHorizontal: 5,
            }}>
            You done a Greate Job {name}
            You are Greate Person..but in your own way..😐😻😻
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styling = StyleSheet.create({
  hiddenbox: {
    backgroundColor: '#0f5bb5',
    padding: 14,
    width: '80%',
    height: 350,
    marginLeft: 40,
    marginTop: -380,
    shadowColor: 'rgba(14, 122, 235, 1)',
    shadowRadius: 30,
    shadowOpacity: 0.7,
    shadowOffset: 0,
    borderTopLeftRadius: 40,
    borderBottomEndRadius: 40,
    borderTopRightRadius: 12,
    borderBottomStartRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.35)',
    // position: 'relative',
  },
  crossbutton: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: 'rgba(11, 22, 38, 0.9)',
    color: 'white',
    width: 28,
    height: 28,
    lineHeight: 28,
    textAlign: 'center',
    zIndex: 1,
    borderRadius: 50,
  },
  chat1: {
    backgroundColor: '#0b1626',
    color: 'white',
    padding: 12,
    width: 200,
    margin: 12,
    marginLeft: 0,
    borderColor: 'rgba(255,255,255,0.35)',
    borderWidth: 1,
    borderRadius: 20,
    borderTopLeftRadius: 4,
    paddingVertical:15,
  },
  chat2: {
    backgroundColor: 'white',
    color: '#0b1626',
    fontWeight: 'bold',
    padding: 12,
    width: 200,
    margin: 12,
    marginRight: 0,
    alignSelf: 'flex-end',
    borderColor: 'rgba(251, 2, 131, 0.7)',
    borderWidth: 2,
    borderRadius: 20,
    borderTopRightRadius: 4,
    paddingVertical:15,
  },
  option: {
    alignSelf: 'center',
    backgroundColor: 'rgba(11, 22, 38, 0.75)',
    color: 'white',
    padding: 8,
    paddingHorizontal: 12,
    fontWeight: 'bold',
    borderRadius: 14,
    marginVertical: 8,
    borderColor: 'rgba(255,255,255,0.6)',
    borderWidth: 1,
  },
  optionheading: {
    alignSelf: 'center',
    backgroundColor: 'white',
    color: '#0f5bb5',
    padding: 6,
    paddingHorizontal: 14,
    fontWeight: 'bold',
    borderRadius: 50,
    letterSpacing: 1,
  },
  send: {
    backgroundColor: 'white',
    borderRadius: 50,
    marginTop: -6,
    alignSelf: 'flex-end',
    width: 32,
    height: 32,
    lineHeight: 32,
    textAlign: 'center',
  },
  congobox: {
    width: '90%',
    height: 200,
    backgroundColor: '#0f5bb5',
    color: 'white',
    position: 'absolute',
    left: 20,
    top: -50,
    textAlign: 'center',
    borderColor: '#fb0283',
    borderRadius: 24,
    borderWidth: 3,
    padding: 10,
  },
});
