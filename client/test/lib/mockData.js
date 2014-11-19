/*jshint unused:false */
/*jshint camelcase:false*/

'use strict';
var 	mockData = (function(){
	var getStreams = function(){
		return {  
			streams:[  
				{  
					id:1,
					uid:'02cd816a2b654f59282e2476384488df',
					stream_url: 'https://s3.amazonaws.com/echoapp/oasis_wonder_wall.mp3',
					volume:77.0,
					progress:0.32,
					song_index:1,
					available:true,
					paused:false,
					artwork_url: 'http://media-cache-ec0.pinimg.com/736x/f1/36/0b/f1360b6e96e2e9d95c6942fcc9065afc.jpg',
					likes_count:32,
					online_listeners_count:83,
					comments_count:44,
					user:{  
						id:1,
						avatar_url:'',
						name:'Millie Emmerich'
					},
					playlist:{  
						id:1,
						title:'Eax',
						songs:[
						{
							uid: 'fi0239uij',
							title: 'Wonder wall'
						}
						]
					},
					your_likes:1
				}
			]
		};
	};
	return{
		getStreams:getStreams
	};
})();