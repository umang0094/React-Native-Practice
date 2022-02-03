import { useContext } from "react";
import { Context as TrackContext } from "../Context/TrackContext";
import { Context as LocationContext } from "../Context/LocationContext";
import { navigate } from "../navigationRef";
export default() => {
    const {createTracks} =useContext(TrackContext);
    const {state:{locations, name}, reset} = useContext(LocationContext)

    const saveTrack = async() =>{
        await createTracks(name, locations)
        reset();
        navigate('TrackList')
    }

    return[saveTrack]
}