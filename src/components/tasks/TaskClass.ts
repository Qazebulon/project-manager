export const MODE = {
  EDIT: true,
  VIEW: false,
};

export class TaskClass {
    text: string
    isComplete: boolean
    isInEditMode: boolean
    constructor(text: string) {
      this.text = text
      this.isComplete = false
      this.isInEditMode = true
    }
  }
  
  