import React, { useEffect, useState } from "react"
import { IProcessedApiError } from "@packages/api/lib/utils/HandleResponse/ProcessedApiError"
import { Row, Spin, Tabs, Typography } from "antd"
import { DetailsSummary } from "~/Component/Common/Page/DetailsPage2/DetailsSummaryTab"
import DetailsSearchTab from "~/Component/Common/Page/DetailsPage2/DetailsSearchTab"
import DetailsTableTab from "~/Component/Common/Page/DetailsPage2/DetailsTableTab"
import DetailsCustomTab from "~/Component/Common/Page/DetailsPage2/DetailsCustomTab"
import { eventBus, REFRESH_PAGE } from "~/utils/EventBus"
import { IDetailsPage, IDetailsTabMeta } from "~/Component/Common/Page/DetailsPage2/Common"
import { DetailsPageSubTabSwitch } from "~/Component/Common/Page/DetailsPage2/DetailsTabSwitch"

export function DetailsPage(props: IDetailsPage) {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState<string>()
  const [error, setError] = useState<IProcessedApiError>()
  const [meta, setMeta] = useState<IDetailsTabMeta[]>([])
  const loadDetails = () => {
    setLoading(true)
    setError(undefined)
    props.getDetails().then((x) => {
      setLoading(false)
      if (x.success && x.data) {
        console.log("meo meo meo", x.data, props)
        const { tabs, pageTitle } = props.getMeta(x.data, props.entityType, props.entityID)
        setMeta(tabs)
        setTitle(pageTitle)
      } else setError(x.error)
    })
  }

  useEffect(() => {
    const eventName = props.refreshEventName ? props.refreshEventName : REFRESH_PAGE

    eventBus.subscribe(eventName, loadDetails)
    eventBus.publish(eventName, loadDetails)
    return () => {
      eventBus.unsubscribe(eventName)
    }
    // eslint-disable-next-line
  }, [props.entityID])

  return (
    <>
      {loading && (
        <Row justify="center" align="middle">
          <Spin size="large" />
        </Row>
      )}
      {!loading && error && <p>Something went wrong!</p>}
      {!loading && !error && meta.length > 0 && (
        <div className="site-layout-content">
          {title && (
            <Row>
              <Typography.Title level={3}>{title}</Typography.Title>
            </Row>
          )}
          <Tabs defaultActiveKey="1" type="card" size="large" tabBarExtraContent={props.actions ? props.actions : []}>
            {meta.map((x, i) => {
              switch (x.tabType) {
                case "summary":
                  return (
                    <Tabs.TabPane tab={x.tabTitle} key={i + 1}>
                      <DetailsPageSubTabSwitch meta={x.multipleTabMetas} child={<DetailsSummary {...x.tabMeta} />} />
                    </Tabs.TabPane>
                  )
                case "searchtable":
                  return (
                    <Tabs.TabPane tab={x.tabTitle} key={i + 1}>
                      <DetailsPageSubTabSwitch meta={x.multipleTabMetas} child={<DetailsSearchTab {...x.tabMeta} />} />
                    </Tabs.TabPane>
                  )
                case "table":
                  return (
                    <Tabs.TabPane tab={x.tabTitle} key={i + 1}>
                      <DetailsPageSubTabSwitch
                        meta={x.multipleTabMetas}
                        actions={x.actions}
                        child={<DetailsTableTab {...x.tabMeta} />}
                      />
                    </Tabs.TabPane>
                  )
                case "custom":
                  return (
                    <Tabs.TabPane tab={x.tabTitle} key={i + 1}>
                      <DetailsPageSubTabSwitch meta={x.multipleTabMetas} child={<DetailsCustomTab {...x.tabMeta} />} />
                    </Tabs.TabPane>
                  )

                default:
                  return <p>Can not load</p>
              }
            })}
          </Tabs>
        </div>
      )}
    </>
  )
}
