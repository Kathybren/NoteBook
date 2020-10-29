module.exports = {
    title: 'NoteBook',
    description: 'Just playing around',
    themeConfig: {
        sidebar: {
            '/work/': [
                ['', '工作'],
                {
                    title: '测试',
                    name: '测试',
                    collabsable: false,
                    children: [
                      ['/work/note', '测试21']
                      
                    ],
                  }
            ],
            '/learn/': [
                ['', '前端'],
                {
                    title: 'Node',
                    name: 'Node',
                    collabsable: false,
                    children: [
                        ['/learn/aa', '目录a'],
                    ],
                },
            ],
        },
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '工作',
                link: '/work/'
            },
            {
                text: '学习',
                link: '/learn/'
            },
            {
                text: '笔记',
                link: '/note/'
            }
        ]
    }

}