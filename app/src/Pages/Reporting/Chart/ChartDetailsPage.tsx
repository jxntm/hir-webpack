import { IApiResponse } from "@packages/api/lib/utils/Interfaces"
import React, { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router-dom"
import { IField } from "~/Component/Common/Form/common"
import StandardChartPage from "~/Component/Common/Page/ChartPage/StandardChartPage"
import { IChartConfig } from "~/Pages/Reporting/Chart/ChartMeta/IChartConfig"

export default function ChartDetailsPage(props: RouteComponentProps<{ chartName: string }>) {
  const chartName = props.match.params.chartName
  const [meta, setMeta] = useState<IField[]>([])
  const [searchFunc, setSearchFunc] = useState<
    (Params: { [key: string]: any }, from?: number, to?: number) => Promise<IApiResponse>
  >()
  const [chartConfig, setChartConfig] = useState<IChartConfig>()
  useEffect(() => {
    try {
      import(`~/Pages/Reporting/Chart/ChartMeta/${chartName}.ts`).then((x) => {
        setMeta(x.meta)
        setSearchFunc(x.searchFunc)
        setChartConfig(x.config)
      })
    } catch (error) {}
  }, [chartName])

  let toRender = <p>Chart is Not Implemented</p>
  if (searchFunc && meta && chartConfig) {
    toRender = (
      <StandardChartPage
        searchFunc={searchFunc}
        meta={meta}
        metaName={chartName}
        config={chartConfig}
        initialFormValue={{}}
      />
    )
  }
  return toRender
}
