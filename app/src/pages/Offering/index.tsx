import * as React from "react"
import moment from "moment"
import { Menu, Row, Col, Table, Space, Dropdown, Typography } from "antd"

import { DownOutlined } from "@ant-design/icons"
import { SelectedFilters, FilterColumn, IFilterValues } from "~/component/Offering"
import { searchOffering } from "~/ApiServices/Service/OfferingService"
import { RouteComponentProps, Link } from "react-router-dom"
import OfferingEditLink from "~/component/Offering/CreateEdit/OfferingEditLink"
import styles from "~/pages/Offering/Offering.module.scss"
import EventBus from "~/utils/EventBus"
import { REFRESH_OFFERING_PAGE } from "~/utils/EventList"

const { useState, useEffect } = React
const { Title } = Typography

const INITIAL_FILTER_DATA: IFilterValues = {
  OfferingCode: "",
  OfferingName: "",
  ToCreationDate: "",
  FromCreationDate: "",
  ToTerminationDate: "",
  FromTerminationDate: ""
}

function generateMenu(record: any) {
  return (
    <Menu>
      <Menu.Item key="0">
        <Link to={`/offering/${record.OfferingID}/financial`}>Offering Financial</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to={"/"}>Requisite Management</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={`/offering/${record.OfferingID}/catalog`}>Catalogs</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={"/"}>Offering Tag</Link>
      </Menu.Item>
      {record.HasApprovalProcess && (
        <Menu.Item key="4">
          <Link to={`/offering/${record.OfferingID}/approval`}>Offering Approval</Link>
        </Menu.Item>
      )}
      <Menu.Item key="5">
        <Link to={"/"}>Qualified Instructors</Link>
      </Menu.Item>
    </Menu>
  )
}

function expandableRowRender(data: any) {
  return (
    <div style={{ border: "1px solid", padding: "5px" }}>
      <Row>
        <Col span="8" className={styles.fontWeightBold}>
          Description:
        </Col>
        <Col span="16">{data.OfferingDescription}</Col>
      </Row>
    </div>
  )
}

function OfferingPage(props: RouteComponentProps) {
  const [filterData, updateFilterData] = useState<IFilterValues>(INITIAL_FILTER_DATA)
  const [showFilter, setFilterVisiblity] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [offeringItems, setOfferingItems] = useState<Array<any>>([])

  const [filterCount, setFilterCount] = useState<number>(0)

  const columns = [
    {
      title: "Offering Code",
      dataIndex: "OfferingCode",
      key: "OfferingCode",
      render: (text: any, record: any) => <Link to={`/offering/${record.OfferingID}`}>{text}</Link>,
      sorter: (a: any, b: any) => a.OfferingCode.length - b.OfferingCode.length
    },
    {
      title: "Offering Name",
      dataIndex: "OfferingName",
      key: "OfferingName",
      sorter: (a: any, b: any) => a.OfferingName.length - b.OfferingName.length
    },
    {
      title: "Creation Date",
      dataIndex: "CreationDate",
      key: "CreationDate",
      render: (text: any) => (text !== null ? moment(text).format("YYYY-MM-DD") : "")
    },
    {
      title: "Termination Date",
      dataIndex: "TerminationDate",
      key: "TerminationDate",
      render: (text: any) => (text !== null ? moment(text).format("YYYY-MM-DD") : "")
    },
    {
      title: "Status",
      dataIndex: "StatusCode",
      key: "StatusCode",
      sorter: (a: any, b: any) => a.StatusCode.length - b.StatusCode.length
    },
    {
      title: "Department",
      dataIndex: "OrganizationName",
      key: "OrganizationName"
    },
    {
      title: "Offering Type",
      dataIndex: "OfferingTypeName",
      key: "OfferingTypeName"
    },
    {
      title: "Def Section",
      dataIndex: "SectionTypeName",
      key: "SectionTypeName"
    },
    {
      title: "Action",
      key: "action",
      render: (record: any) => (
        <Space size="middle">
          <Dropdown overlay={generateMenu(record)} trigger={["click"]}>
            <a href="/" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              Others <DownOutlined />
            </a>
          </Dropdown>
        </Space>
      )
    }
  ]

  useEffect(() => {
    const loadOfferings = async function () {
      setLoading(true)

      const params = {
        OfferingCode: filterData.OfferingCode === "" ? "*" : filterData.OfferingCode,
        OfferingName: filterData.OfferingName === "" ? "*" : filterData.OfferingName
      }

      const result = await searchOffering(params)

      if (result && result.success) {
        setOfferingItems(result.data)
      }
      setLoading(false)
    }
    EventBus.subscribe(REFRESH_OFFERING_PAGE, loadOfferings)
    EventBus.publish(REFRESH_OFFERING_PAGE)
    return () => {
      EventBus.unsubscribe(REFRESH_OFFERING_PAGE)
    }
  }, [filterData])

  const toggleFilter = () => {
    setFilterVisiblity(!showFilter)
  }

  return (
    <div className="site-layout-content">
      <Row>
        <Title level={3}>Manage Offerings</Title>
      </Row>
      <SelectedFilters filterCount={filterCount} filterColumnVisible={showFilter} toggleFilter={toggleFilter} />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={styles.paddingTop10px}>
        <FilterColumn
          visible={showFilter}
          toggleVisiibility={toggleFilter}
          data={filterData}
          onApplyChanges={(newFilterValues, appliedFilterCount) => {
            updateFilterData({ ...filterData, ...newFilterValues })
            setFilterCount(appliedFilterCount)
          }}
        />
        <Col
          className={`gutter-row ${styles.offeringDetails}`}
          xs={24}
          sm={24}
          md={{ span: showFilter ? 18 : 24, offset: showFilter ? 1 : 0 }}
        >
          <Table
            columns={columns}
            dataSource={offeringItems}
            loading={loading}
            bordered
            expandedRowRender={expandableRowRender}
            rowKey="OfferingID"
            pagination={{ position: ["topLeft"] }}
            scroll={{ x: "fit-content" }}
          />
        </Col>
      </Row>
    </div>
  )
}
export default OfferingPage
