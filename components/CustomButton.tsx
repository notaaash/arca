import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ( { title, handlePress, containerStyles, textStyles, isLoading} ) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.6} 
        className={`bg-gray-200 rounded-xl min-h-[62] justify-center items-center ${containerStyles} ${isLoading ? 'opacity=50' : ''}`}
        disabled={isLoading}
        >
      <Text className='font-libre text-lg'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton