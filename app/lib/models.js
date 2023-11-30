import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const userDeletedSchema = userSchema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

const productDeletedSchema = productSchema;

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  img: {
    type: String,
  },
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const UserDeleted =
  mongoose.models.UserDeleted ||
  mongoose.model('UserDeleted', userDeletedSchema);
export const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);
export const ProductDeleted =
  mongoose.models.ProductDeleted ||
  mongoose.model('ProductDeleted', productDeletedSchema);
export const Admin =
  mongoose.models.Admin || mongoose.model('Admin', adminSchema);
