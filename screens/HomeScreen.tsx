import { View, Text } from 'react-native'
import Button from "../components/button/Button"
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenProps } from '../types'

const HomeScreen = ( {} : HomeScreenProps) => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headersShown: false,
        })
    }, [])

    return (
        <View className="flex-1 bg-white">
            <View>
                <Text className='text-red-700'>Productos</Text>
                <View>
                    <Button action={() => alert("ya")}>Un boton</Button>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     loginContainer: {
//       width: 300,
//       height: 200,
//       borderColor: '#ededed',
//       borderWidth: 1,
//       borderRadius: 8,
//       padding: 12,
//     },
//     buttonsContainer: {
//       flex: 1 / 3,
//       alignItems: 'center',
//     }
//   });