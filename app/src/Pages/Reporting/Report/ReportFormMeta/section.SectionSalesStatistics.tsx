import { DATE_PICKERS, DROPDOWN, IField } from "~/Component/Common/Form/common"
import { IReportMeta } from "~/Pages/Reporting/Report/IReportMeta"

const meta: IField[] = [
  {
    label: "Order Date",
    fieldName: "OrderDateFrom",
    fieldName2: "OrderDateTo",
    rules: [{ required: true, message: "Date field is Required" }],

    inputType: DATE_PICKERS
  },
  {
    label: "Sort By",
    inputType: DROPDOWN,
    fieldName: "SortByColumn",
    options: [
      { label: "Section Number", value: "SortSectionNumber" },
      { label: "Organization", value: "SortOrganization" },
      { label: "Seat Sold", value: "SortQuantity" },
      { label: "Sale Amount", value: "SortAmount" },
      { label: "Section Enrollment Date", value: "SortFinalEnrollmentDate" }
    ]
  },
  {
    label: "Sort Order",
    inputType: DROPDOWN,
    fieldName: "SortOrder",
    options: [
      { label: "ascending", value: "Asc" },
      { label: "descending", value: "Desc" }
    ]
  }
]

const reportMeta: IReportMeta = {
  meta,
  mapping: {
    OrderDateFrom: "OrderDateFrom_DisplayOnly",
    OrderDateTo: "OrderDateTo_DisplayOnly"
  },
  initialFormValue: {
    SortByColumn: "SortSectionNumber",
    SortOrder: "Asc"
  }
}

export default reportMeta
