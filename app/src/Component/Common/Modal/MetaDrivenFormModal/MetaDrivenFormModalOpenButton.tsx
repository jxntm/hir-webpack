import { IApiResponse } from "@packages/api/lib/utils/Interfaces"
import { Button } from "antd"
import { BaseButtonProps } from "antd/lib/button/button"
import React, { useState } from "react"
import { IField } from "~/Component/Common/Form/common"
import { MetaDrivenFormModal } from "~/Component/Common/Modal/MetaDrivenFormModal/MetaDrivenFormModal"

interface IMetaDrivenFormModalOpenButton {
  buttonLabel?: string
  buttonProps?: BaseButtonProps
  formTitle: string
  formMeta: IField[]
  formSubmitApi: (Params: { [key: string]: any }) => Promise<IApiResponse>
  initialFormValue?: { [key: string]: any }
  defaultFormValue?: { [key: string]: any }
  refreshEventName?: string
}
export const MetaDrivenFormModalOpenButton = (props: IMetaDrivenFormModalOpenButton) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Button type="primary" {...props.buttonProps} onClick={() => setShowModal(true)} children={props.buttonLabel} />
      {showModal && (
        <MetaDrivenFormModal
          title={props.formTitle}
          meta={props.formMeta}
          formSubmitApi={props.formSubmitApi}
          initialFormValue={props.initialFormValue}
          defaultFormValue={props.defaultFormValue}
          refreshEventAfterFormSubmission={props.refreshEventName}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  )
}
