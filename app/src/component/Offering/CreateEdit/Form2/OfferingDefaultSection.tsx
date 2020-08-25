import React, { useState, useEffect } from "react"
import { Form, Divider, Select } from "antd"
import { IOfferingFieldNames } from "~/component/Offering/Interfaces"
import { FormInstance } from "antd/lib/form"
import { getSectionTypes } from "~/ApiServices/Service/RefLookupService"

interface IOfferingDefaultSection {
  fieldNames: IOfferingFieldNames
  formInstance: FormInstance
  initialFormValue: { [key: string]: any }
}

const layout = {
  labelCol: { span: 6 }
}

export default function OfferingDefaultSection(props: IOfferingDefaultSection) {
  const [sectionTypes, setSectionTypes] = useState<Array<any>>([])
  useEffect(() => {
    ;(async () => {
      const response = await getSectionTypes()
      if (response && response.success) {
        setSectionTypes(response.data)
      }
    })()
  }, [])
  return (
    // <Form hideRequiredMark form={props.formInstance} initialValues={props.initialFormValue}>
    <>
      <Divider orientation="left">Default Section</Divider>
      <Form.Item label="Default section type" name={props.fieldNames.DefaultSectionTypeID} {...layout}>
        <Select placeholder="Please select a default section type of this offering">
          {sectionTypes.map((x) => {
            return (
              <Select.Option key={x.SectionTypeID} value={x.SectionTypeID}>
                {x.SectionTypeName}
              </Select.Option>
            )
          })}
        </Select>
      </Form.Item>
    </>
    // {/* </Form> */}
  )
}
