import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
  {
    "category": {
      "type": "String"
    },
    "brand": {
      "type": "String"
    },
    "name": {
      "type": "String"
    },
    "supports": {
      "type": [
        "String"
      ]
    },
    "introduction": {
      "type": "String"
    },
    "attributes": {
      "type": [
        "Mixed"
      ]
    },
    "colors": {
      "type": [
        "Mixed"
      ]
    },
    "price": {
      "type": "Number"
    },
    "discount": {
      "type": "Number"
    },
    "rate": {
      "type": "Number"
    },
    "image": {
      "type": "String"
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
