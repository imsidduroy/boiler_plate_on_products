"use strict";

import mongoose from "mongoose";

const PoolSchema = new mongoose.Schema(
  {
    poolName: { type: String, required: true, unique: true },
    poolId: { type: Number, required: false, unique: true },
    tokenId: { type: String, required: false },
    guestTokenAllowed: { type: Boolean, default: false, required: false },
    tokenLifetime: { type: String, default: "15ms", required: false },
  },
  {
    timestamps: true,
  }
);
const Pool = mongoose.model("Pool", PoolSchema);

const PoolModel = {
  get,
  post,
  put,
  remove,
};

export default PoolModel;

async function get() {
  const pools = await Pool.find({});
  return pools;
}

async function getId(attr) {
  const { poolID } = attr;
  Pool.find({ id: poolID })
    .then((pool) => pool)
    .catch((err) => console.log(err));
}

async function post(attr) {
  const {poolId, poolName, tokenLifetime, guestTokenAllowed} = attr
  const Pool = new Pool({
      poolId,
      poolName : poolName || '',
      tokenLifeTime : tokenLifetime || '15ms',
      tokenId : tokenId || '',
      guestTokenAllowed : guestTokenAllowed || false
  });
  const createdPool = await Pool.save();
  return createdPool;
}

async function put(PoolId, updatedPool) {
  const Pool = await Pool.findById(PoolId);
  if (Pool) {
    Pool.name = updatedPool.name;
    Pool.price = updatedPool.price;
    return await Pool.save();
  } else {
    console.log("Pool not found");
    return undefined;
  }
}

async function remove(attr) {
  const {poolId, poolName, tokenLifetime, guestTokenAllowed} = attr
  if (poolName) {
    return await Pool.remove();
  } else {
    return undefined;
  }
}
