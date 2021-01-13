import { IFilterField } from "~/Component/Common/SearchFilters/common"
import { SearchInstructorLookupButton } from "~/Component/Common/SearchFilters/SearchLookups/SearchInstructorLookup"

const meta: IFilterField[] = [
  {
    label: "Faculty",
    fieldName: "FacultyID",
    customFilterComponent: SearchInstructorLookupButton
  }
]

export default meta