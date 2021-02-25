import {
  getEthnicityTypes,
  getGenderTypes,
  getInstitutionStatusTypes,
  getInstructorTypes,
  getOrganizations
} from "~/ApiServices/Service/RefLookupService"
import { CUSTOM_FIELD, DATE_PICKER, DROPDOWN, IField, NUMBER, TEXT } from "~/Component/Common/Form/common"
import { OfferingLookupButton } from "~/Component/Common/Form/FormLookupFields/OfferingLookup"
import { SearchRegion } from "~/Component/Common/Form/CustomFormFields/SearchRegion"

export const InstructorSearchMeta: IField[] = [
  {
    label: "Last Name",
    inputType: TEXT,
    fieldName: "LastName"
  },
  {
    label: "First Name",
    inputType: TEXT,
    fieldName: "FirstName"
  },
  {
    label: "Email",
    inputType: TEXT,
    fieldName: "EmailAddress"
  },
  {
    label: "Telephone",
    inputType: TEXT,
    fieldName: "TelephoneNumber"
  },

  {
    label: "Maiden Name",
    inputType: TEXT,
    fieldName: "MaidenName"
  },
  {
    label: "Other Name",
    inputType: TEXT,
    fieldName: "OtherName"
  },
  {
    label: "Gender",
    inputType: DROPDOWN,
    fieldName: "GenderTypeID",
    refLookupService: getGenderTypes,
    displayKey: "Name",
    valueKey: "ID"
  },
  {
    label: "Ethnicity",
    inputType: DROPDOWN,
    fieldName: "EthnicityTypeID",
    refLookupService: getEthnicityTypes,
    displayKey: "Name",
    valueKey: "ID"
  },
  {
    label: "SSN",
    inputType: TEXT,
    fieldName: "SSN"
  },
  {
    label: "ERP",
    inputType: NUMBER,
    fieldName: "ERPCode"
  },
  {
    label: "Birthday",
    inputType: DATE_PICKER,
    fieldName: "Birthday"
  },
  {
    label: "Is Deceased",
    inputType: DROPDOWN,
    fieldName: "IsDeceased",
    options: [
      { label: "Yes", value: "true" },
      { label: "No", value: "false" }
    ]
  },
  {
    label: "Department",
    inputType: DROPDOWN,
    fieldName: "OrganizationID",
    refLookupService: getOrganizations,
    displayKey: "Name",
    valueKey: "OrganizationID"
  },
  {
    label: "Instructor Type",
    inputType: DROPDOWN,
    fieldName: "InstructorTypeID",
    refLookupService: getInstructorTypes,
    displayKey: "Name",
    valueKey: "ID"
  },
  {
    label: "Able To Teach",
    inputType: DROPDOWN,
    options: [
      { label: "Yes", value: "true" },
      { label: "No", value: "false" }
    ],
    fieldName: "IsAbleToTeach"
  },
  {
    label: "Is Active",
    inputType: DROPDOWN,
    options: [
      { label: "Yes", value: "true" },
      { label: "No", value: "false" }
    ],
    fieldName: "IsActive"
  },
  {
    label: "Qualified to Teach Offering",
    fieldName: "CanTeachOfferingID",
    inputType: CUSTOM_FIELD,
    customFilterComponent: OfferingLookupButton,
    displayKey: "OfferingCode",
    valueKey: "OfferingID"
  },
  {
    label: "Taught Offering",
    fieldName: "TaughtOfferingID",
    inputType: CUSTOM_FIELD,
    customFilterComponent: OfferingLookupButton,
    displayKey: "OfferingCode",
    valueKey: "OfferingID"
  },
  {
    label: "Last Taught Date",
    inputType: DATE_PICKER,
    fieldName: "LastTaughtDate"
  },
  {
    label: "Status",
    inputType: DROPDOWN,
    fieldName: "InstitutionStatusCodeID",
    refLookupService: getInstitutionStatusTypes,
    displayKey: "Description",
    valueKey: "ID"
  },
  {
    label: "State/Province",
    fieldName: "RegionCodeID",
    inputType: CUSTOM_FIELD,
    customFilterComponent: SearchRegion
  },
  {
    label: "SSN",
    inputType: TEXT,
    fieldName: "GovID"
  }
]
