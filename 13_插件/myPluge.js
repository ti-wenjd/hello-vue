(function () {
    // 需要向外暴露的插件对象
    const MyPlugin = {}
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            // 逻辑...
            console.log("vue函数对象的方法myGlobalMethod ")
        }

        // 2. 添加全局资源
        Vue.directive('my-directive', function (el,binding) {
            el.textContent = binding.value.toUpperCase()
        })

        // // 3. 注入组件
        // Vue.mixin({
        //     created: function () {
        //         // 逻辑...
        //     }
        //     ...
        // })

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {
            // 逻辑...
            console.log("vue 实例对象方法$myMethod")
        }
    }

    //向外暴露
    window.MyPlugin = MyPlugin

})()