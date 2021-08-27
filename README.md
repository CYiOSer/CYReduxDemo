拿到Demo要先安装依赖包，执行：
1. yarn install
2. pod install

Redux 流程：

见根目录图片: Redux_Cycle.png

.produce: 生产
.flow: 流动，排出
.整个流程：UI 组件触发 action 创建函数 -----> action 创建函数返回一个 action ------> action 被传入 redux 中间件(被 saga 等中间件处理) ，产生新的 action，传入 reducer -------> reducer 把数据传给 UI 组件显示 -----> mapStateToProps ------> UI 组件显示

学习链接：

Redux 入门教程（一）：基本用法：
http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

Redux 入门教程（二）：中间件与异步操作：
https://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html

Redux 入门教程（三）：React-Redux 的用法：
https://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html

redux-saga:
https://redux-saga-in-chinese.js.org
