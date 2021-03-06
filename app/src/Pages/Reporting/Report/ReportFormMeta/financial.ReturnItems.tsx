import moment from "moment"
import { DATE_PICKERS, DROPDOWN, IField } from "~/Component/Common/Form/common"
import { IReportMeta } from "~/Pages/Reporting/Report/ReportMetaInterface"
import { DATE_FORMAT } from "~/utils/Constants"

const meta: IField[] = [
  {
    label: "Order Date",
    rules: [{ required: true, message: "Date field is Required" }],

    inputType: DATE_PICKERS,
    fieldName: "OrderDateFrom",
    fieldName2: "OrderDateTo"
  },
  {
    label: "Sort By",
    inputType: DROPDOWN,
    fieldName: "SortByColumn",
    options: [
      { label: "Order Number", value: "SortOrderID" },
      { label: "Last Name", value: "SortLastName" },
      { label: "Order Date", value: "SortOrderDate" }
    ]
  },
  {
    label: "Sort Order",
    inputType: DROPDOWN,
    fieldName: "SortOrder",
    options: [
      { label: "Ascending", value: "Asc" },
      { label: "Descending", value: "Desc" }
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
    SortByColumn: "SortOrderID",
    SortOrder: "Asc",
    OrderDateFrom: "",
    OrderDateTo: moment().format(DATE_FORMAT)
  }
}

export default reportMeta
