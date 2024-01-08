import { FFContextValue } from '@harnessio/ff-react-client-sdk'

export class Reporter {
  private ffClient: FFContextValue['client']
  private interval: ReturnType<typeof setInterval> | undefined
  private flagsToReport: string[]

  constructor(
    client: FFContextValue['client'],
    flagsToReport: string[] = ['alternative_text', 'dark_mode']
  ) {
    console.log('Initializing Reporter clas')
    this.ffClient = client
    this.flagsToReport = flagsToReport
  }

  isReporting(): boolean {
    return !!this.interval
  }

  kickThingsOff(): void {
    console.log('Starting from Reporter class')
    this.interval = setInterval(() => this.whatFlagsAreOn(), 10000)
  }

  pleaseStop(): void {
    if (this.interval) {
      console.log('Stopping Reporter class')
      clearInterval(this.interval)
      this.interval = undefined
    } else {
      console.log('Reporter class is not logging')
    }
  }

  whatFlagsAreOn(): void {
    this.flagsToReport.forEach((flag) =>
      console.log(`${flag} is ${this.ffClient?.variation(flag, '🤷🏼')}`)
    )
  }
}
