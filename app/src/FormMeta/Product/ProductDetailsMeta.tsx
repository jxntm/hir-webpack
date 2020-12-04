import { CardContainer } from "~/Component/Common/Page/DetailsPage/DetailsPageInterfaces"
import { renderBoolean, renderDate } from "~/Component/Common/ResponsiveTable"

export const getProductDetailsMeta = (person: { [key: string]: any }): CardContainer[] => {
  const personalInfo: CardContainer = {
    title: person.FormattedName,
    contents: [
      { label: "First Name", value: person.FirstName, render: undefined },
      { label: "Middle Name", value: person.MiddleName, render: undefined },
      { label: "Last Name", value: person.LastName, render: undefined },
      { label: "Maiden Name", value: person.MaidenName, render: undefined },
      { label: "OtherName", value: person.OtherName, render: undefined },
      { label: "Birthday", value: person.Birthday, render: renderDate },
      { label: "Gender", value: person.GenderTypeName, render: undefined },
      { label: "Marital Status ", value: person.MaritalStatusTypeName, render: undefined },
      { label: "Private ", value: person.IsConfidential, render: renderBoolean },
      { label: "Religion", value: person.ReligionTypeName, render: undefined },
      { label: "Deceased", value: person.IsDeceased, render: renderBoolean },
      { label: "DeathDate", value: person.DeathDate, render: renderDate },
      { label: "Citizenship Type", value: person.CitizenshipTypeName, render: undefined },
      { label: "Can Defer Payment", value: person.CanDeferPayment, render: undefined },
      { label: "SSN", value: person.GovID, render: undefined },
      { label: "ERPID", value: person.ERPID, render: undefined }
    ]
  }

  return [personalInfo]
}
