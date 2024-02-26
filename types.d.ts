import type { NativeStackScreenProps } from "@react-navigation/native-stack"

export type NativeStackParamList = {
    Login: undefined
    Home: undefined
}

export type HomeScreenProps = NativeStackScreenProps<NativeStackParamList, "Home">
export type LoginScreenProps = NativeStackScreenProps<NativeStackParamList, "Login">