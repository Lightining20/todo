import { Dimensions } from "react-native"

const {height,width}=Dimensions.get('window')

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size:number) => width / guidelineBaseWidth * size;
const verticalScale =  (size:number) => height / guidelineBaseHeight * size;
const moderateScale = (size:number, factor = 0.5) => size + ( scale(size) - size ) * factor;


export const MATRIX={
        height,
        width,
        scale,
        verticalScale,
        moderateScale
}