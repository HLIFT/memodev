import {StyleSheet, TouchableOpacity, View} from "react-native";
import {screenStyles} from "../assets/styles/screen.style";
import Card from "../components/Card";
import {useEffect, useState} from "react";
import {Dev, listDevs} from "../helpers/devs";

const GameScreen = () => {

    interface DevReturned {
        dev: Dev,
        index: number
    }

    const [devs, setDevs] = useState<Dev[]>([])
    const [devsReturned, setDevsReturned] = useState<DevReturned[]>([])
    const [lastReturned, setLastReturned] = useState<DevReturned|undefined>(undefined)
    const [clickable, setClickable] = useState<boolean>(true)

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

    const handleClickOnCard = (dev: Dev, index: number) => {
        setClickable(false)
        returnCard(dev, index)
    }

    const returnCard = (dev: Dev, index: number) => {
        setDevsReturned([...devsReturned, {dev, index}])
        window.setTimeout(() => {
            checkIfGood(dev, index)
        }, 1500)
    }

    const checkIfGood = (dev: Dev, index: number) => {
        if (lastReturned !== undefined) {
            if(lastReturned.dev.id === dev.id) {
                setDevsReturned([...devsReturned, {dev, index}])
                setLastReturned(undefined)
            } else {
                setDevsReturned(devsReturned.filter(value => value.index !== lastReturned.index && value.index !== index))
                setLastReturned(undefined)
            }
        } else {
            setDevsReturned([...devsReturned, {dev, index}])
            setLastReturned({dev, index})
        }
        setClickable(true)
    }

    return (
        <View style={[styles.board]}>
            {devs.map((dev, index) => {
                return (
                    <TouchableOpacity key={dev.id+'-'+index} onPress={clickable ? () => handleClickOnCard(dev, index) : () => {}}>
                        {devsReturned.find(value => value.index === index) ?
                            <Card image={dev.image} />
                            :
                            <Card image={require("../assets/images/img_anonyme.png")} />
                        }
                    </TouchableOpacity>
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
