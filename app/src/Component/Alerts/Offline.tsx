import React, { useEffect, useState } from "react"
import Modal from "~/Component/Common/Modal"
import { Card } from "antd"
import zIndexLevel from "~/utils/zIndex"

export default function Offline() {
  const [IsOffline, setIsOffline] = useState(!navigator.onLine)
  useEffect(() => {
    window.addEventListener("online", setIsOffline.bind(null, false))
    window.addEventListener("offline", setIsOffline.bind(null, true))
    return () => {
      window.removeEventListener("online", setIsOffline.bind(null, false))
      window.removeEventListener("offline", setIsOffline.bind(null, true))
    }
  }, [])
  return (
    <React.Fragment>
      <Modal
        zIndex={zIndexLevel.offlineModal}
        closable={false}
        showModal={IsOffline}
        children={
          <Card bordered={true}>
            <Card.Meta
              title="No Internet Connection"
              description="You are offline. Please check your internet connection"
            />
          </Card>
        }
      ></Modal>
    </React.Fragment>
  )
}
