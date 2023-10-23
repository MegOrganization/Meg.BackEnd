// services/room.service.ts

import { IRoom, roomModel } from '../models/room.model';

class RoomService {
    constructor() {}

    async getAllRooms(): Promise<IRoom[]> {
        return roomModel.getAllRooms();
    }

    async createRoom(room: Omit<IRoom, 'id'>): Promise<null> {
        return roomModel.createRoom(room);
    }

    async deleteRoom(roomId: number): Promise<null> {
        // You may want to add additional logic or checks here before deleting a room.
        return roomModel.deleteRoom({ id: roomId });
    }
}

const roomService = new RoomService();

export { roomService };