pushState/replaceState的用法（添加/修改浏览器历史记录）的操作：
一、总结了几点优点：
1、页面的跳转（前进后退，点击等）不重新请求页面
2、页面URL与页面展现内容一致（符合人们对传统网页的认识）
3、在不支持的浏览器下降级成传统网页的方式
二、history.state:
  指当前URL下对应的状态信息。如果当前URL不是通过pushState或者replaceState产生的，那么history.state是null。
三、history.pushState(state, title, url)
将当前URL和history.state加入到history中，并用新的state和URL替换当前。不会造成页面刷新。
四、history.replaceState
用新的state和URL替换当前。不会造成页面刷新。
五、window.onpopstate
history.go和history.back（包括用户按浏览器历史前进后退按钮）触发，并且页面无刷的时候（由于使用pushState修改了history）会触发popstate事件，事件发生时浏览器会从history中取出URL和对应的state对象替换当前的URL和history.state。通过event.state也可以获取history.state。
