import React from "react"
import { findFacultyComments } from "~/ApiServices/Service/CommentService"
import { renderDate, TableColumnType } from "~/Component/Common/ResponsiveTable"
import EnrollmentCommentRemoveLink from "~/Component/Comment/CommentRemoveLink"
import { ITableConfigProp } from "~/FormMeta/ITableConfigProp"

export const getFacultyCommentTableColumns = (isModal = false): ITableConfigProp => {
  const columns: TableColumnType = [
    {
      title: "Date/Time",
      dataIndex: "CreationDate",
      render: renderDate
    },
    {
      title: "Category",
      dataIndex: "CategoryName"
    },
    {
      title: "Comment",
      dataIndex: "CommentText"
    },
    {
      title: "Entered By",
      dataIndex: "UserName"
    },
    {
      title: "Action",
      key: "action",
      render: (record: any) => <EnrollmentCommentRemoveLink EnrollmentCommentID={record.EnrollmentCommentID} />
    }
  ]

  return { columns, searchFunc: findFacultyComments }
}
