import { RP2040 } from "../../imports/RP2040"
import { LEDRGB2427 } from "./imports/LEDRGB2427"
import { LEDRGB1010 } from "./imports/LEDRGB1010"
import { GD25Q16CEIGR } from "./imports/GD25Q16CEIGR"
import { LDODFN11 } from "./imports/LDODFN11"
import { sel } from "tscircuit"

export const XiaoRP2040Circuit = () => (
  <>
    <capacitor name="C2" capacitance="100nF" footprint="cap0201" />
    <capacitor name="C3" capacitance="100nF" footprint="cap0201" />
    <capacitor name="C7" capacitance="100nF" footprint="cap0201" />
    <capacitor name="C10" capacitance="100nF" footprint="cap0201" />
    <capacitor name="C15" capacitance="100nF" footprint="cap0201" />
    <capacitor name="C18" capacitance="100nF" footprint="cap0201" />
    <capacitor name="C21" capacitance="100nF" footprint="cap0201" />

    <capacitor name="C5" capacitance="10uF" footprint="cap0402" />
    <capacitor name="C6" capacitance="10uF" footprint="cap0402" />

    <capacitor name="C16" capacitance="1uF" footprint="cap0201" />

    <capacitor name="C19" capacitance="12pF" footprint="cap0201" />
    <capacitor name="C20" capacitance="12pF" footprint="cap0201" />

    <diode
      name="D1"
      avalanche
      footprint="kicad:Diode_SMD/D_SOD-923"
      supplierPartNumbers={{ jlcpcb: ["C1972978"] }}
    />
    <diode
      name="D8"
      avalanche
      footprint="kicad:Diode_SMD/D_SOD-923"
      supplierPartNumbers={{ jlcpcb: ["C1972978"] }}
    />
    <diode
      name="D9"
      avalanche
      footprint="kicad:Diode_SMD/D_SOD-923"
      supplierPartNumbers={{ jlcpcb: ["C1972978"] }}
    />

    <diode
      name="D2"
      schottky
      footprint="kicad:Diode_SMD/D_SOD-323"
      supplierPartNumbers={{ jlcpcb: ["C48192"] }}
    />

    <led name="LED1" footprint="0402" color="red" />

    <resistor name="R1" resistance="5.1k" footprint="0201" />
    <resistor name="R2" resistance="5.1k" footprint="0201" />
    <resistor name="R3" resistance="2.2k" footprint="0201" />
    <resistor name="R4" resistance="4.7k" footprint="0201" />
    <resistor name="R5" resistance="10k" footprint="0201" />
    <resistor name="R6" resistance="1k" footprint="0201" />

    <resistor name="R14" resistance="1k" footprint="0201" />

    <resistor name="R22" resistance="27" footprint="0201" />
    <resistor name="R23" resistance="27" footprint="0201" />
    <resistor name="R24" resistance="1k" footprint="0201" />

    <LEDRGB2427 name="RGB1" />
    <LEDRGB1010 name="RGB2" />

    <GD25Q16CEIGR
      name="U3"
      footprint="kicad:Package_SON/Winbond_USON-8-1EP_3x2mm_P0.5mm_EP0.2x1.6mm"
    />
    <resistor name="R7" resistance="11k" footprint="0201" />
    <LDODFN11 name="U4" />
  </>
)
