
//% color=190 weight=100 icon="\uf1eb"  block="More Radio"
namespace RadioExtension {


    //% blockId=get_signal_strength
    //% block="Radio Signal Strength"
    export function getSignalStrength(): number {
        let strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
        if (strength > -35) {
            return 5;
        } else if (strength > -50 && strength <= -35) {
            return 4;
        } else if (strength > -57 && strength <= -50) {
            return 3;
        } else if (strength > -64 && strength <= -57) {
            return 2;
        } else if (strength > -71 && strength <= -64) {
            return 1;
        } else {
            return 0;
        }
    }
}