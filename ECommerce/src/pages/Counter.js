import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  incrementByAmount,
  decrement,
  reset
} from '../redux/slices/counter.slice'
import InputElement from '../components/InputElement'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  function onIncrement() {
    dispatch(increment())
  }
  function onDecrement() {
    dispatch(decrement())
  }
  function onIncrementByAmount() {
    dispatch(incrementByAmount(3))
  }
  function onReset() {
    dispatch(reset())
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            Counter Example with RTK (redux-toolkit)
          </Text>
          <Text
            style={{
              fontSize: 150,
              fontWeight: 'bold'
            }}
          >
            {counter}
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            padding: 20,
          }}
        >
          <View
            style={{
              marginBottom: 20
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}
            >
              Example Actions
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={onIncrement}
              style={{ alignItems: 'center', justifyContent: 'center', padding: 10, marginBottom: 20, backgroundColor: 'orange' }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold'
                }}
              >
                Increment by 1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onDecrement}
              style={{ alignItems: 'center', justifyContent: 'center', padding: 10, marginBottom: 20, backgroundColor: 'orange' }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold'
                }}
              >
                Decrement by 1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onIncrementByAmount}
              style={{ alignItems: 'center', justifyContent: 'center', padding: 10, marginBottom: 20, backgroundColor: 'orange' }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold'
                }}
              >
                Increment by 3
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onReset}
              style={{ alignItems: 'center', justifyContent: 'center', padding: 10, marginBottom: 20, backgroundColor: 'orange' }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold'
                }}
              >
                Reset counter
              </Text>
            </TouchableOpacity>
          </View>
          <InputElement
            label='Card Number'
            placeholder='BASIC INPUT'
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Counter;