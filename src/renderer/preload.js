// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
// preload with contextIsolation enabled

import { ipcRenderer, contextBridge } from 'electron'

contextBridge.exposeInMainWorld(
  'api',
  {
    random: () => ipcRenderer.invoke('random')
  }
)
