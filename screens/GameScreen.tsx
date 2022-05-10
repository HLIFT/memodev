import {StyleSheet, View} from "react-native";
import {screenStyles} from "../assets/styles/screen.style";
import Card from "../components/Card";
import {useEffect, useState} from "react";
import {Dev, listDevs} from "../helpers/devs";

const GameScreen = () => {

    const [devs, setDevs] = useState<Dev[]>([])

    useEffect(() => {
        setDevs(shuffleDevs(listDevs))
    }, [])

    const shuffleDevs = (array: Dev[]) => {
        const finalArray = array.concat(array)

        let currentIndex = finalArray.length
        let randomIndex

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            [finalArray[currentIndex], finalArray[randomIndex]] = [finalArray[randomIndex], finalArray[currentIndex]]
        }

        return finalArray
    }

    return (
        <View style={[styles.board]}>
            {devs.map((dev, index) => {
                return (
                    <Card key={dev.name+'-'+index} image={dev.image} />
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    board: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        height: '100%',
    }
})

export default GameScreen
