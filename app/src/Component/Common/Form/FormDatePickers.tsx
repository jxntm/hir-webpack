import React, { useState, useEffect } from "react"
import { IGeneratedField, SearchFieldWrapper } from "~/Component/Common/Form/common"
import { DatePicker, Input, Form } from "antd"
import { DATE_FORMAT } from "~/utils/Constants"
import moment from "moment"

import { useFirstRender } from "~/Hooks/useFirstRender"

export function FormDatePickers(props: IGeneratedField) {
  const firstRender = useFirstRender()
  const [value, setValue] = useState<any>(undefined)
  useEffect(() => {
    if (props.defaultValue && props.defaultValue2 && props.fieldName2) {
      setValue([moment(props.defaultValue, DATE_FORMAT), moment(props.defaultValue2, DATE_FORMAT)])
      props.formInstance.setFieldsValue({ [props.fieldName]: props.defaultValue })
      props.formInstance.setFieldsValue({ [props.fieldName2]: props.defaultValue2 })
    } else if (props.defaultValue) {
      setValue([moment(props.defaultValue, DATE_FORMAT), ""])
      props.formInstance.setFieldsValue({ [props.fieldName]: props.defaultValue })
    } else if (props.defaultValue2 && props.fieldName2) {
      setValue(["", moment(props.defaultValue2, DATE_FORMAT)])
      props.formInstance.setFieldsValue({ [props.fieldName2]: props.defaultValue2 })
    }
    // eslint-disable-next-line
  }, [props.defaultValue, props.defaultValue2])
  useEffect(() => {
    !firstRender && setValue(undefined)
    // eslint-disable-next-line
  }, [props.clearTrigger])
  return (
    <>
      <Form.Item className="hidden" name={props.fieldName}>
        <Input />
      </Form.Item>
      <Form.Item className="hidden" name={props.fieldName2}>
        <Input />
      </Form.Item>
      <SearchFieldWrapper {...props} fieldName="">
        <DatePicker.RangePicker
          style={{ width: "100%" }}
          allowEmpty={[true, true]}
          aria-label={props.ariaLabel}
          disabled={props.disabled}
          allowClear
          value={value}
          onChange={(dates: any, dateStrings: any): void => {
            console.log(dates, dateStrings)
            props.formInstance.setFieldsValue({ [props.fieldName]: dateStrings[0] })
            if (props.fieldName2) {
              props.formInstance.setFieldsValue({ [props.fieldName2]: dateStrings[1] })
            }
            setValue(dates)
          }}
          format={DATE_FORMAT}
        />
      </SearchFieldWrapper>
    </>
  )
}
