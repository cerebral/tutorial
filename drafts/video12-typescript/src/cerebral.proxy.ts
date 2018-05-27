import { IContext } from 'cerebral'
import * as proxy from 'cerebral/proxy'
import * as Main from './main/types'

type State = Main.State

type Providers = Main.Providers

export type Context = IContext<{}> & Providers
export const state = proxy.state as State
export const props = proxy.props