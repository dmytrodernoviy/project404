const isConsoleLog = true;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const consoleLog = (title: string, info: any): void => {
  isConsoleLog && console.log(title, info);
};
