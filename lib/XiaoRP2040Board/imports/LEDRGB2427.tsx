import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["DOUT"],
  pin2: ["VSS"],
  pin3: ["DIN"],
  pin4: ["VDD"],
} as const

export const LEDRGB2427 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C22079459"],
      }}
      manufacturerPartNumber="IN_PI22TAT5R5G5B"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="1.0500359999998636mm"
            pcbY="-0.6499860000000126mm"
            width="0.9999979999999999mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="1.0500359999998636mm"
            pcbY="0.6499860000001263mm"
            width="0.9999979999999999mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.0500359999999773mm"
            pcbY="0.6499860000001263mm"
            width="0.9999979999999999mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.0500359999999773mm"
            pcbY="-0.6499860000000126mm"
            width="0.9999979999999999mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.3500099999999975, y: -1.1999975999999606 },
              { x: -1.3500100000001112, y: -1.1999975999999606 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.1590000000001055, y: -0.8255000000000337 },
              { x: -2.1590000000001055, y: -0.44450000000006185 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.3495000000000346, y: -0.6349999999999909 },
              { x: -1.9685000000000628, y: -0.6349999999999909 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.3500099999999975, y: -1.1811507999999549 },
              { x: 1.3500099999999975, y: -1.1999975999999606 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.3500099999999975, y: 0.1188720000000103 },
              { x: 1.3500099999999975, y: -0.11887199999989662 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.3500099999999975, y: 1.1999976000000743 },
              { x: 1.3500099999999975, y: 1.1811508000000686 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.3500100000001112, y: -1.1811507999999549 },
              { x: -1.3500100000001112, y: -1.1999975999999606 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.3500100000001112, y: 0.1188720000000103 },
              { x: -1.3500100000001112, y: -0.11887199999989662 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.3500100000001112, y: 1.1999976000000743 },
              { x: -1.3500100000001112, y: 1.1811508000000686 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.3500099999999975, y: 1.1999976000000743 },
              { x: -1.3500100000001112, y: 1.1999976000000743 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=4352e0d6567741e7b67fe3480a5c23ff&pn=C22079459",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
