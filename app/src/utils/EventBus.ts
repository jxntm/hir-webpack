export const REFRESH_OFFERING_PAGE = "REFRESH_OFFERING_PAGE"
export const REFRESH_OFFERING_DETAILS_PAGE = "REFRESH_OFFERING_DETAILS_PAGE"
export const REFRESH_OFFERING_FINANCIAL_PAGE = "REFRESH_OFFERING_FINANCIAL_PAGE"
export const REFRESH_OFFERING_APPROVAL_PAGE = "REFRESH_OFFERING_APPROVAL_PAGE"
export const REFRESH_OFFERING_TAG_PAGE = "REFRESH_OFFERING_TAG_PAGE"
export const REFRESH_OFFERING_REQUISITE_GROUP_PAGE = "REFRESH_OFFERING_REQUISITE_GROUP_PAGE"
export const REFRESH_OFFERING_CATALOG_PAGE = "REFRESH_OFFERING_CATALOG_PAGE"
export const REFRESH_OFFERING_QUALIFIED_INSTRUCTOR_PAGE = "REFRESH_OFFERING_QUALIFIED_INSTRUCTOR_PAGE"

export const REFRESH_FILTER_DATA_OF_PAGE = "REFRESH_FILTER_DATA_OF_PAGE"

export const REFRESH_SECTION_PAGE = "REFRESH_SECTION_PAGE"
export const REFRESH_SECTION_REQUEST_PAGE = "REFRESH_SECTION_REQUEST_PAGE"
export const REFRESH_SECTION_REGISTRATION_PAGE = "REFRESH_SECTION_REGISTRATION_PAGE"
export const REFRESH_SECTION_SEATGROUP_PAGE = "REFRESH_SECTION_SEATGROUP_PAGE"
export const REFRESH_SECTION_SCHEDULE_PAGE = "REFRESH_SECTION_SCHEDULE_PAGE"
export const REFRESH_SECTION_BUDGET_PAGE = "REFRESH_SECTION_BUDGET_PAGE"
export const REFRESH_SECTION_DISCOUNT_PAGE = "REFRESH_SECTION_DISCOUNT_PAGE"
export const REFRESH_SECTION_NOTIFICATION_PAGE = "REFRESH_SECTION_NOTIFICATION_PAGE"
export const REFRESH_SECTION_TAG_PAGE = "REFRESH_SECTION_TAG_PAGE"
export const REFRESH_SECTION_PRODUCT_PAGE = "REFRESH_SECTION_PRODUCT_PAGE"
export const REFRESH_SECTION_WAITLIST_ENTRIES_PAGE = "REFRESH_SECTION_WAITLIST_ENTRIES_PAGE"
export const REFRESH_SECTION_NO_SHOW_PAGE = "REFRESH_SECTION_NO_SHOW_PAGE"
export const REFRESH_SECTION_COMMENT_PAGE = "REFRESH_SECTION_COMMENT_PAGE"
export const REFRESH_SECTION_GENERAL_COMMENT_PAGE = "REFRESH_SECTION_GENERAL_COMMENT_PAGE"
export const REFRESH_SECTION_INSTRUCTOR_COMMENT_PAGE = "REFRESH_SECTION_INSTRUCTOR_COMMENT_PAGE"
export const REFRESH_SECTION_ORDER_PAGE = "REFRESH_SECTION_ORDER_PAGE"
export const REFRESH_SECTION_CATALOG_PAGE = "REFRESH_SECTION_CATALOG_PAGE"

export const REFRESH_QUESTION_PAGE = "REFRESH_QUESTION_PAGE"

export const REFRESH_STUDENT_COMMENT_PAGE = "REFRESH_STUDENT_COMMENT_PAGE"
export const REFRESH_INSTRUCTOR_COMMENT_PAGE = "REFRESH_INSTRUCTOR_COMMENT_PAGE"

export const REFRESH_REGISTRATION_DETAIL_PAGE = "REFRESH_REGISTRATION_DETAIL_PAGE"
export const REFRESH_REGISTRATION_CERTIFICATE_PAGE = "REFRESH_REGISTRATION_CERTIFICATE_PAGE"
export const REFRESH_REGISTRATION_ENROLLMENT_HISTORY_PAGE = "REFRESH_REGISTRATION_ENROLLMENT_HISTORY_PAGE"
export const REFRESH_REGISTRATION_ACADEMIC_ACTIVITY_PAGE = "REFRESH_REGISTRATION_ACADEMIC_ACTIVITY_PAGE"
export const REFRESH_REGISTRATION_ENROLLMENT_ACTIVITY_PAGE = "REFRESH_REGISTRATION_ENROLLMENT_ACTIVITY_PAGE"
export const REFRESH_REGISTRATION_COMMENT_PAGE = "REFRESH_REGISTRATION_COMMENT_PAGE"

export const REFRESH_ORDER_ACTIVITY_PAGE = "REFRESH_ORDER_ACTIVITY_PAGE"

export const EVENT_PERSON_SELECTED = "EVENT_PERSON_SELECTED"
export const EVENT_REQUEST_RESOLUTION = "EVENT_REQUEST_RESOLUTION"
export const EVENT_REQUEST_QUESTION_ANSWER = "EVENT_REQUEST_QUESTION_ANSWER"
export const EVENT_PERSON_SELECTED_FOR_WAITLIST_ENTRY_CREATION = "EVENT_PERSON_SELECTED_FOR_WAITLIST_ENTRY_CREATION"

export const EVENT_REQUEST_RETRY = "EVENT_REQEUST_RETRY"
export const EVENT_REQUEST_MAKE_PAYMENT = "EVENT_REQEUST_MAKE_PAYMENT"
export const REFRESH_PAGE = "REFRESH_PAGE"
export const REFRESH_MODAl = "REFRESH_MODAl"

type fn = (param?: any) => void
class PageEventBus {
  eventListeners: { [key: string]: fn } = {}

  subscribe(listenerName: string, fn: fn) {
    if (!this.eventListeners[listenerName]) {
      this.eventListeners[listenerName] = fn
    }
  }

  unsubscribe(listenerName: string) {
    if (this.eventListeners[listenerName]) {
      delete this.eventListeners[listenerName]
    }
  }

  publish(listenerName: string, params?: any) {
    console.log(this.eventListeners)
    if (this.eventListeners[listenerName]) {
      this.eventListeners[listenerName](params)
    }
  }

  publishSimilarEvents(listenerNamePattern: RegExp) {
    const keys = Object.keys(this.eventListeners)
    keys.forEach((key) => {
      if (listenerNamePattern.test(key) && typeof this.eventListeners[key] === "function") {
        this.eventListeners[key]()
      }
    })
  }
}

export const eventBus = new PageEventBus()
