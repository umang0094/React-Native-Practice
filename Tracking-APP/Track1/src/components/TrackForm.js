import React,{useContext} from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../Context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () =>{

    const {state : {name, recording, locations}, startRecording, stopRecording, changeName} = useContext(LocationContext)
   console.log(locations.length)
   const [saveTrack] = useSaveTrack();

   return <Spacer>
                <Input 
                    value = {name} 
                    onChangeText = {changeName} 
                    placeholder =' Enter Name' />
                    {recording?<Button 
                        title='Stop'
                        onPress={stopRecording} />: 
                    <Button 
                        title='Start Recording'
                        onPress={startRecording} 
                 />}{
                     !recording || locations.length ?
                     <Spacer>
                        <Button titile = ' Save Recording' onPress={saveTrack} /> 
                     </Spacer>: null
                 }
    </Spacer>
}

export default TrackForm;