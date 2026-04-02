import { ApplicationMenu, BrowserWindow, Utils } from "electrobun/bun";

// Create the main application window
const mainWindow = new BrowserWindow({
  title: "Hello Electrobun!",
  url: "views://mainview/index.html",
  frame: {
    width: 800,
    height: 600,
    x: 100,
    y: 100,
  },
});

ApplicationMenu.setApplicationMenu([
  { label: "Poke", action: "poke" },
  { label: "Quit", action: "quit" },
]);

ApplicationMenu.on("application-menu-clicked", (e) => {
  console.log("application menu clicked", e.data.action);
  if (e.data.action == "quit") {
    Utils.quit();
  }
});

mainWindow.on("close", () => {
  Utils.quit();
});
