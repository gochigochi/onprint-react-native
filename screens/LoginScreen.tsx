import { View, Text } from 'react-native'
import React from 'react'
import Button from '../components/button/Button'
import { LoginScreenProps } from '../types'

const LoginScreen = ({ navigation }: LoginScreenProps) => {

    return (
        <View className="bg-white flex-1 grid items-center">
            <View className="rounded-lg border border-zinc-200">
                <Button action={() => navigation.navigate("Home")}>OK</Button>
            </View>
            <Text>LoginScreen</Text>
        </View>
    )
}

export default LoginScreen