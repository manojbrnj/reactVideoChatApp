import React, {useEffect, useState, useRef} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Button, Card, TextInput, Spinner} from 'flowbite-react';
import axios from 'axios';
import Header from '../components/Header.jsx';
import '../App.css';
import CallInfo from '../components/CallInfo.jsx';
import ChatWindow from '../components/ChatWindow.jsx';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import ActionButtons from '../components/ActionButtons.jsx';
import addStream from '../redux-elements/actions/addStream.jsx';
import createPeerConnection from '../../utilities/createPeerConnection.jsx';

function MainVideoPage() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [appInfo, setAppInfo] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const localVideoRef = useRef(null);
  const [localVideo, setLocalVideo] = useState('');
  const [remoteVideo, setRemoteVideo] = useState('');
  const remoteVideoRef = useRef(null);
  const callStatus = useSelector((state) => state.callStatus);
  const state = useSelector((state) => state.streamState);
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: true,
        });
        dispatch(addStream('localStream', stream));
        // setLocalVideo(localStream);
        localVideoRef.current.srcObject = stream;
        const {peerConnection, remoteStream} = await createPeerConnection();
        console.log(peerConnection);
        console.log(remoteStream);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMedia();
  }, []);
  useEffect(() => {
    const fetchDecodedFunction = async () => {
      try {
        const token = searchParams.get('token');
        // console.log(token);

        const response = await axios.post(
          'https://react-video-chat-backend.onrender.com/validate-link',
          {token},
        );
        if (response.data) {
          setAppInfo(response.data);
          setLoading(false);
        }
      } catch (err) {
        setError('Failed to authenticate. Please try again.');
      }
    };
    fetchDecodedFunction();
    console.log(state);
  }, []);

  if (error) {
    return <div className='text-red-500'>{error}</div>;
  }

  return (
    <div className='main-video-page  '>
      <div className='text-center'>
        {appInfo ? <CallInfo apptInfo={appInfo}></CallInfo> : null}
      </div>
      <div className='video-chat-wrapper '>
        <video
          src=''
          autoPlay
          controls
          playsInline
          id='large-feed'
          ref={localVideoRef}
        ></video>
        <video
          src=''
          autoPlay
          controls
          playsInline
          id='own-feed'
          ref={remoteVideoRef}
        ></video>
        {/* <p>{callStatus.current}</p>
        <ChatWindow /> */}
      </div>
      <ActionButtons></ActionButtons>
      {/* <Header></Header> */}
    </div>
  );
}

export default MainVideoPage;
