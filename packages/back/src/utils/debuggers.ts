import debug from 'debug'

const appDebugger = debug('app:debugger')
const dbDebugger = debug('app:db')
const apiDebugger = debug('app:api')

export { appDebugger, dbDebugger, apiDebugger }
