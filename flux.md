## reflux

### action
* Action采用订阅/发布模式，而Action本身是一个消息发布器，所以其不需要依赖任何其他模块（store、视图、react等）。
* Action的触发可直接传入参数，这些参数会传递到监听器上

### store
* Store监听依赖的action，当消息触发时执行对应的监听器。
* Store本身也是一个消息发布器，可通过`listen`来添加监听，`trigger`来触发事件
* Store可以监听另一个Store
