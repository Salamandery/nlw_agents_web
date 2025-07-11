import { Navigate, useParams } from 'react-router-dom';

type RoomParams = {
  roomId: string;
};

export function Room() {
  const { roomId } = useParams<RoomParams>();

  if (!roomId) {
    return <Navigate replace to="/" />; // Redirect to home if roomId is not found
  }

  return (
    <div>
      <h2>Room Details</h2>
      <p>Room ID: {roomId}</p>
    </div>
  );
}
