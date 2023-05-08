export const STATUS = {
    DISCARDED: "DISCARDED",
    INITIAL: "INITIAL",
    QUEUED: "QUEUED",
    CURRENT: "CURRENT",
    ON_HOLD: "ON HOLD",
    DEPLOYED: "DEPLOYED"
}
export const MODE = {
  EDIT: true,
  VIEW: false,
};
export class IdeaClass {
    name: string
    description: string
    status: string
    mode: boolean
    constructor(name: string, description: string) {
      this.name = name
      this.description = description
      this.status = STATUS.INITIAL
      this.mode = MODE.VIEW
    }
}
  
  