import * as cerebral from 'cerebral'
import * as Main from './main/types'

type State = Main.State

type Providers = Main.Providers

type Sequences = Main.Sequences

export type Context<Props = {}> = cerebral.IContext<Props> & Providers
export const state = cerebral.state as State
export const sequences = cerebral.sequences as Sequences
export const props = cerebral.props