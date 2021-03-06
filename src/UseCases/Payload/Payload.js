export default class Payload {
  /**
   * 
   * @param {Number} status type of status
   * @param {*} data all data to be returned
   */
  constructor (status, data) {
    if (!status) throw new Error('Payload Status is required')

    if (!data) throw new Error('Payload Data is required')

    this.status = status
    this.data = data
  }
}