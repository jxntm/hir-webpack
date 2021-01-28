import { CUSTOM_FIELD, IField } from "~/Component/Common/Form/common"
import { SearchProgramLookupButton } from "~/Component/Common/Form/SearchLookups/SearchProgramLookup"
import { IReportMeta } from "~/Pages/Reporting/Report/IReportMeta"

const meta: IField[] = [
  {
    label: "Selected Program",
    fieldName: "ProgramID",
    rules: [{ required: true, message: "Program is Required" }],
    inputType: CUSTOM_FIELD,
    customFilterComponent: SearchProgramLookupButton
  }
]

const reportMeta: IReportMeta = {
  meta
}

export default reportMeta
