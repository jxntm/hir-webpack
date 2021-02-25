import React from "react"
import { RouteComponentProps } from "react-router-dom"
import { SearchPage } from "~/Component/Common/Page/SearchPage"
import { getPaymentTableColumns } from "~/TableSearchMeta/Payment/PaymentTableColumns"
import { PaymentSearchMeta } from "~/TableSearchMeta/Payment/PaymentSearchMeta"

export default function Payments(props: RouteComponentProps<{ sectionID: string }>) {
  const SectionID = Number(props.match.params.sectionID)
  return (
    <SearchPage
      title="Manage Payments"
      meta={PaymentSearchMeta}
      hideSearchField={true}
      defaultFormValue={{ SectionID }}
      tableProps={getPaymentTableColumns(false)}
    ></SearchPage>
  )
}
