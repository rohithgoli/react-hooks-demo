import ClassCounter from './components/ClassCounter';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/useEffectHook/ClassCounterOne';
import HookCounterOne from './components/useEffectHook/HookCounterOne';
import ClassMouse from './components/useEffectHook/ClassMouse';
import HookMouse from './components/useEffectHook/HookMouse';
import MouseContainer from './components/useEffectHook/MouseContainer';
import IntervalClassCounter from './components/useEffectHook/IntervalClassCounter';
import IntervalHookContainer from './components/useEffectHook/IntervalHookContainer';


function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      <IntervalHookContainer />
    </div>
  );
}

export default App;
