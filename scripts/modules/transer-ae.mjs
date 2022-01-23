

export class TransferAe {


  static register() {

    this.hooks();
  }

  static hooks() {

    //all of my hooks
    //
    Hooks.on('createChatMessage', TransferAe._createChatMessage)
  }

  static _createChatMessage(...args) {

  }

}
