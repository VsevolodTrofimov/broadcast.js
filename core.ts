import {Channel} from './containers/channel.ts';
import {Id_generator} from './utils/id_generator.ts';

class Broadcast {
  private channels: { [name: string]: Channel; } = {};
  origin: string = '0';
  id_generator = new Id_generator;

  /**
   *  Crates empty channel
      Adds it to matience
   *  Args:
   *  {string} name | name of new channel
   */
  create_channel(name: string) {
    this.channels[name] = new Channel();
  }
  /**
   * Time needed for syncing messages
   * @method get_time
   * @return {number} current time
   */
  get_time() {
    return 0;
  }
  
  params = {
    max_history: 0
  }
}

var a = new Id_generator;

var broadcast = new Broadcast();

export default broadcast;