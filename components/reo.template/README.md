# Template()

这是一个简单的模版引擎，和其他的模版引擎类似，目前只能使用基础指令。

例如：
```js
reo.template({
	target : '#container',
	template : '#template',
	val : {
		personal : {
			unit : "The China",
			address : "Shanghai Baoshanqu Qihua rd",
			name : 'koringz',
			num : 628
		}
	}
}
```

模版：
```js
<script id="template" type="text/html">
	<p>{{personal.unit}}, {{personal.address}} , {{personal.name}}, {{personal.num}}!</p>
</script>
```

### [demo](https://github.com/koringz/reo.js/tree/master/demo)
