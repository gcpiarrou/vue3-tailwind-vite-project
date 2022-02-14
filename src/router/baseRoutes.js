const Home 				= () => import('Views/Home.vue');
const WelcomeHome 		= () => import('Views/Home.vue');
const Users 			= () => import('Views/Home.vue');
const NotFound 			= () => import('Views/NotFound.vue');
const WindowData 		= () => import('Views/WindowData.vue');

export default [

	{
		path: '/',
		name: 'home',
		component: Home,
		meta: {
			text:'Home',
			icon:'home',
			visibleInDrawer:true
		},
		children: [
			{
				path: 'welcome',
				component: WelcomeHome,
				name: 'home-welcome',
				meta: {
					text:'Welcome',
					icon:'sun',
					visibleInDrawer:true
				},
			}
		]
	},

	{
		path: "/profile",
		name: "Profile",
		component: Home,
		meta: {
			text:'Profile',
			icon:'user-circle',
			visibleInDrawer:false
		},
	},

	{
		path: "/users",
		name: "Users",
		component: Users,
		meta: {
			text:'Users',
			icon:'user',
			visibleInDrawer:true
		},
	},

	{
		path: "/window-data",
		name: "window-data",
		component: WindowData,
		meta: {
			text:'Window data',
			icon:'desktop',
			visibleInDrawer:true
		},
	},

	{
		path: "/logout",
		name: "logout",
		component: Home,
		meta: {
			text:'Logout',
			icon:'power-off',
			visibleInDrawer:false
		},
	},

	{
		path: "/:catchAll(.*)",
		component: NotFound,
	},
];