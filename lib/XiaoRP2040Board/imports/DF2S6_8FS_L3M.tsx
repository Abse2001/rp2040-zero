import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
} as const

export const DF2S6_8FS_L3M = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C1972978"],
      }}
      manufacturerPartNumber="DF2S6_8FS_L3M"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.439928000000009mm"
            pcbY="0mm"
            width="0.39999919999999994mm"
            height="0.39999919999999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0.439928000000009mm"
            pcbY="0mm"
            width="0.39999919999999994mm"
            height="0.39999919999999994mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -0.4761991999999964, y: 0.37622479999993175 },
              { x: 0.4761991999999964, y: 0.37622479999993175 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.4761991999999964, y: -0.3762248000001591 },
              { x: 0.4761991999999964, y: -0.3762248000001591 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=f496352bf8fe41fd923fb571496fa76f&pn=C1972978",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
