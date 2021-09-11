const Routes: MenuItem[] = [
    { key: '/main/index', title: '首页', icon: 'bank', component: 'HomeData' },
    { key: '/main/table', title: '表格', icon: 'book', component: 'BaseTable' },
    { key: '/main/message', title: '消息', icon: 'bulb', component: 'Messsage' },
    { key: '/main/auth', title: '权限', icon: 'bug', component: 'Auth' },
    { key: '/main/staff', title: '员工', icon: 'audio', component: 'Staff' },
    {
        key: '/main/setting',
        title: '设置',
        icon: 'rocket',
        subs: [
            {
                key: '/main/setting/usercenter',
                title: '个人中心',
                component: 'Usercenter',
            },
            {
                key: '/main/setting/expand',
                title: '功能扩展',
                component: 'Expand',
            },
        ],
    },
]