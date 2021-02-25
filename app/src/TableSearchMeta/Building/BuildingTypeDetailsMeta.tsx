import { CardContainer } from "~/Component/Common/Page/DetailsPage/DetailsPageInterfaces"
import { IDetailsMeta, IDetailsTabMeta } from "~/Component/Common/Page/DetailsPage2/Common"
import { renderBoolean, renderLink } from "~/Component/Common/ResponsiveTable"
import { getRoomTableColumns } from "~/TableSearchMeta/Room/RoomTableColumns"
import { getInstructorScheduleTableColumns } from "~/TableSearchMeta/InstructorSchedule/ScheduleTableColumns"

export const getBuildingDetailsMeta = (building: { [key: string]: any }): IDetailsMeta => {
  const meta: IDetailsTabMeta[] = []
  const summary: CardContainer = {
    contents: [
      { label: "Building Number", value: building.BuildingNumber },
      {
        label: "Site",
        value: building.SiteName,
        render: (value) => renderLink(`/site/${building.SiteID}`, building.SiteName)
      },
      { label: "Number of Floor", value: building.Floors },
      { label: "Active", value: building.IsActive, render: renderBoolean }
    ]
  }

  meta.push({
    tabTitle: "Summary",
    tabType: "summary",
    tabMeta: {
      summary: [summary]
    }
  })

  meta.push({
    tabTitle: "Rooms",
    tabType: "table",
    tabMeta: {
      tableProps: {
        ...getRoomTableColumns(),
        searchParams: { BuildingID: building.buildingID },
        refreshEventName: "REFRESH_CONTACT_TAB"
      }
    }
  })

  meta.push({
    tabTitle: "Schedule",
    tabType: "table",
    tabMeta: {
      tableProps: {
        ...getInstructorScheduleTableColumns(),
        searchParams: { BuildingID: building.BuildingID },
        refreshEventName: "REFRESH_SCHEDULE_TAB"
      }
    }
  })

  return {
    pageTitle: `Building Name - ${building.Name}`,
    tabs: meta
  }
}
