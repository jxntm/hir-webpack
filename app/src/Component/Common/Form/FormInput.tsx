import React from "react"
import { SearchFieldWrapper, IGeneratedField } from "~/Component/Common/Form/common"
import { Input } from "antd"

export function FormInput(props: IGeneratedField) {
  return (
    <SearchFieldWrapper {...props}>
      <Input aria-label={props.ariaLabel} type="text" disabled={props.disabled} />
    </SearchFieldWrapper>
  )
}
