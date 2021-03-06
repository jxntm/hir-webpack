import { CardContainer } from "~/Component/Common/Page/DetailsPage/DetailsPageInterfaces"
import { IDetailsMeta } from "~/Component/Common/Page/DetailsPage2/Common"
import { IDetailsSummary } from "~/Component/Common/Page/DetailsPage2/DetailsSummaryTab"
import { IDetailsTableTabProp } from "~/Component/Common/Page/DetailsPage2/DetailsTableTab"
import { renderDate } from "~/Component/Common/ResponsiveTable"
import { getTagsTabPageDetailsMeta } from "~/TableSearchMeta/Tags/TagsTabPageDetailsMeta"
import { getSeatgroupTableColumns } from "~/TableSearchMeta/Seatgroup/SeatgroupTableColumns"
import { getProgramCatalogTableColumns } from "~/TableSearchMeta/Program/ProgramCatalogTableColumns"
import { getProgramApplicationTableColumns } from "~/TableSearchMeta/ProgramApplication/ProgramApplicationTableColumns"
import { getProgramEnrollmentTableColumns } from "~/TableSearchMeta/ProgramEnrollment/ProgramEnrollmentTableColumns"
import {
  REFRESH_PROGRAM_SEATGROUP_PAGE,
  REFRESH_PROGRAM_CATALOG_PAGE,
  REFRESH_PROGRAM_APPLICATION_PAGE,
  REFRESH_PROGRAM_ENROLLMENT_PAGE
} from "~/utils/EventBus"

export const getProgramDetailsMeta = (program: { [key: string]: any }): IDetailsMeta => {
  const info: CardContainer = {
    contents: [
      { label: "Name", value: program.Name },
      { label: "Description", value: program.Description },
      { label: "Status", value: program.ProgramStatusName },
      { label: "Start Date", value: program.ProgramStartDate, render: renderDate },
      { label: "End Date", value: program.ProgramEndDate, render: renderDate },
      { label: "Inquiry Recipient", value: program.SubmitInquiryToUserID },
      { label: "Certificate/License", value: program.CertificateName },
      { label: "No Specific Timeframe", value: "" },
      { label: "Number of Months from the first Offering taken", value: program.CompletionMonth }
    ]
  }

  const application: CardContainer = {
    title: "Application",
    contents: [
      { label: "Application Required", value: "" },
      { label: "Start Date", value: program.ApplicationStartDate, render: renderDate },
      { label: "End Date", value: program.ApplicationEndDate, render: renderDate }
    ]
  }

  const enrollment: CardContainer = {
    title: "Enrollment",
    contents: [
      { label: "Start Date", value: program.EnrollmentStartDate, render: renderDate },
      { label: "End Date", value: program.EnrollmentEndDate, render: renderDate },
      { label: "Seat Capacity", value: program.SeatCapacity }
    ]
  }

  const catalogMeta: IDetailsTableTabProp = {
    tableProps: {
      ...getProgramCatalogTableColumns(program.ProgramID),
      searchParams: { ProgramID: program.ProgramID },
      refreshEventName: REFRESH_PROGRAM_CATALOG_PAGE
    }
  }

  const applicationMeta: IDetailsTableTabProp = {
    tableProps: {
      ...getProgramApplicationTableColumns(),
      searchParams: { programID: program.ProgramID },
      refreshEventName: REFRESH_PROGRAM_APPLICATION_PAGE
    }
  }

  const enrollmentMeta: IDetailsTableTabProp = {
    tableProps: {
      ...getProgramEnrollmentTableColumns(),
      searchParams: { programID: program.ProgramID },
      refreshEventName: REFRESH_PROGRAM_ENROLLMENT_PAGE
    }
  }

  const seatgroupMeta: IDetailsTableTabProp = {
    tableProps: {
      ...getSeatgroupTableColumns(),
      searchParams: { ProgramID: program.ProgramID },
      refreshEventName: REFRESH_PROGRAM_SEATGROUP_PAGE
    }
  }

  const summaryMeta: IDetailsSummary = {
    summary: [info, application, enrollment]
  }

  return {
    pageTitle: `Program Code - ${program.ProgramCode}`,
    tabs: [
      {
        tabTitle: "Summary",
        tabType: "summary",
        tabMeta: summaryMeta
      },
      {
        tabTitle: "Catalogs",
        tabType: "table",
        tabMeta: catalogMeta
      },
      {
        tabTitle: "Seat Groups",
        tabType: "table",
        tabMeta: seatgroupMeta
      },
      {
        tabTitle: "Applications",
        tabType: "table",
        tabMeta: applicationMeta
      },
      {
        tabTitle: "Enrollments",
        tabType: "table",
        tabMeta: enrollmentMeta
      },
      {
        tabTitle: "Tags",
        tabType: "summary",
        tabMeta: [],
        multipleTabMetas: getTagsTabPageDetailsMeta({}, "Program", program.ProgramID).tabs
      }
    ]
  }
}
