"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
class LocalCache extends events_1.EventEmitter {
    constructor(config, services) {
        super();
        this.isReady = true;
        this.config = config;
        this.data = {};
        this.description = 'local cache';
        this.apiVersion = 2;
    }
    set(key, version, data, callback) {
        this.data[key] = { version, data };
        process.nextTick(() => callback(null));
    }
    get(key, callback) {
        const data = this.data[key];
        if (!data) {
            process.nextTick(() => callback(null, -1, null));
        }
        else {
            process.nextTick(() => callback(null, data.version, data.data));
        }
    }
    delete(key, callback) {
        delete this.data[key];
        process.nextTick(() => callback(null));
    }
}
exports.default = LocalCache;
//# sourceMappingURL=local-cache-object.js.map