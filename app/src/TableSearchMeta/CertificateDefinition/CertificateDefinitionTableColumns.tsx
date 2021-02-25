import { searchCertificate } from "~/ApiServices/BizApi/certificate/certificateIF"
import { renderBoolean, renderDetailsLink, TableColumnType } from "~/Component/Common/ResponsiveTable"
import { ITableConfigProp } from "~/TableSearchMeta/ITableConfigProp"

export const getCertificateDefinitionTableColumns = (): ITableConfigProp => {
  const columns: TableColumnType = [
    {
      render: (text: any, record: any) => renderDetailsLink(`/data/certificate/${record.CertificateID}`)
    },
    {
      title: "Certificate Name",
      dataIndex: "Name"
    },
    {
      title: "Certificate Category",
      dataIndex: "CertificateCategoryTypeName"
    },
    {
      title: "Certificate Type",
      dataIndex: "CertificateType"
    },
    {
      title: "Department",
      dataIndex: "OrganizationName"
    },
    {
      title: "Active",
      dataIndex: "IsActive",
      render: renderBoolean
    }
  ]
  const responsiveColumnIndices: number[] = []
  const expandableColumnIndices: number[] = []
  return {
    columns,
    responsiveColumnIndices,
    expandableColumnIndices,
    searchFunc: searchCertificate
  }
}
