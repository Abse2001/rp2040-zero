import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["VSS"],
  pin5: ["pin5"],
  pin6: ["SCLK"],
  pin7: ["pin7"],
  pin8: ["VCC"],
  pin9: ["EP"],
} as const

export const GD25Q16CEIGR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2973793"],
      }}
      manufacturerPartNumber="GD25Q16CEIGR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin9"]}
            pcbX="-1.1368683772161603e-13mm"
            pcbY="1.1368683772161603e-13mm"
            width="1.6999966mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.7500620000000708mm"
            pcbY="1.3500099999999975mm"
            width="0.2800096mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.2499360000000479mm"
            pcbY="1.3500099999999975mm"
            width="0.2800096mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.2499360000000479mm"
            pcbY="1.3500099999999975mm"
            width="0.2800096mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.7500620000000708mm"
            pcbY="1.3500099999999975mm"
            width="0.2800096mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.7500620000000708mm"
            pcbY="-1.3500099999999975mm"
            width="0.2800096mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.2499360000000479mm"
            pcbY="-1.3500099999999975mm"
            width="0.2800096mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.2499360000000479mm"
            pcbY="-1.3500099999999975mm"
            width="0.2800096mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.7500620000000708mm"
            pcbY="-1.3500099999999975mm"
            width="0.2800096mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.0763250000001108, y: -1.576044599999932 },
              { x: 1.0763250000001108, y: 1.5763239999999996 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.0761472000000367, y: 1.5763239999999996 },
              { x: -1.0761472000000367, y: -1.576044599999932 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  )
}
