import HRUserService, { config } from "@packages/api/lib/proxy/Service/HRUserService"
import { IApiResponse } from "@packages/api/lib/utils/Interfaces"

export function getAllUsers(Params: { [key: string]: any }, Headers?: { [key: string]: any }): Promise<IApiResponse> {
  return HRUserService[config.Actions.getAllUsers](Params, Headers)
}

export function getLoggedInUser(
  Params: { [key: string]: any },
  Headers?: { [key: string]: any }
): Promise<IApiResponse> {
  return HRUserService[config.Actions.getLoggedInUser](Params, Headers)
}

export function getUsersByID(Params: { [key: string]: any }, Headers?: { [key: string]: any }): Promise<IApiResponse> {
  return HRUserService[config.Actions.getUserByUserID](Params, Headers)
}

export function getUsersByRole(
  Params: { [key: string]: any },
  Headers?: { [key: string]: any }
): Promise<IApiResponse> {
  return HRUserService[config.Actions.getUsersByRole](Params, Headers)
}

export function getUserByUserLogin(
  Params: { [key: string]: any },
  Headers?: { [key: string]: any }
): Promise<IApiResponse> {
  return HRUserService[config.Actions.getUserByUserLogin](Params, Headers)
}

export function loadUserPermission(): Promise<IApiResponse> {
  return Promise.resolve({
    code: 200,
    data: {
      disabilities: true,
      make_payment: true,
      issue_credit: true,
      registration_in_course: true,
      create_offering: true,
      creation_section: true,
      update_offering: false
    },
    error: false,
    success: true
  })
}
