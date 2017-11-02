import * as actions from './index';

describe('actions test', ()=> {
  it('should create an action to detect initial fetch', ()=>{
    const expectedAction = {
      type: 'INIT_API_CALL'
    };
    expect(actions.initFetchAction()).toEqual(expectedAction);
  });
});
