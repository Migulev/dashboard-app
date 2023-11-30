import mongoose from 'mongoose';

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const toCapitalize = (str) => {
  const toLower = str.toLowerCase();
  return toLower.charAt(0).toUpperCase() + toLower.slice(1);
};

export const toLower = (str) => {
  return str.toLowerCase();
};
