import React from "react"
import { Link } from "react-router-dom"
import { searchOrders } from "~/ApiServices/Service/OrderService"
import { renderDate, renderDetailsLink, TableColumnType } from "~/Component/Common/ResponsiveTable"
import { ITableConfigProp } from "~/TableSearchMeta/ITableConfigProp"

export const getOrderTableColumns = (isModal = false, OfferingID?: number, SectionID?: number): ITableConfigProp => {
  const columns: TableColumnType = [
    {
      title: "",
      dataIndex: "OrderID",
      render: (text: any, record: any) =>
        isModal
          ? { text }
          : renderDetailsLink(SectionID ? `/section/${SectionID}/order/${record.OrderID}` : `/order/${record.OrderID}`)
    },
    {
      title: "Order Date",
      dataIndex: "CreateDate",
      render: renderDate
    },
    {
      title: "Order ID",
      dataIndex: "OrderID",
      render: (text: any, record: any) => {
        return isModal ? (
          { text }
        ) : SectionID ? (
          <Link to={`/section/${SectionID}/order/${record.OrderID}`}>{text}</Link>
        ) : (
          <Link to={`/order/${record.OrderID}`}>{text}</Link>
        )
      }
    },
    {
      title: "Purchaser",
      dataIndex: "BuyerName",
      render: (text: any, record: any) => {
        return isModal ? { text } : <Link to={`/person/${record?.Person?.PersonID}`}>{text}</Link>
      }
    },
    {
      title: "Account",
      dataIndex: "AccountName",
      render: (text: any, record: any) => (isModal ? text : <Link to={`/account/${record.AccountID}`}>{text}</Link>)
    },
    {
      title: "Order Amount",
      dataIndex: "TotalAmount"
    },
    {
      title: "Paid",
      dataIndex: "AmountPaid"
    },
    {
      title: "Balance",
      dataIndex: "Balance"
    }
  ]
  const responsiveColumnIndices: number[] = []
  const expandableColumnIndices: number[] = []
  return { columns, responsiveColumnIndices, expandableColumnIndices, searchFunc: searchOrders }
}
