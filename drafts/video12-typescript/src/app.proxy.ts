import { IContext } from 'cerebral'
import * as proxy from 'cerebral/proxy'
import * as Main from './main/types'

type State = Main.State

type Providers = Main.Providers

type Sequences = Main.Sequences

export type Context<Props = {}> = IContext<Props> & Providers
export const state = proxy.state as State
// @ts-ignore
export const sequences = proxy.sequences as Sequences
export const props = proxy.props