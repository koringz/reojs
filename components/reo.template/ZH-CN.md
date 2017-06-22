# Template()

This is a simple templating engine, similar to other templating engines, which currently uses only basic instructions.

Example：
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

Template：
```js
<script id="template" type="text/html">
	<p>{{personal.unit}}, {{personal.address}} , {{personal.name}}, {{personal.num}}!</p>
</script>
```

### [demo](https://github.com/koringz/reo.js/tree/master/demo)
