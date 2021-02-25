import * as React from "react"
import { LookupOpenButton } from "~/Component/Common/Modal/LookupModal/LookupOpenButton"
import { IField, IGeneratedField } from "~/Component/Common/Form/common"
import { getProgramTableColumns } from "~/TableSearchMeta/Program/ProgramTableColumns"
import { ProgramSearchMeta } from "~/TableSearchMeta/Program/ProgramSearchMeta"
import { getEntityById } from "~/ApiServices/Service/EntityService"

interface ISearchProgramLookup extends IGeneratedField {
  valueField?: string
}
export function ProgramLookup(props: ISearchProgramLookup) {
  return (
    <LookupOpenButton
      lookupModalTitle="Select Program"
      displayField="ProgramCode"
      meta={ProgramSearchMeta as IField[]}
      {...props}
      {...getProgramTableColumns(true)}
      valueField={props.valueField || "ProgramID"}
      {...(props.defaultValue && {
        entityLookupFunc: () =>
          getEntityById("Program", props.defaultValue).then((x) => {
            return x.data
          })
      })}
    />
  )
}
