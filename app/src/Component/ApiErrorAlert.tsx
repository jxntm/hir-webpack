import React from "react"
import { connect } from "react-redux"
import { AppState } from "~/Store"
import { removeGLobalApiError } from "~/Store/GlobalError"
import { Alert } from "antd"

function ApiErrorAlert(props: any) {
  return (
    <>
      {props.errorMessage && (
        <Alert
          closable
          showIcon
          message="Error"
          description={props.errorMessage}
          type="error"
          onClose={props.removeGLobalApiError}
          style={{ position: "absolute", right: 10, top: 10, width: "400px", zIndex: 1000 }}
        />
      )}
    </>
  )
}

const mapStateToProps = (state: AppState) => {
  return { errorMessage: state.globalApiError.errorMessage }
}

export default connect(mapStateToProps, { removeGLobalApiError })(ApiErrorAlert)
