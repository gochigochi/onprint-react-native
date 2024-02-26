import { View, Text } from 'react-native'
import React from 'react'
import Button from '../components/button/Button'
import { LoginScreenProps } from '../types'

const LoginScreen = ({ navigation }: LoginScreenProps) => {

    return (
        <View className="bg-white flex-1 flex justify-center px-12">
            <View className="rounded-lg border border-zinc-200 p-3 flex-row justify-between">
                <Button action={() => navigation.navigate("Home")}>Registarse</Button>
                <Button action={() => navigation.navigate("Home")} theme="primary">Ingresar</Button>
            </View>
        </View>
    )
}

export default LoginScreen