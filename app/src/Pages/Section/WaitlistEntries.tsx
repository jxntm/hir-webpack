import React, { useState } from "react"
import { Button } from "antd"
import { WaitlistEntriesSearchMeta } from "~/FormMeta/WaitlistEntries/WaitlistEntriesSearchMeta"
import { SearchPage } from "~/Component/Common/Page/SearchPage"
import { getWaitlistEntriesTableColumns } from "~/FormMeta/WaitlistEntries/WaitlistEntryTableColumns"
import { WaitlistEntryCreateEditFormModal } from "~/Component/Section/WaitlistEntries/CreateEdit/FormModal"
import { RouteComponentProps } from "react-router-dom"

export default function WaitlistEntryPage(props: RouteComponentProps<{ sectionID: string }>) {
  const SectionID = Number(props.match.params.sectionID)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [entry, setEntry] = useState<{ [key: string]: any }>()
  // eslint-disable-next-line
  const [meta, ...othermetas] = WaitlistEntriesSearchMeta
  return (
    <>
      {showCreateModal && (
        <WaitlistEntryCreateEditFormModal
          WaitListEntry={entry}
          closeModal={() => {
            setShowCreateModal(false)
            setEntry(undefined)
          }}
        />
      )}
      <SearchPage
        title="Waitlist Entries"
        defaultFilter={{ SectionID }}
        meta={othermetas}
        hideSearchField={true}
        blocks={[
          <>
            <Button
              style={{ float: "right", zIndex: 11, marginRight: "17px" }}
              type="primary"
              onClick={() => {
                setShowCreateModal(true)
              }}
            >
              + Add Waitlist Entry
            </Button>
          </>
        ]}
        tableProps={{
          ...getWaitlistEntriesTableColumns(false, (record) => {
            setShowCreateModal(true)
            setEntry(record)
          })
        }}
      ></SearchPage>
    </>
  )
}
