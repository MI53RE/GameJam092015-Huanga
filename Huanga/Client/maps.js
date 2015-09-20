var Map = modules.export = {
	largeMap = [
		[
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
			[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
			[0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0],
			[0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0],
			[0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0],
			[0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0],
			[0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0],
			[0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0],
			[0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0],
			[0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0],
			[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
			[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
			[0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0],
			[0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0],
			[0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0],
			[0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0],
			[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
			[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
			[0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0],
			[0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0],
			[0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0],
			[0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0],
			[0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0],
			[0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0],
			[0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0],
			[0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0],
			[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
			[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		],
		[  //a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p 	     q,r,s,t,u,v,w,x,y,z,1,2,3,4,5,6
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,/* 1 */ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,/* 2 */ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,/* 3 */ 0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0],
			[0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,/* 4 */ 0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0],
			[0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,/* 5 */ 0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0],
			[0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,/* 6 */ 0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,/* 7 */ 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,/* 8 */ 0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0],
			[0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,/* 9 */ 0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,/* 10*/ 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,/* 11*/ 0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0],
			[0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,/* 12*/ 0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0],
			[0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,/* 13*/ 0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0],
			[0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,/* 14*/ 0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,/* 15*/ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,/* 16*/ 0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
		   //a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p 	     q,r,s,t,u,v,w,x,y,z,1,2,3,4,5,6
			[0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,/* 17*/ 0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,/* 18*/ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,/* 19*/ 0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0],
			[0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,/* 20*/ 0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0],
			[0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,/* 21*/ 0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0],
			[0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,/* 22*/ 0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,/* 23*/ 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,/* 24*/ 0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0],
			[0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,/* 25*/ 0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,/* 26*/ 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,/* 27*/ 0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0],
			[0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,/* 28*/ 0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0],
			[0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,/* 29*/ 0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0],
			[0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,/* 30*/ 0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,/* 31*/ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,/* 32*/ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		],
	],

	mapMini: [
		[
			[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0],
			[0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0],
			[0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0],
			[0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1],
			[1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0],
			[0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0],
			[0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0],
			[0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
		],
		[
			[0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0],
			[0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0],
			[0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0],
			[0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1],
			[1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0],
			[0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0],
			[0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0],
			[0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
		],
		[
			[0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
			[0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0],
			[0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0],
			[0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0],
			[1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1],
			[1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1],
			[1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1],
			[1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1],
			[0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0],
			[0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0],
			[0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0],
			[0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
		],
		[
			[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
			[0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0],
			[0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0],
			[0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0],
			[1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1],
			[1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1],
			[1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1],
			[1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1],
			[0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0],
			[0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0],
			[0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
			[0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0],
			[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
		],
	]
}