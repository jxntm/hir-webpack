import React from "react"
import { SearchPage } from "~/Component/Common/Page/SearchPage"
import { OrderCreditsSearchMeta } from "~/TableSearchMeta/OrderCredits/OrderCreditsSearchMeta"
import { getOrderCreditsTableColumns } from "~/TableSearchMeta/OrderCredits/OrderCreditsTableColumns"

export default function OrderCreditsPage() {
  return (
    <SearchPage
      title="Manage Credits"
      meta={OrderCreditsSearchMeta}
      hideSearchField={false}
      tableProps={getOrderCreditsTableColumns()}
    />
  )
}
