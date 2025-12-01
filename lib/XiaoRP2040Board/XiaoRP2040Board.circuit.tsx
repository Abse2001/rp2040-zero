import { VoltageRegulator } from "../VoltageRegulator"
import { RP2040 } from "../../imports/RP2040"
import { PinOutCircuit } from "../PinOutCircuit"
import { LedCircuit } from "../LedCircuit"
import { FlashCircuit } from "../FlashCircuit"
import { CrystalCircuit } from "../CrystalCircuit"
import { XiaoRP2040Circuit } from "./XiaoRP2040Circuit"
import { XiaoBoard } from "@tscircuit/common"
import { SmdUsbC } from "./imports/SmdUsbC"

export default () => (
  <XiaoBoard name="XiaoRP2040Board" withPlatedHoles pcbGap={0.4}>
    <XiaoRP2040Circuit />
    <group pcbX={0} pcbY={0}>
      <RP2040 name="U1" pcbX={2} pcbY={-2.5} />
      <SmdUsbC name="USB" pcbX={0} pcbY={6} pcbRotation={180} />
    </group>
  </XiaoBoard>
)
