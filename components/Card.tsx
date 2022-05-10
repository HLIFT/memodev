import {View, Image, StyleSheet, GestureResponderEvent, ImageSourcePropType} from "react-native";
import FlipCard from 'react-native-flip-card';

interface CardProps {
    image: ImageSourcePropType,
    isFlip: boolean,
    clickable: boolean
}

const Card = (props: CardProps) => {
    return (
        <View>
            {props.isFlip ?
                <View style={[styles.cardContainer]}>
                    <Image style={styles.imageCard} source={props.image}/>
                </View>
            :
                <View style={[styles.cardContainer]}>
                    <Image style={styles.imageCard} source={require("../assets/images/img_anonyme.png")}/>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        margin: 5,
        width: 80,
        height: 80,
        borderRadius: 20
    },
    imageCard: {
        width: '100%',
        height: '100%',
        borderRadius: 15
    },
})

export default Card
