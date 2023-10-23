import db from './db';

interface IRoom {
    id: number;
    name: string;
    capacity: number;
    active: boolean;
}

class RoomModel {
    constructor() {}

    async getAllRooms(): Promise<IRoom[]> {
        const rooms = await db.any('SELECT * FROM rooms');
        return rooms as IRoom[];
    }

    async createRoom(room: Omit<IRoom, 'id'>): Promise<null> {
        await db.none('INSERT INTO rooms (name, capacity, active) VALUES ($1, $2, $3)', 
        [room.name, room.capacity, room.active]);
        return null;
    }

    async deleteRoom(room: Pick<IRoom, 'id'>): Promise<null> {
        await db.none('DELETE FROM rooms WHERE id = $1', room.id);
        return null;
    }
}

const roomModel = new RoomModel();

export { roomModel, IRoom };
