import { PAUSED } from '../../../constants/states';
import GamePanel from '../../GamePanel';

export default {
  component: GamePanel,

  props: {
    gameState: PAUSED,
    score: 999,
    lines: 123,
    nextTetromino: 'I',
    onStart: () => console.log('Start'),
    onPause: () => console.log('Pause'),
    onResume: () => console.log('Resume')
  }
};
