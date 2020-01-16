'use strict';
const { Contract } = require('fabric-contract-api');
class HelloworldContract extends Contract {

    constructor() {
        super('HelloworldContract');
    }

    async setKey(ctx, key, newValue) {
        let result = await ctx.stub.putState(key, Buffer.from(newValue));
        console.log("result..",result,result.toString())
        console.log("1",result.toString())
        return result;
    }

    async getKey(ctx, key) {
        // retrieve existing chaincode states
        let value = await ctx.stub.getState(key);
        console.log("value..", value, value.toString())
        console.log("11111111")
        console.log("Buffer value..", Buffer.from(value.toString()))
        return value;
    }

};

module.exports = HelloworldContract