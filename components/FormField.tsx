import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

import { icons } from '../constants'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)


  return (
    <View className={'space-y-2  ${otherStyles}'}>
      <Text className='text-base text-gray-100'>{title}</Text>
      <View className='border border-black w-full h-16 px-4 bg-gray-200 rounded-2xl focus:border-blue items-center flex-row'>
        <TextInput className='flex-1 text-black text-base'
        value={value}
        placeholder={placeholder}
        placeholderTextColor={"#000000"}
        onChangeText={handleChangeText}
        secureTextEntry={title==='Password' && !showPassword}
        />

        {title==='Password' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-6 h-6' resizeMode='contain'/>
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField