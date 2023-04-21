## Hook概览

1、什么是 Hook？

Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。

注意：

- Hook 不能和 class 组件中使用
- Hook 的名字总是以 `use` 开头

hook 为已知的 React 提供更直接的 API：props，state，context，refs 以及 生命周期。

2、Hook 的动机？

- **Hook 使你在无需修改组件结构的情况下复用状态逻辑。**
- **Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）。**
- **Hook 使你在非 class 的情况下可以使用更多的 React 特性。**

-->> React 组件像一个函数，而 Hook 则拥抱函数，同时没有牺牲 React 的精神原则。

3、Hook 使用规则

Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

- 只能在**函数最外层**调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 **React 的函数组件**中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中，我们稍后会学习到。）

4、什么时候使用 Hook？

如果你在编写函数组件并意识到需要向其添加一些 state。





| sdf  | adsfa | afds |
| ---- | ----- | ---- |
| asdf | asdf  | sdaf |
| asdf | asdf  | adsf |
| adsf | asdf  | asdf |



### State Hook

useState

```javascript
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}><button onClick={() =><button onClick={() => setCount(count + 1)}><button onClick={() => setCount(count + 1)}>
        Click me
        Click me setCount(count + 1)}>
        Click me
        Click me
      </button>
    </div>
  );
}
复制代码
```

### Effect Hook

作用/副作用：数据获取、订阅、手动修改DOM

useEffect 就是一个 Effect Hook。给函数组件增加了操作副作用的能力。

例如，下面这个**组件在 React 更新 DOM 后**会设置一个页面标题：

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // 副作用函数是在组件内声明的
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
复制代码
```

当你调用 `useEffect` 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。由于副作用函数是在组件内声明的，所以它们可以访问到组件的 props 和 state。默认情况下，React 会在每次渲染后调用副作用函数 —— **包括**第一次渲染的时候。

**副作用函数还可以通过返回一个函数来指定如何“清除”副作用。**

例如，在下面的组件中使用副作用函数来订阅好友的在线状态，并通过取消订阅来进行清除操作：

```javascript
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
      
    return () => {     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
复制代码
```

### 自定义 Hook

自定义 Hook 可以让你在不增加组件的情况下实现在组件之间重用一些状态逻辑。

如果函数的名字以 “`use`” 开头并调用其他 Hook，我们就说这是一个自定义 Hook。

假设我们想在另一个组件里重用这个订阅逻辑。 首先，我们把这个逻辑抽取到一个叫做 `useFriendStatus` 的自定义 Hook 里：

```scss
import React, { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
复制代码
```

**它将 `friendID` 作为参数，并返回该好友是否在线：**

现在我们可以在两个组件中使用它：

```javascript
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
复制代码
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
复制代码
```

每个组件间的 state 是完全独立的。Hook 是一种复用***状态逻辑***的方式，它不复用 state 本身。事实上 Hook 的每次*调用*都有一个完全独立的 state —— 因此你可以在单个组件中多次调用同一个自定义 Hook。

### 其他 Hook

#### useContext

让你不使用组件嵌套就可以订阅 React 的 Context。

#### useReducer

可以让你通过 reducer 来管理组件本地的复杂 state。

## 使用 State Hook

#### 声明 State 变量

- **调用 useState 方法的时候做了什么?**  它定义一个 “state 变量”。
- **useState 需要哪些参数？**  `useState()` 方法里面唯一的参数就是初始 state。
- **useState 方法的返回值是什么？**  返回值为：当前 state 以及更新 state 的函数。

```javascript
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量
  const [count, setCount] = useState(0);
复制代码
```

#### 读取 State

```bash
  <p>You clicked {count} times </p>
复制代码
```

#### 更新 State

```scss
  <button onClick={() => setCount(count + 1)}>
    Click me
  </button>
复制代码
```

## 使用 Effect Hook

*Effect Hook* 可以让你在函数组件中执行副作用操作。

副作用：数据获取、设置订阅、手动更改 React 组件中的 DOM。

在 React 组件中有两种常见副作用操作：**需要清除的**和**不需要清除的**。

#### 无需清除的 effect --- 不需要返回

只想**在 React 更新 DOM 之后运行一些额外的代码。** 比如发送网络请求，手动变更 DOM，记录日志，这些都是常见的无需清除的操作。

在 React 对 DOM 进行操作之后，立即更新了 document 的 title 属性

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
复制代码
```

- **useEffect 做了什么？**  通过使用这个 Hook，你可以告诉 React 组件需要在渲染后执行某些操作。
- **为什么在组件内部调用 useEffect？**  将 `useEffect` 放在组件内部让我们可以在 effect 中直接访问 `count` state 变量（或其他 props）
- **useEffect 会在每次渲染后都执行吗？**  是的，默认情况下，它在第一次渲染之后*和*每次更新之后都会执行。

#### 需要清除的 effect --- 需要返回

还有一些副作用是需要清除的。例如**订阅外部数据源**。这种情况下，清除工作是非常重要的，可以防止引起内存泄露！

```javascript
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    //带有返回 return 即需要进行清除副作用
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
复制代码
```

- **为什么要在 effect 中返回一个函数？即return。**
- 因为有些副作用可能需要清除，所以需要返回一个函数。 这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。
- **React 何时清除 effect？**  React 会在组件卸载的时候执行清除操作。

#### useEffect 中的第二个可选参数

```ini
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新
复制代码
```

解析：

上面这个示例中，我们传入 `[count]` 作为第二个参数。其作用：如果 `count` 的值是 `5`，而且我们的组件重渲染的时候 `count` 还是等于 `5`，React 将对前一次渲染的 `[5]` 和后一次渲染的 `[5]` 进行比较。因为数组中的所有元素都是相等的(`5 === 5`)，React 会跳过这个 effect，这就实现了性能的优化。

当渲染时，如果 `count` 的值更新成了 `6`，React 将会把前一次渲染时的数组 `[5]` 和这次渲染的数组 `[6]` 中的元素进行对比。这次因为 `5 !== 6`，React 就会再次调用 effect。如果数组中有多个元素，即使只有一个元素发生变化，React 也会执行 effect。

注意：

- 如果你要使用此优化方式，请确保数组中包含了**所有外部作用域中会随时间变化并且在 effect 中使用的变量**，否则你的代码会引用到先前渲染中的旧变量。
- 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（`[]`）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。这并不属于特殊情况 —— 它依然遵循依赖数组的工作方式。
- 如果你传入了一个空数组（`[]`），effect 内部的 props 和 state 就会一直拥有其初始值。尽管传入 `[]` 作为第二个参数更接近大家更熟悉的 `componentDidMount` 和 `componentWillUnmount` 思维模式，但我们有[更好的](https://link.juejin.cn?target=https%3A%2F%2Fzh-hans.reactjs.org%2Fdocs%2Fhooks-faq.html%23is-it-safe-to-omit-functions-from-the-list-of-dependencies)[方式](https://link.juejin.cn?target=https%3A%2F%2Fzh-hans.reactjs.org%2Fdocs%2Fhooks-faq.html%23what-can-i-do-if-my-effect-dependencies-change-too-often)来避免过于频繁的重复调用 effect。除此之外，请记得 React 会等待浏览器完成画面渲染之后才会延迟调用 `useEffect`，因此会使得额外操作很方便。

## Hook 规则

1. **只在最顶层使用 Hook**
2. **不用在循环，条件或嵌套函数中调用 Hook，** 确保总是在拿到 React 函数的最顶层以及任何 return 之前调用他们。--> 能确保 Hook 在每一次渲染中都按照同样的顺序被调用。这让 React 能够在多次的 `useState` 和 `useEffect` 调用之间保持 hook 状态的正确。
3. **只在 React 函数中调用 Hook**
4. **不要在普通的 JavaScript 函数中调用 Hook**。你可以：
   - 在 React 的函数组件中调用 Hook
   - 在自定义 Hook 中调用其他 Hook

在单个组件中使用多个 State Hook 或 Effect Hook， React 怎么知道哪个 state 对应哪个 `useState`？

答案是 React 靠的是 Hook 调用的顺序。

## 自定义 Hook

**自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook。**

1. 提取自定义 Hook

例如，下面的 `useFriendStatus` 是我们第一个自定义的 Hook:

```scss
import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
复制代码
```

此处 `useFriendStatus` 的 Hook 目的是订阅某个好友的在线状态。这就是我们需要将 `friendID` 作为参数，并返回这位好友的在线状态的原因。

```javascript
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  return isOnline;
}
复制代码
```

1. 使用自定义 Hook

我们一开始的目标是在 `FriendStatus` 和 `FriendListItem` 组件中去除重复的逻辑，即：这两个组件都想知道好友是否在线。

```javascript
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
复制代码
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
复制代码
```

- **这段代码等价于原来的示例代码吗？** 等价。
- **自定义 Hook 必须以 “use” 开头吗？** 必须如此。
- **在两个组件中使用相同的 Hook 会共享 state 吗？** 不会。自定义 Hook 是一种重用状态逻辑的机制(例如设置为订阅并存储当前值)，所以每次使用自定义 Hook 时，**其中的所有 state 和副作用都是完全隔离的。**
- **自定义 Hook 如何获取独立的 state？** 每次*调用* Hook，它都会获取独立的 state。

### 在多个 Hook 之间传递信息

由于 Hook 本身就是函数，因此我们可以在它们之间传递信息。

如下是一个聊天消息接收者的选择器，它会显示当前选定的好友是否在线：

```ini
const friendList = [
  { id: 1, name: 'Phoebe' },
  { id: 2, name: 'Rachel' },
  { id: 3, name: 'Ross' },
];

function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);

  return (
    <>
      <Circle color={isRecipientOnline ? 'green' : 'red'} />
      <select
        value={recipientID}
        onChange={e => setRecipientID(Number(e.target.value))}
      >
        {friendList.map(friend => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </>
  );
}
复制代码
```

我们将当前选择的好友 ID 保存在 `recipientID` 状态变量中，并在用户从 `<select>` 中选择其他好友时更新这个 state。

由于 `useState` 为我们提供了 `recipientID` 状态变量的最新值，因此我们可以将它作为参数传递给自定义的 `useFriendStatus` Hook：

```ini
 const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);
复制代码
```

如此可以让我们知道当前选中的好友是否在线。当我们选择不同的好友并更新 `recipientID` 状态变量时，`useFriendStatus` Hook 将会取消订阅之前选中的好友，并订阅新选中的好友状态。

## Hook API 索引

1. 基础 Hook

   - useState

     ```scss
     const [state, setState] = useState(initialState);
     复制代码
     ```

     返回一个 state，以及更新 state 的函数。

   - useEffect

   - useContext

2. 额外的 Hook

   - useReducer
   - useCallback
   - useMemo
   - useRef
   - useImerativeHandle
   - useLayoutEffect
   - useDebugValue