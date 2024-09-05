const createPeerConnection = () => {
  return new Promise(async (resolve, reject) => {
    const peerConnection = await new RTCPeerConnection({
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302',
        },
      ],
    });

    //rtc peeconnectionends
    // add mediaStream for remote
    const remoteStream = new MediaStream();

    peerConnection.addEventListener('signalingstatechange', (e) => {
      console.log('signalingstatechange', e);
    });
    peerConnection.addEventListener('iceconnectionstatechange', (e) => {
      console.log('iceconnectionstatechange', e);
    });
    peerConnection.addEventListener('icegatheringstatechange', (e) => {
      console.log('icegatheringstatechange', e);
    });
    peerConnection.addEventListener('icecandidate', (e) => {
      console.log('icecandidate', e);
    });
    peerConnection.addEventListener('track', (e) => {
      console.log('track', e);
      remoteStream.addTrack(e.track);
    });
    resolve(peerConnection, remoteStream);
  }); //promise ends
};
export default createPeerConnection;
