import { ipcRenderer } from "electron"
const { contextBridge } = require('electron')

console.log("preloaded file")

const electronHandler = {
  close: () => ipcRenderer.send("closeApp", "closeApp"),
  minimize: () => ipcRenderer.send("minimizeApp", "minimizeApp"),
  maximize: () => ipcRenderer.send("maximizeApp", "maximizeApp"),
  on: (channel: string, func: any) => ipcRenderer.send(channel, (evt: any, ...args: any[]) =>func(...args)),
}

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;