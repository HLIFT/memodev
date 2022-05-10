import {ImageSourcePropType} from "react-native";

export const listDevs: Dev[] = [
    {
        id: 1,
        name: "Elias",
        image: require("../assets/images/img_elias.png")
    },
    {
        id: 2,
        name: "Léo",
        image: require("../assets/images/img_leo.png")
    },
    {
        id: 3,
        name: "Alexis",
        image: require("../assets/images/img_alexis.png")
    },
    {
        id: 4,
        name: "Samuel",
        image: require("../assets/images/img_samuel.png")
    },
    {
        id: 5,
        name: "Axel",
        image: require("../assets/images/img_axel.png")
    },
    {
        id: 6,
        name: "Guillaume",
        image: require("../assets/images/img_guillaume.png")
    },
    {
        id: 7,
        name: "Jordan",
        image: require("../assets/images/img_jordan.png")
    },
    {
        id: 8,
        name: "Paul",
        image: require("../assets/images/img_paul.png")
    },
    {
        id: 9,
        name: "Monica",
        image: require("../assets/images/img_monica.png")
    },
    {
        id: 10,
        name: "Florentin",
        image: require("../assets/images/img_florentin.png")
    },
]

export type Dev = {
    id: number,
    name: string,
    image: ImageSourcePropType
}
