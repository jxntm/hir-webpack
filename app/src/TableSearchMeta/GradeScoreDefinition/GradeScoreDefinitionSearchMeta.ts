import { DROPDOWN, IField } from "~/Component/Common/Form/common"
import { getGradeScaleType } from "~/ApiServices/Service/RefLookupService"

export const GradeScoreDefinitionSearchMeta: IField[] = [
  {
    label: "Grade Scale Type",
    inputType: DROPDOWN,
    fieldName: "GradeScaleTypeID",
    refLookupService: getGradeScaleType,
    displayKey: "Name",
    valueKey: "ID"
  }
]
