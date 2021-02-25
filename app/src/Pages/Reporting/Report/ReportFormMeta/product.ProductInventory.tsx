import { getDeliveryModes } from "~/ApiServices/Service/RefLookupService"
import { BOOLEAN, DROPDOWN, IField, TEXT } from "~/Component/Common/Form/common"
import { IReportMeta } from "~/Pages/Reporting/Report/IReportMeta"

const meta: IField[] = [
  {
    label: "Product Name",
    inputType: TEXT,
    fieldName: "ProductName"
  },
  {
    label: "Product Category",
    inputType: TEXT,
    fieldName: "ProductCategoryName"
  },
  {
    label: "Product Type",
    inputType: TEXT,
    fieldName: "ProductTypeName"
  },
  {
    label: "Fulfiller",
    inputType: TEXT,
    fieldName: "ProductFulfillerName"
  },
  {
    label: "Seller",
    inputType: TEXT,
    fieldName: "ProductSellerName"
  },
  {
    label: "Active",
    inputType: DROPDOWN,
    fieldName: "IsActive",
    options: [
      { label: "Active", value: "active" },
      { label: "Inactive", value: "inactive" }
    ]
  },
  {
    label: "Delivery Mode",
    inputType: DROPDOWN,
    fieldName: "ProductDeliveryMode",
    refLookupService: getDeliveryModes,
    displayKey: "Name",
    valueKey: "ID"
  },
  {
    label: "Show Product Require Reorder",
    fieldName: "OnlyShortProducts",
    inputType: BOOLEAN
  }
]

const reportMeta: IReportMeta = {
  meta,
  defaultFormValue: {
    OnlyShortProducts: true
  }
}

export default reportMeta
