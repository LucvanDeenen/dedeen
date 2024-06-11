import { DraggableDetails, DraggableInstance } from '@/models/item';
import { LineDetails, LineInstance } from '@/models/line';
import { createStore } from 'vuex'

interface State {
  positions: DraggableInstance;
  lines: LineInstance;
}

const store = createStore<State>({
  state: {
    positions: {
      values: {}
    },
    lines: {
      values: {}
    },
  },

  mutations: {
    setPosition(state, { item }: { item: DraggableDetails }) {
      state.positions.values[item.internalId] = item;
    },
    removePosition(state, { internalId }: { internalId: string }) {
      delete state.positions.values[internalId];
    },
    setLine(state, { line } : { line: LineDetails }) {
      state.lines.values[line.internalId] = line;
    },
    removeLine(state, { internalId }: { internalId: string }) {
      delete state.lines.values[internalId];
    },
  },
  
  getters: {
    getPositions: (state) => {
      return state.positions;
    },
    getLines: (state) => {
      return state.lines;
    },
  },
});

export default store;
