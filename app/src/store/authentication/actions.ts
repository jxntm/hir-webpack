import { Dispatch } from 'redux'
import { loginWrapper } from '~/api-wrappers/Login'
import { push, replace, RouterAction } from 'connected-react-router'

export const AUTHENTICATION_PROGRESS = 'AUTHENTICATION_PROGRESS'
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS'
export const AUTHENTICATION_FAIL = 'AUTHENTICATION_FAIL'
export const DISMISS_AUTH_ERROR = 'DISMISS_AUTH_ERROR'

interface IAuthenticationProgress {
  type: typeof AUTHENTICATION_PROGRESS
}

interface IAuthSuccessAction {
  type: typeof AUTHENTICATION_SUCCESS
  payload: {
    token: string
  }
}

interface IAuthFailAction {
  type: typeof AUTHENTICATION_FAIL
  payload: {
    error: string
  }
}

interface IDismissAuthError {
  type: typeof DISMISS_AUTH_ERROR
}

export type IAuthAction =
  | IAuthenticationProgress
  | IAuthSuccessAction
  | IAuthFailAction
  | IDismissAuthError
export function authenticate(username: string, password: string) {
  return async (dispatch: Dispatch<IAuthAction | RouterAction>) => {
    dispatch(authenticationProgress())

    const [result, error] = await loginWrapper(username, password)

    if (result) {
      dispatch(authenticationSuccess(result.data.token))
      dispatch(push('/'))
    } else if (error) {
      if (error) {
        dispatch(authenticationFail(error))
      }
    }
  }
}

export function authenticationProgress(): IAuthenticationProgress {
  return {
    type: AUTHENTICATION_PROGRESS
  }
}

export function authenticationSuccess(token: string): IAuthSuccessAction {
  return {
    type: AUTHENTICATION_SUCCESS,
    payload: { token }
  }
}

export function authenticationFail(error: any): IAuthFailAction {
  return {
    type: AUTHENTICATION_FAIL,
    payload: { error }
  }
}

export function dismissAuthError(): IDismissAuthError {
  return {
    type: DISMISS_AUTH_ERROR
  }
}
