import { PostingState } from '.';

export const labels: Record<keyof PostingState, string> = {
  name: 'Name',
  description: 'Description',
  type: 'Type',
  medium: 'Medium',
  time: 'Time',
  players: 'Players',
  storyteller: 'Storyteller',
};
