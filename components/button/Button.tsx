import { StyleSheet, View, Pressable, Text } from "react-native"

type PropsTypes = {
    action?: () => void
    theme?: string
    children: React.ReactNode
}

const Button = ({ action, theme, children }: PropsTypes) => {

    if (theme === "primary") {
        return (
            <Pressable
                className="px-4 py-2 bg-[#0f8fff] rounded-md"
                onPress={action}
            >
                <Text className="text-white">{children}</Text>
            </Pressable>
        )
    }

    return (
        <Pressable
            className="px-4 py-2"
            onPress={action}
        >
            <Text>{children}</Text>
        </Pressable>
    )
}

export default Button