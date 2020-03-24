import expressLoader from './express';
import './events';

export default async ({ expressApp }) => {
  await expressLoader({ app: expressApp });
};