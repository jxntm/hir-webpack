import React from "react"
import { Link } from "react-router-dom"
import { Button, Dropdown, Menu } from "antd"
import { BOOLEAN, IField, NUMBER, TEXT } from "~/Component/Common/Form/common"
import { renderBoolean, TableColumnType } from "~/Component/Common/ResponsiveTable"
import { RemoveRefButton, UpdateRefButton } from "~/TableSearchMeta/ReferenceData/ReferenceButtons"

export const FormMeta: IField[] = [
  {
    label: "Name",
    fieldName: "Name",
    inputType: TEXT
  },
  {
    label: "Description",
    fieldName: "Description",
    inputType: TEXT
  },
  {
    label: "Is Active",
    fieldName: "IsActive",
    inputType: BOOLEAN
  },
  {
    label: "SortPosition",
    fieldName: "SortPosition",
    inputType: NUMBER
  }
]

export const columns: TableColumnType = [
  {
    title: "ID",
    dataIndex: "ID"
  },
  {
    title: "Name",
    dataIndex: "Name"
  },
  { title: "Description", dataIndex: "Description" },
  { title: "Active", dataIndex: "IsActive", render: renderBoolean },
  { title: "Sort Position", dataIndex: "SortPosition" },
  {
    title: "Actions",
    render: (text, record) => (
      <Dropdown.Button
        overlay={
          <Menu>
            <Menu.Item>
              <UpdateRefButton
                formMeta={FormMeta}
                LookUpName={"AccountType"}
                reference={record}
                refreshEventName={"REFRESH_AccountType"}
              />
            </Menu.Item>
            <Menu.Item>
              <RemoveRefButton ID={record.ID} LookUpName={"AccountType"} refreshEventName={"REFRESH_AccountType"} />
            </Menu.Item>
            <Menu.Item>
              <Button>Setup Email</Button>
            </Menu.Item>
            <Menu.Item>
              <Link className="Button" to={`/reference-data/AccountType/${record.ID}/tags`}>
                Add Tags
              </Link>
            </Menu.Item>
          </Menu>
        }
        type="primary"
      >
        Select
      </Dropdown.Button>
    )
  }
]
