import { ActivityIndicator, Alert } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppDataProvider'
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '../../utils';


const SplashScreen = () => {
    const {setTodoList}=useContext(AppContext)

    const navigation=useNavigation()
    
    
    useEffect(()=>{
        const getFireBaseData=async()=>{
            try {
                const collectionRef = firestore().collection('ToDoList');
                const snapshot = await collectionRef.get();
    
                const list=[]
                snapshot.forEach(async (doc) => {
                    const data=doc.data()
                    list.push(data)
                    
                });
                setTodoList(list)
            } catch (error) {
                Alert.alert('','Something went wrong...',[{text:'ok',style:'cancel'}])
                
            }finally{
                navigation.reset({routes:[{name:'Drawer'}]})
            }
        }
        getFireBaseData()
    },[])

  return <ActivityIndicator size='large' />
}

export default SplashScreen

