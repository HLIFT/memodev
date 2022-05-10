import {View, Image} from "react-native";

interface CardProps {
    image: string
}

const Card = (props: CardProps) => {
    return (
        <View>
            <View style={{margin: 5, width: 80, height: 80, borderRadius: 20 }}>
                <Image style={{width: '100%', height: '100%', borderRadius: 15}} source={props.image} />
            </View>
        </View>
    )
}

export default Card
