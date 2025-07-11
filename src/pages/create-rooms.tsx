import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

type GetRoomsApiResponse = Array<{
  id: string;
  name: string;
  description: string;
}>;

export function CreateRooms() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      // Simulate fetching data
      const response = await fetch('http://localhost:3333/rooms');

      const result: GetRoomsApiResponse = await response.json();
      return result;
    },
  });
  return (
    <div>
      <div>Create Room Page</div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error fetching rooms</div>}
      {data && (
        <div className="flex flex-col gap-1">
          {data.map((room) => (
            <Link
              className="rounded border p-2"
              key={room.id}
              to={`/room/${room.id}`}
            >
              <h3>{room.name}</h3>
              <p>{room.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
