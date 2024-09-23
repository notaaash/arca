import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'

import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

const [isSubmitting, setIsSubmitting] = useState(false)

const submit = async () => {
  if(!form.username || !form.email || !form.password){
    Alert.alert('Error', 'Please fill in all the fields')
  }

  setIsSubmitting(true);

  try {
    const result = await createUser(form.email, form.password, form.username)

    //set it to global state

    router.replace('./home')
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert('Error', error.message);
    } else {
      Alert.alert('Error', 'An unknown error occurred');
    }
  } finally{
    setIsSubmitting(false)
  }
}


  return (
    <SafeAreaView className='h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[75vh] px-4 my-6'>
          <Image source={images.logo} resizeMode='contain' className='w-[200px] h-[60px] ' />

          <Text className='text-2xl text-black text-semibold mt-7 mx-5 font-libre'>Sign up to Arca</Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e: any) => setForm({ ...form, username: e })}
            otherStyles="mt-10" placeholder={undefined}          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address" placeholder={undefined}          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyles="mt-7" placeholder={undefined}          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles={"mt-7"}
            isLoading={isSubmitting} textStyles={undefined}          />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-600 font-libre'>
              Have an account already?
            </Text>
            <Link href="/sign-in" className='text-lg font-libre'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

