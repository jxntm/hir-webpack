import React from "react"
import { Switch } from "antd"
import { ColumnsType } from "antd/lib/table"
import ResponsiveTable from "~/Component/ResponsiveTable"

interface ITagsTableProps {
  data: Array<any>
  loading: boolean
  title: string
  select?: (tag: { [key: string]: any }, add: boolean) => Promise<any>
}

type RecordType = { [key: string]: string }
export default function TagsTable(props: ITagsTableProps) {
  const columns: ColumnsType<RecordType> = [
    {
      title: "Tag type",
      dataIndex: "TagType",
      key: "TagType"
    },
    {
      title: "Tag",
      dataIndex: "Name",
      key: "Name"
    }
  ]

  if (props.title === "Offering Tags") {
    columns.push({
      title: "Status",
      dataIndex: "isChecked",
      key: "isChecked",
      render: (text: any, record: any) => (
        <Switch
          defaultChecked={!!text}
          onClick={async (checked, e) => {
            if (props.select && record && record.ID && typeof record.ID === "number") {
              const response = await props.select(record, checked)
              if (!response.success) {
                console.log(response)
              }
            }
          }}
        />
      )
    })
  }
  function expandableRowRender(data: any) {
    return data.Description ? <div style={{ padding: "5px" }}>{data.Description}</div> : <></>
  }
  return (
    <ResponsiveTable
      title={() => props.title}
      columns={columns}
      dataSource={props.data}
      rowKey="ID"
      pagination={{ position: ["topRight"] }}
      size="small"
      loading={props.loading}
      expandedRowRender={expandableRowRender}
    />
  )
}
