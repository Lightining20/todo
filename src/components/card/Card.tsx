import { Text, View } from "react-native"
import styles from "./cardStyles"
import { FC, ReactElement } from "react"

type Card={
    rightSideIcon?:ReactElement;
    title:string;
    description?:string,
    leftSideIcons?:ReactElement
}

const Card : FC<Card>=({
description,
leftSideIcons,
title,
rightSideIcon
})=>{

    return <View style={styles.container}>
         {leftSideIcons}
        <View style={styles.midleArea}>
           <Text>{title}</Text>
           <Text>{description}</Text>
        </View>
       
        {rightSideIcon}
    </View>
}
export default Card
