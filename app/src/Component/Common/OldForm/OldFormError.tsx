import React, { useEffect } from "react"
import { ISimplifiedApiErrorMessage } from "@packages/api/lib/utils/HandleResponse/ProcessedApiError"
import { Typography } from "antd"
import { red } from "@ant-design/colors"

interface IFormError {
  errorMessages?: Array<ISimplifiedApiErrorMessage>
  genericInstructions?: JSX.Element
}
export function OldFormError(props: IFormError) {
  useEffect(() => {
    document.getElementById("errorMessages")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    })
  }, [props.errorMessages])
  return (
    <>
      {props.genericInstructions}
      {Array.isArray(props.errorMessages) && props.errorMessages.length > 0 && (
        <div
          id="errorMessages"
          role="alert"
          style={{
            backgroundColor: "#ffecec",
            color: red.primary,
            padding: "10px 30px",
            width: "100%",
            marginBottom: "15px"
          }}
        >
          <h1>Error</h1>
          <ol>
            {props.errorMessages.map((error, index) => {
              return (
                <li key={index + 1000}>
                  <Typography.Text type="danger">{error.message}</Typography.Text>
                </li>
              )
            })}
          </ol>
        </div>
      )}
    </>
  )
}
