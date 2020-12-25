import { v4 as uuidv4 } from 'uuid';
import { Uuid } from '../types/uuid.type';

export function generateUuid(): Uuid {
  return uuidv4();
}