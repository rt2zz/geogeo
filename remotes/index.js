import { createRemote, remotesMiddleware } from 'redux-remotes'

import geo from './geo'
const remotes = { geo }

const remote = createRemote(remotes, {log: true})
const remoteMW = remotesMiddleware(remote)

export default remoteMW
