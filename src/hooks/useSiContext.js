import { useState, useEffect } from 'react'

export const useSiContext = () => {
  const [gpuName, setGpuName] = useState('')
  const [gpuTemp, setGpuTemp] = useState('')

  useEffect(() => {
    const request = async () => {
      const gpuInfo = await window.siContext.gpuInfo()

      if (!gpuInfo) {
        return
      }

      setGpuName(gpuInfo?.controllers[0]?.name)
      setGpuTemp(gpuInfo?.controllers[0]?.temperatureGpu)
    }

    request()
  }, [])

  return { gpuName, gpuTemp }
}
