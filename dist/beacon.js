import { NativeModules, NativeEventEmitter } from 'react-native';
import { EventEmitter } from 'events';
const NativeModule = NativeModules.RNHelpScoutBeacon;
const nativeEmitter = new NativeEventEmitter(NativeModule);
const events = new EventEmitter();
nativeEmitter.addListener('open', () => {
    events.emit('open');
});
nativeEmitter.addListener('close', () => {
    events.emit('close');
});
NativeModule.events = events;
export default NativeModule;
//# sourceMappingURL=beacon.js.map