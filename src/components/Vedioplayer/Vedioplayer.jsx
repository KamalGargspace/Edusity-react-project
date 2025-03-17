import React,{useRef} from 'react'
import './Vedioplayer.css'
import video from '../../assets/video.mp4'

const Vedioplayer = ({playstate,setplaystate}) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current){
            setplaystate(false);
        }
    }
  return (
    <div className={`vedio-player ${playstate ?'':'hide'}`} ref = {player} onClick={closePlayer}>

        <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default Vedioplayer
