import { Button } from "antd"
import React, { useState } from "react"
import Modal from "~/Component/Common/Modal/index2"
import { CloseCircleFilled } from "@ant-design/icons"

export function HelpModal({ helpUrl }: { helpUrl?: string }) {
  const [help, setHelp] = useState(false)
  return (
    <>
      {helpUrl && (
        <>
          <Button type="link" onClick={() => setHelp(true)}>
            Help
          </Button>
          {help && (
            <Modal width="100%">
              <div style={{ background: "white" }}>
                <Button
                  style={{ position: "absolute", right: 0 }}
                  onClick={() => setHelp(false)}
                  type="primary"
                  danger
                  icon={<CloseCircleFilled />}
                />
                <iframe title="helpViewer" style={{ width: "100%", height: "100vh" }} src={helpUrl} />
              </div>
            </Modal>
          )}
        </>
      )}
    </>
  )
}
