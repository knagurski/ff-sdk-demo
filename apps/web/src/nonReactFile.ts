let flags: Record<string, any> = {}
let interval: ReturnType<typeof setInterval>

export function isReporting(): boolean {
  return !!interval
}

export function setFlags(newFlags: Record<string, any>): void {
  console.log('Setting flags into function JS file')
  flags = newFlags
}

export function kickThingsOff(): void {
  console.log('Starting function JS file')
  interval = setInterval(whatFlagsAreOn, 10000)
}

export function pleaseStop(): void {
  if (interval) {
    console.log('Stopping function JS file')
    clearInterval(interval)
  } else {
    console.log('Function JS file is not logging')
  }
}

export function whatFlagsAreOn(): void {
  const allFlags = Object.entries(flags)

  if (!allFlags.length) {
    console.log('Looks like there are no flags 🤔')
  } else {
    const onFlags = allFlags.filter(([, val]) => val)

    if (!onFlags.length) {
      console.log('Looks like all the flags are off 🥺')
    } else {
      console.log(
        `There are ${onFlags.length} flags on`,
        onFlags.map(([flag]) => flag)
      )
    }
  }
}
