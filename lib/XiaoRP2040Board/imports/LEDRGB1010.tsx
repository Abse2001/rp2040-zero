import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["_POS"],
  pin2: ["_NEG3"],
  pin3: ["_NEG2"],
  pin4: ["_NEG1"],
} as const

export const LEDRGB1010 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C158099"],
      }}
      manufacturerPartNumber="FC_B1010RGBT_HG"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="0.32499299999994946mm"
            pcbY="0.518414000000007mm"
            width="0.3640074mm"
            height="0.6869937999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.32499300000006315mm"
            pcbY="0.518414000000007mm"
            width="0.3640074mm"
            height="0.6869937999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.32499300000006315mm"
            pcbY="-0.518414000000007mm"
            width="0.3640074mm"
            height="0.6869937999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0.32499299999994946mm"
            pcbY="-0.518414000000007mm"
            width="0.3640074mm"
            height="0.6869937999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.5765037999999549, y: 0.5764784000000418 },
              { x: 0.5765037999999549, y: -0.5759957999998733 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.5759958000001006, y: 0.5764784000000418 },
              { x: -0.5759958000001006, y: -0.5759957999998733 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=4504c44e16ca48e7a6ee93fbddb9af67&pn=C158099",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: {
          x: 0.0002540000000408327,
          y: 0.00022860000001401204,
          z: 0,
        },
      }}
      {...props}
    />
  )
}
