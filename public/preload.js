const { contextBridge } = require('electron')
const si = require('systeminformation')

contextBridge.exposeInMainWorld('siContext', {
  gpuInfo: (() => async () => {
    try {
      const gpuInfo = await si.graphics()

      if (!gpuInfo) {
        return
      }

      return gpuInfo
    } catch (error) {
      console.error('Erro ao acessar a GPU: ', error)
    }
  })()
})
