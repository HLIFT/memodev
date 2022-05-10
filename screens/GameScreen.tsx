import {Modal, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {screenStyles} from "../assets/styles/screen.style";
import Card from "../components/Card";
import {useEffect, useState} from "react";
import {Dev, listDevs} from "../helpers/devs";
import {SafeAreaView} from "react-native-safe-area-context";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import ScreenContainer from "../components/ScreenContainer";
import PrimaryButton from "../components/PrimaryButton";
import LottieView from 'lottie-react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Record} from "../helpers/types";
import {getRecords} from "../helpers/store";

const GameScreen = ({navigation, route}: NativeStackScreenProps<any>) => {

    interface DevReturned {
        dev: Dev,
        index: number
    }

    const [devs, setDevs] = useState<Dev[]>([])
    const [devsReturned, setDevsReturned] = useState<DevReturned[]>([])
    const [lastReturned, setLastReturned] = useState<DevReturned|undefined>(undefined)
    const [clickable, setClickable] = useState<boolean>(true)
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    const [moves, setMoves] = useState<number>(0)
    const [pairs, setPairs] = useState<number>(0)

    const [pseudo, setPseudo] = useState<string>('')

    useEffect(() => {
        const pseudo: string = route.params?.pseudo

        setPseudo(pseudo ?? 'Anonyme')

        setDevs(shuffleDevs(listDevs))
    }, [])

    useEffect(() => {
        if(pairs >= 10) {
            setModalVisible(true)
            const getData = async () => {
                const records = await getRecords()
                const newRecord: Record = {
                    pseudo,
                    moves,
                    date: new Date()
                }

                if(records !== undefined) {
                    try {
                        records.push(newRecord)
                        const jsonValue = JSON.stringify(records)
                        await AsyncStorage.setItem('records', jsonValue)
                    } catch (e) {
                        console.error(e)
                    }
                } else {
                    try {
                        const initRecords: Record[] = []
                        initRecords.push(newRecord)
                        const jsonValue = JSON.stringify(initRecords)
                        await AsyncStorage.setItem('records', jsonValue)
                    } catch (e) {
                        console.error(e)
                    }
                }
            }
            getData().then()
        }
    }, [pairs])

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
        if (lastReturned === undefined) {
            checkIfGood(dev, index)
        } else {
            window.setTimeout(() => {
                checkIfGood(dev, index)
            }, 500)
        }
    }

    const checkIfGood = (dev: Dev, index: number) => {
        if (lastReturned !== undefined) {
            if(lastReturned.dev.id === dev.id) {
                setDevsReturned([...devsReturned, {dev, index}])
                setLastReturned(undefined)
                setPairs(pairs+1)
            } else {
                setDevsReturned(devsReturned.filter(value => value.index !== lastReturned.index && value.index !== index))
                setLastReturned(undefined)
            }
        } else {
            setDevsReturned([...devsReturned, {dev, index}])
            setLastReturned({dev, index})
            setMoves(moves+1)
        }
        setClickable(true)
    }

    return (
        <ScreenContainer>
            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.modalView}>
                        <LottieView source={require('../assets/animations/confeti.json')} autoPlay={true} loop={false} />
                        <Text style={styles.text}>Bravo tu as gagné en {moves} coups !</Text>
                        <View style={styles.modalButtonsView}>
                            <PrimaryButton text="Accueil" onPress={() => {navigation.replace("Landing")}} />
                            <PrimaryButton text="Rejouer" onPress={() => {navigation.replace("Game")}} />
                        </View>
                    </View>
                </Modal>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Tu as fais {moves} coups</Text>
                    <Text style={styles.text}>Tu as retourné {pairs} paires</Text>
                    <Text style={styles.text}>Plus que {10-pairs} paires à trouver !</Text>
                </View>
                <View style={[styles.board]}>
                    {devs.map((dev, index) => {
                        return (
                            <TouchableOpacity
                                key={dev.id+'-'+index}
                                activeOpacity={devsReturned.find(value => value.index === index) === undefined ? 0 : 1}
                                onPress={devsReturned.find(value => value.index === index) === undefined ? () => handleClickOnCard(dev, index) : () => {}}
                            >
                                <Card
                                    image={dev.image}
                                    isFlip={devsReturned.find(value => value.index === index) !== undefined}
                                    clickable={devsReturned.find(value => value.index === index) === undefined}
                                />
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        </ScreenContainer>

    )
}

const styles = StyleSheet.create({
    board: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        height: '80%',
    },
    textContainer: {
        height: '20%',
        justifyContent: "center",
    },
    text: {
        color: "#FFFFFF",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    },
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    modalButtonsView: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20,
        width: '80%'
    }
})

export default GameScreen
