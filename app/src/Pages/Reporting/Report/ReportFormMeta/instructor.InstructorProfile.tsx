import { CUSTOM_FIELD, IField } from "~/Component/Common/Form/common"
import { InstructorLookupButton } from "~/Component/Common/Form/FormLookupFields/InstructorLookup"
import { IReportMeta } from "~/Pages/Reporting/Report/ReportMetaInterface"

const meta: IField[] = [
  {
    label: "Faculty",
    rules: [{ required: true, message: "Faculty is Required" }],
    fieldName: "FacultyID",
    inputType: CUSTOM_FIELD,
    customFilterComponent: InstructorLookupButton,
    extraProps: {
      isArray: true
    }
  }
]

const reportMeta: IReportMeta = {
  meta
}

export default reportMeta
