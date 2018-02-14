// @flow

import { createFixture } from '../../../../utils/create-fixture';
import { getSampleUser } from '../../../../utils/test-helpers';
import { getBlankPlayer } from '../../../../reducers/game';
import GetReady from '../../GetReady';

const user = getSampleUser();
const otherPlayer = {
  ...getBlankPlayer('1337', user),
  ping: 1234
};

export default createFixture({
  component: GetReady,

  props: {
    otherPlayer,
    onReady: () => console.log(`Ready!`)
  },

  container: {
    width: 10,
    gameHeight: true,
    backgroundColor: 'rgba(236, 240, 241, 0.85)'
  }
});
