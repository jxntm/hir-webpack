import { getCertificateCategoryType, getOrganizations } from "~/ApiServices/Service/RefLookupService"
import { DROPDOWN, IField, TEXT } from "~/Component/Common/Form/common"

export const CertificateDefinitionSearchMeta: IField[] = [
  {
    label: "Certificate Name",
    fieldName: "certificateName",
    inputType: TEXT
  },
  {
    label: "Department",
    fieldName: "organizationID",
    inputType: DROPDOWN,
    refLookupService: getOrganizations,
    displayKey: "Name",
    valueKey: "OrganizationID"
  },
  {
    label: "Active",
    fieldName: "isActive",
    inputType: DROPDOWN,
    options: [
      { label: "Yes", value: "true" },
      { label: "No", value: "false" }
    ]
  },
  {
    label: "Certificate Type",
    fieldName: "isProgramCertificate",
    inputType: DROPDOWN,
    options: [
      { label: "Program", value: true },
      { label: "Offering", value: false }
    ]
  },
  {
    label: "Certificate Category",
    fieldName: "certificateCategoryTypeID",
    displayKey: "Name",
    valueKey: "ID",
    inputType: DROPDOWN,
    refLookupService: getCertificateCategoryType
  }
]
