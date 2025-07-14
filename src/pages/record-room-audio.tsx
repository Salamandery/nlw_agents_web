import { useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof window.MediaRecorder === 'function';

type RoomParams = {
  roomId: string;
};

export function RecordRoomAudio() {
  const params = useParams<RoomParams>();
  const [isRecording, setIsRecording] = useState(false);
  const recorder = useRef<MediaRecorder | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  function stopRecording() {
    setIsRecording(false);

    try {
      if (recorder?.current.state !== 'inactive') {
        recorder.current.stop();
      }

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function uploadAudio(audio: Blob) {
    const formData = new FormData();
    formData.append('file', audio, 'audio.webm');

    const response = await fetch(
      `http://localhost:3333/rooms/${params.roomId}/audio`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const result = await response.json();
    console.log(result);
  }

  function createRecorder(audio: MediaStream) {
    try {
      recorder.current = new MediaRecorder(audio, {
        mimeType: 'audio/webm',
        audioBitsPerSecond: 64_000,
      });

      recorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          uploadAudio(event.data);
          console.log(event.data);
        }
      };

      recorder.current.onstart = () => {
        console.log('Gravação iniciada!');
      };

      recorder.current.onstop = () => {
        console.log('Gravação encerrada!');
      };

      recorder.current.start();
    } catch (err) {
      console.error(err);
    }
  }

  async function startRecording() {
    if (!isRecordingSupported) {
      alert('Seu navegador não suporta gravação!');
      return;
    }
    setIsRecording(true);

    try {
      const audio = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44_100,
        },
      });
      createRecorder(audio);

      intervalRef.current = setInterval(() => {
        console.log('Gravando...');
        recorder.current?.stop();

        createRecorder(audio);
      }, 5000);
    } catch (err) {
      console.error(err);
    }
  }
  if (!params.roomId) {
    return <Navigate replace to="/" />;
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <h1>Gravar Áudio da Sala</h1>
      {isRecording ? (
        <Button onClick={stopRecording}>Parar Gravação</Button>
      ) : (
        <Button onClick={startRecording}>Gravar Áudio</Button>
      )}
      {isRecording && <p>Gravando...</p>}
    </div>
  );
}
