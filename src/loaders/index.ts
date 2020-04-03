import expressLoader from './express';
import mongooseLoader from './mongoose';
import './events';

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  await expressLoader({ app: expressApp });
};
