export default{
	friends: function (){
		let friendList =[
			{
				id:1,
				imgUrl:'almy.jpg',
				tip:1,
				name:'lmy',
				time:new Date(),
				news:'你好!',
				email:'xxx@163.com'
			},
			{
				id:2,
				imgUrl:'lm.jpg',
				tip:0,
				name:'wxj',
				time:new Date(),
				news:'你好',
				email:'xxx@163.com'
			},
			{
				id:3,
				imgUrl:'yjyx.jpg',
				tip:0,
				name:'zpx',
				time:new Date(),
				news:'你好',
				email:'xxx@163.com'
			},
			]
			return friendList
	},
	//好友表
	isFriend: function(){
		let isfriend =[{
				userid:1,
				friend:1
		},
		{
				userid:1,
				friend:2
		},
		{
				userid:1,
				friend:3
		},
		{
				userid:1,
				friend:4
		}]
		return isfriend
	}
}