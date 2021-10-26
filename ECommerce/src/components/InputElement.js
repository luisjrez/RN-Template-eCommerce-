import React from 'react';
import { Input } from 'react-native-elements';

const InputElement = (props) => {
  return (
    <Input
      inputStyle={{
        fontSize: 11,
        fontWeight: 'bold',
      }}
      labelStyle={{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000000'
      }}
      {...props}
    />
  )
}

export default InputElement;