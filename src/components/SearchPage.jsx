import React from 'react'
import "./SearchPage.css"
import  TuneOutlinedIcon  from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
const SearchPage = () => {
  return (
    <>
    <div className='searchPage'>
        <div className="searchPage__filter">
            <TuneOutlinedIcon/>
            <h2>FILTER</h2>
        </div>
        <hr />
        <ChannelRow
        image="https://pixlok.com/wp-content/uploads/2021/04/T-Series-PNG-Logo.jpg"
        channel="T-Series"
        verified
        subs="275M"
        noOfVideos={382}
        description="Dream you job with the help of this channel"
        />
        <hr />
        <VideoRow
         image="https://i.ytimg.com/vi/BBAyRBTfsOU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKDJvAran95icnhIgOTpsqlk58ow"
         channel="T-Series"
         verified
         subs="275M"
         noOfVideos={382}
         description="Gulshan Kumar Presents latest Hindi Video Song of 2019 Bhushan Kumar's "
         title="Vaaste Song: Dhvani Bhanushali, Tanishk Bagchi | Nikhil D | Bhushan Kumar"
        />
        <VideoRow
         image="https://i.ytimg.com/vi/sCbbMZ-q4-I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAm5OnsRQpQ21bEgv0gLi5qbRxYDQ"
         channel="T-Series"
         verified
         subs="275M"
         noOfVideos={382}
         description="Gulshan Kumar & T-Series presents Bhushan Kumar's Lut Gaye; a romantic ballad composed by Tanishk Bagchi, penned by Manoj Muntashir"
         title="Lut Gaye (Full Song) Emraan Hashmi, Yukti | Jubin N, Tanishk"
        />
        <VideoRow
         image="https://i.ytimg.com/vi/JFcgOboQZ08/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCISgH0Rh9jzEkt-XYwz0zxduwydg"
         channel="T-Series"
         verified
         subs="275M"
         noOfVideos={382}
         description="Gulshan Kumar and T-Series in association with Emmay Entertainment present the lyrical video 'Dilbar"
         title="DILBAR Lyrical | Satyameva Jayate |John Abraham"
        />
        <VideoRow
         image="https://i.ytimg.com/vi/vu5-aKf_QqA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAf4kNXE5Gv_qGrl8r2a839ebHFag"
         channel="T-Series"
         verified
         subs="275M"
         noOfVideos={382}
         description="Presenting the video song  Aankh Marey with Lyrics from the Bollywood Movie Simmba"
         title="SIMMBA: Aankh Marey Lyrical | Ranveer Singh, Sara Ali"
        />
        <VideoRow
         image="https://i.ytimg.com/vi/hjWf8A0YNSE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEGOby0TTJaIOCTnTw9V9c1NDFHg"
         channel="T-Series"
         verified
         subs="275M"
         noOfVideos={382}
         description="T-Series presents Guru Randhawa latest Punjabi song of 2017 High Rated Gabru shot in exotic locations of USA by DirectorGifty"
         title="Guru Randhawa: High Rated Gabru Official Song"
        />
        <VideoRow
         image="https://i.ytimg.com/vi/f6vY6tYvKGA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCiCZ_ophKgO5j8oKfCKXp380NTmQ"
         channel="T-Series"
         verified
         subs="275M"
         noOfVideos={382}
         description="T-Series presents Cham Cham Full Video Song from Bollywood movie BAAGHI directed by Sabbir Khan"
         title="Cham Cham Full Video | BAAGHI | Tiger Shroff, Shraddha"
        />
    </div>
    </>
  )
}

export default SearchPage